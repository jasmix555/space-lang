import { FormEvent, useEffect, useRef, useState } from "react";
import {
  getDatabase,
  onChildAdded,
  push,
  ref,
  serverTimestamp,
  get,
  onValue,
} from "@firebase/database";
import { FirebaseError } from "@firebase/util";
import { AuthGuard } from "@/feature/auth/component/AuthGuard/AuthGuard";
import {
  doc,
  getDoc,
  getFirestore,
  collection,
  updateDoc,
  arrayUnion,
  Firestore,
} from "firebase/firestore";
import { getAuth, User } from "firebase/auth";
import Header from "@/component/Header";
import { RiMenu3Line } from "react-icons/ri";
import {
  FaXmark,
  FaRegCircleXmark,
  FaBell,
  FaUserAstronaut,
  FaBook,
  FaGear,
  FaUsers,
  FaComments,
} from "react-icons/fa6";
import { PiBookBookmark, PiBookBookmarkFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { BsSend } from "react-icons/bs";
import { format, differenceInSeconds, addHours } from "date-fns";
import { useRouter } from "next/router";
import style from "@/styles/groupChat.module.scss";
import LayoutPage from "@/component/LayoutPage";
import Image from "next/image";
import Background from "@/component/Background";
import { usePresence } from "@/component/presenceUtils";

const menus = {
  icon: <RiMenu3Line />,
  options: [
    { icon: <FaRegCircleXmark />, link: "/#" },
    { icon: <FaBell />, link: "/#" },
    { icon: <FaUserAstronaut />, link: "/#" },
    { icon: <FaUsers />, link: "/#" },
    { icon: <FaEdit />, link: "/#" },
    { icon: <FaBook />, link: "/#" },
    { icon: <FaGear />, link: "/../settings" },
  ],
};

type MessageProps = {
  message: string;
  userId: string;
  userNickname: string;
  timestamp: number;
  character: number; // Add character field to MessageProps
};

type DictionaryItem = {
  message: string;
  timestamp: number;
};

const Message = ({
  message,
  userNickname,
  timestamp,
  character,
  userId,
}: MessageProps) => {
  const formattedTimestamp = format(new Date(timestamp), "HH:mm");
  const auth = getAuth();
  const isCurrentUser = userId === auth.currentUser?.uid;
  const [isInteracted, setIsInteracted] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Assume dictionary is an array of DictionaryItem
  const userDictionary: DictionaryItem[] = []; // Replace with actual user dictionary

  useEffect(() => {
    // Check if the message is already saved in the dictionary when the component mounts
    const isMessageSaved = userDictionary.some(
      (existingMessage) => existingMessage.message === message
    );
    setIsBookmarked(isMessageSaved);
  }, []); // Empty dependency array ensures that this effect runs only once when the component mounts

  const handleBookmarkClick = async () => {
    setIsInteracted(true);

    try {
      const auth = getAuth();
      const user: User | null = auth.currentUser;

      if (!user) {
        return; // Exit if there is no user
      }

      const db = getFirestore();
      const usersCollection = collection(db, "users");
      const userDocRef = doc(usersCollection, user.uid);

      const dictionaryItem: DictionaryItem = {
        message,
        timestamp,
      };

      // Check if the message already exists in the dictionary
      const userData = (await getDoc(userDocRef)).data();
      const existingMessages: DictionaryItem[] = userData?.dictionary || [];
      const isMessageExists = existingMessages.some(
        (existingMessage) => existingMessage.message === message
      );

      if (!isMessageExists) {
        // Only save the message if it doesn't exist in the dictionary
        await updateDoc(userDocRef, {
          dictionary: arrayUnion(dictionaryItem),
        });

        setIsBookmarked(true); // Update state to indicate bookmarking
        console.log("Message saved to dictionary!");
      } else {
        console.log("Message already exists in the dictionary.");
      }
    } catch (error) {
      console.error("Error saving message to dictionary:", error);
    }
  };

  return (
    <div className={isCurrentUser ? style.messageWrapUser : style.messageWrap}>
      {isCurrentUser ? (
        // Display this when the message is sent by the current user
        <>
          <div className={style.wrapper}>
            <div className={style.timestamp}>
              <p>{formattedTimestamp} </p>
            </div>
            <div className={style.messageContentWrap}>
              <div className={style.message}>{message}</div>
            </div>
          </div>
        </>
      ) : (
        // Display this when the message is sent by someone else
        <>
          <div className={style.avatarWrap}>
            <div className={style.avatar}>
              <Image
                src={`/characters/${character}.svg`}
                alt={`UserCharacter ${character}`}
                width={50}
                height={50}
              />
            </div>
            <p>{userNickname}</p>
          </div>
          <div className={style.wrapper}>
            <div className={style.messageContentWrap}>
              <div className={style.message}>{message}</div>
            </div>
            <div className={style.timestamp}>
              <div className={style.bookmark}>
                <button onClick={handleBookmarkClick}>
                  {isBookmarked ? <PiBookBookmarkFill /> : <PiBookBookmark />}
                </button>
              </div>
              <p>{formattedTimestamp} </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const Page = () => {
  const messagesElementRef = useRef<HTMLDivElement | null>(null);
  const [message, setMessage] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [userCharacter, setUserCharacter] = useState<number>(1); // Initialize with a default value
  const auth = getAuth();
  const user: User | null = auth.currentUser;
  const [showGroupChat, setShowGroupChat] = useState(false);
  const router = useRouter();
  const { groupId, planet } = router.query; // No need to extract 'title' from the router query
  const [groupInfo, setGroupInfo] = useState({ title: "", expirationTime: "" });
  const [dictionary, setDictionary] = useState<DictionaryItem[]>([]);

  // Send message
  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const db = getDatabase();
      const dbRef = ref(db, `groupChatMessages/${groupId}`);
      await push(dbRef, {
        message,
        userId: user ? user.uid : "",
        userNickname: user ? nickname : "",
        timestamp: serverTimestamp(),
        character: userCharacter, // Pass user's character number to the message
      });
      setMessage("");
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log(e);
      }
    }
  };

  // Toggle group chat
  const toggleGroupChat = () => {
    setShowGroupChat(!showGroupChat);
  };

  // Listen for new messages
  const [chats, setChats] = useState<MessageProps[]>([]);

  const [countdown, setCountdown] = useState<number | null>(null);
  const [userCount, setUserCount] = useState(0);

  // Increase user count when entering the group chat
  usePresence(groupId as string);

  // Fetch group information
  useEffect(() => {
    const fetchGroupInfo = async () => {
      try {
        console.log("Fetching group information for groupId:", groupId);
        const db = getFirestore();
        const groupDocRef = doc(
          collection(db, "planets", planet as string, "groups"),
          groupId as string
        );
        const groupDocSnapshot = await getDoc(groupDocRef);
        console.log("Group doc snapshot:", groupDocSnapshot);

        if (groupDocSnapshot.exists()) {
          const groupData = groupDocSnapshot.data();
          // console.log("Group data:", groupData);

          // Format the expiration time
          const expirationTime = groupData.expirationTime?.toDate();
          const formattedExpirationTime = expirationTime
            ? format(expirationTime, "yyyy-MM-dd HH:mm:ss")
            : "";

          setGroupInfo({
            title: groupData.title,
            expirationTime: formattedExpirationTime,
          });
        } else {
          console.log("Group not found.");
        }
      } catch (e) {
        console.error("Error fetching group information:", e);
      }
    };

    fetchGroupInfo();
  }, [groupId]);

  // Fetch user nickname and character
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user: User | null = auth.currentUser;
        const db: Firestore = getFirestore();
        const usersCollection = collection(db, "users");
        const userDocRef = doc(usersCollection, user?.uid);
        const userData = (await getDoc(userDocRef)).data();

        if (userData) {
          setNickname(userData.nickname);
          setUserCharacter(userData.character);
          setDictionary(userData.dictionary || []); // Assuming dictionary is an array
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  // Listen for new messages
  useEffect(() => {
    try {
      const db = getDatabase();
      const dbRef = ref(db, `groupChatMessages/${groupId}`);
      return onChildAdded(dbRef, (snapshot) => {
        const message = String(snapshot.val()["message"] ?? "");
        const userId = String(snapshot.val()["userId"] ?? "");
        const userNickname = String(snapshot.val()["userNickname"] ?? "");
        const timestamp = Number(snapshot.val()["timestamp"] ?? 0);
        const character = Number(snapshot.val()["character"] ?? 1);

        setChats((prev) => [
          ...prev,
          { message, userId, userNickname, timestamp, character },
        ]);
      });
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.error(e);
      }
      return;
    }
  }, [groupId]);

  // Scroll to the bottom of the messages when a new message is added
  useEffect(() => {
    messagesElementRef.current?.scrollTo({
      top: messagesElementRef.current.scrollHeight,
    });
  }, [chats]);

  useEffect(() => {
    const calculateCountdown = () => {
      if (groupInfo.expirationTime) {
        const now = new Date();
        const sixHoursLater = addHours(new Date(groupInfo.expirationTime), 6);

        const secondsRemaining = differenceInSeconds(sixHoursLater, now);

        if (secondsRemaining > 0) {
          setCountdown(secondsRemaining);
        } else {
          // The countdown has reached zero
          setCountdown(null);
        }
      }
    };

    // Calculate initially and then set up interval for continuous updates
    calculateCountdown();

    const intervalId = setInterval(calculateCountdown, 1000); // Update every second

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [groupInfo.expirationTime]);

  /// Listen for changes in user count and presence
  useEffect(() => {
    const fetchUserCount = () => {
      if (groupId) {
        try {
          const db = getDatabase();
          const groupChatUsersRef = ref(db, `groupChatUsers/${groupId}`);

          // Fetch the data once to get an initial count
          get(groupChatUsersRef).then((snapshot) => {
            const count = Object.keys(snapshot.val() || {}).length;
            setUserCount(count);
          });

          // Use onValue to listen for changes in the user count and presence
          return onValue(groupChatUsersRef, (snapshot) => {
            const count = Object.keys(snapshot.val() || {}).length;
            setUserCount(count);
          });
        } catch (error) {
          console.error("Error fetching user count:", error);
        }
      }
    };

    const unsubscribeUserCount = fetchUserCount();

    return () => {
      if (unsubscribeUserCount) {
        unsubscribeUserCount();
      }
    };
  }, [groupId]);

  return (
    <LayoutPage>
      <AuthGuard>
        <Background />
        <div className={style.body}>
          <Header contents={menus} />

          <div className={style.title}>
            <h1>{groupInfo.title || "ロード中..."}</h1>
            {countdown !== null ? (
              <p className={style.number}>
                {format(new Date(countdown * 1000), "hh:mm:ss")}
              </p>
            ) : (
              <p className={style.number}>時間終了です！</p>
            )}
          </div>

          <div className={style.capacity}>
            <div className={style.currentUsers}>
              <FaUsers />
              <p>{userCount}/5</p>
            </div>
          </div>

          <div className={style.chatlog}>
            <button className={style.groupChatButton} onClick={toggleGroupChat}>
              <FaComments />
            </button>
          </div>

          <div
            className={`${style.groupChatWrap} ${
              showGroupChat ? style.showChat : ""
            }`}
          >
            <div className={style.groupChatContent}>
              <div className={style.header}>
                <div className={style.groupTitle}>
                  <button className={style.closeBtn} onClick={toggleGroupChat}>
                    <FaXmark />
                  </button>
                  <h1>{groupInfo.title || "ロード中..."}</h1>
                </div>
              </div>
              <div className={style.showMessage} ref={messagesElementRef}>
                {chats.map((chat, index) => (
                  <Message
                    message={chat.message}
                    userId={chat.userId}
                    userNickname={chat.userNickname}
                    timestamp={chat.timestamp}
                    character={chat.character}
                    key={`ChatMessage_${index}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={handleSendMessage}>
            <div className={style.inputWrap}>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={style.input}
                placeholder="入力してください。"
              />
              <button
                type={"submit"}
                disabled={message === ""}
                className={style.sendButton}
              >
                <BsSend />
              </button>
            </div>
          </form>
        </div>
      </AuthGuard>
    </LayoutPage>
  );
};

export default Page;
