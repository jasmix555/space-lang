import Layout from "@/component/Layout";
import { RiMenu3Line } from "react-icons/ri";
import {
  FaRegCircleXmark,
  FaBell,
  FaUserAstronaut,
  FaBook,
  FaGear,
  FaUsers,
} from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import Header from "@/component/Header";
import style from "@/styles/adventure.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";

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

const worlds = [
  {
    title: "日本語",
    link: "/createdGroups",
  },
  {
    title: "English",
    link: "/createdGroups",
  },
  {
    title: "한국어",
    link: "/createdGroups",
  },
  {
    title: "中文",
    link: "/createdGroups",
  },
  {
    title: "Bahasa Indonesia",
    link: "/createdGroups",
  },
  {
    title: "español",
    link: "/createdGroups",
  },
];

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delay: 0.1 + custom * 0.02, // Add a delay based on the index
    },
  }),
};

export default function HomePage() {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  useEffect(() => {
    setRandomNumbers(worlds.map(() => Math.floor(Math.random() * 3) + 1));
  }, []);

  return (
    <Layout>
      <Header contents={menus} />
      <div className={style.body}>
        <div className={style.worldsWrap}>
          {worlds.map((e, idx) => {
            return (
              <InView as="div" triggerOnce key={idx}>
                {({ ref, inView }) => (
                  <motion.div
                    ref={ref}
                    variants={variants}
                    initial="hidden"
                    animate={inView ? "show" : "hidden"}
                    custom={idx}
                    className={
                      style.content +
                      " " +
                      (idx % 2 === 0 ? style.left : style.right)
                    }
                  >
                    <Link href={`${e.link}?planet=${idx + 1}`}>
                      <div
                        className={`${style.planet} ${
                          style[`image${randomNumbers[idx]}`]
                        }`}
                        style={{
                          backgroundImage: `url(../planets/${idx + 1}.svg)`,
                        }}
                      ></div>
                      <p>{e.title}</p>
                    </Link>
                  </motion.div>
                )}
              </InView>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
