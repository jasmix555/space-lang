// Import necessary modules and styles
import { FormEvent, useState, useEffect } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "@firebase/util";
import { useRouter } from "next/router";
import style from "@/styles/form.module.scss";
import { getDoc, doc, getFirestore } from "firebase/firestore/lite";
import LayoutPage from "@/component/LayoutPage";
import Background from "@/component/Background";
import Toast, { ToastProps } from "@/component/Toast";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { push } = useRouter();
  const auth = getAuth();

  // Toast state and function
  const [toast, setToast] = useState<ToastProps>({
    message: "",
    status: "info",
    onClose: () => {},
  });

  // Check if the user's profile setup is complete
  const checkProfileSetup = async () => {
    const user = auth.currentUser;
    if (user) {
      const db = getFirestore();
      const userDocRef = doc(db, "users", user.uid);

      try {
        const userDocSnapshot = await getDoc(userDocRef);
        userDocSnapshot.exists() ? push("/") : push("/charSelect");
      } catch (error) {
        console.error("Error checking profile setup:", error);
      }
    }
  };

  useEffect(() => {
    // Check the profile setup when the component loads
    checkProfileSetup();
  }, []);

  // Function to show toast messages
  const showToast = (
    message: string,
    status: "success" | "error" | "warning" | "info"
  ) => {
    setToast({
      message,
      status,
      onClose: () =>
        setToast({ message: "", status: "info", onClose: () => {} }),
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
      showToast("ログインしました。", "success");
      checkProfileSetup();
    } catch (e) {
      showToast("ログインに失敗しました。", "error");
      if (e instanceof FirebaseError) {
        console.error("Firebase Error:", e.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LayoutPage>
      <Background />
      <form onSubmit={handleSubmit}>
        <div className={style.contentWrap}>
          <div className={style.logo}></div>
          <div className={style.inputWrap}>
            <div className={style.frame}>
              <img src="/inputFrame.svg" alt="logo" />
            </div>
            <div className={style.title}>Login</div>
            <div className={style.content}>
              <label htmlFor="email">E-Mail</label>
              <input
                className={style.input}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ecc-comp@gmail.com"
              />
            </div>
            <div className={style.content}>
              <label htmlFor="password">Password</label>
              <div className={style.iconVis}>
                <input
                  className={style.input}
                  type={show ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="・・・・・・"
                />
                <i onClick={handleClick}>
                  {show ? <AiFillEye /> : <AiFillEyeInvisible />}
                </i>
              </div>
            </div>
            <div className={style.link}>
              <Link href="/signup">新しいアカウント作成</Link>
            </div>
          </div>
          <div className={style.submitWrap}>
            <button type="submit" disabled={isLoading}>
              {isLoading ? "Loading..." : "Login"}
            </button>
          </div>
        </div>
      </form>
      {toast.message && <Toast {...toast} />}
    </LayoutPage>
  );
}
