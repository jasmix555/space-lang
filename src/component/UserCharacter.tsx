// UserCharacter.tsx
import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { getAuth, User } from "firebase/auth";
import { getFirestore, collection, doc, getDoc } from "firebase/firestore/lite";
import Image from "next/image";
import style from "@/styles/userCharacter.module.scss";
import Link from "next/link";

export default function UserCharacter() {
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const auth = getAuth();
        const user: User | null = auth.currentUser;

        if (user) {
          const db = getFirestore();
          const usersCollection = collection(db, "users");
          const userDocRef = doc(usersCollection, user.uid);
          const userData = (await getDoc(userDocRef)).data();

          if (userData && userData.character) {
            setCharacter(userData.character);
          } else {
            toast({
              title: "Info",
              description: "You haven't selected a character yet.",
              status: "info",
              position: "top",
            });
          }
        }
      } catch (error) {
        console.error(error);
        toast({
          title: "Error",
          description: "Failed to fetch user character data.",
          status: "error",
          position: "top",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [toast]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={style.characterWrap}>
      <div className={style.character}>
        {character && (
          <Link href={"/charSelect"}>
            <Image
              src={`/characters/${character}.svg`}
              alt={`UserCharacter ${character}`}
              width={200}
              height={200}
            />
          </Link>
        )}
      </div>
    </div>
  );
}
