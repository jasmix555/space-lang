import { Flex, Wrap } from "@chakra-ui/react";
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
import { useState } from "react";
import style from "@/styles/Box.module.scss";
import Link from "next/link";

type MenuBarProps = {
  text?: string;
};

export default function MenuBar({ text }: MenuBarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Track if the menu is closing

  const menus = {
    icon: <RiMenu3Line />,
    options: [
      { icon: <FaRegCircleXmark />, link: "/#" },
      { icon: <FaBell />, link: "/#" },
      { icon: <FaUserAstronaut />, link: "/#" },
      { icon: <FaUsers />, link: "/#" },
      { icon: <FaBook />, link: "/#" },
      { icon: <FaEdit />, link: "/#" },
      { icon: <FaGear />, link: "/../settings" },
    ],
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`${style.menu} ${isMenuOpen ? style.active : ""}`}>
      <button
        className={style.btnWrapper + " " + style.mainBtn}
        onClick={toggleMenu}
      >
        <i className={style.icon}>
          {isMenuOpen ? menus.options[0].icon : menus.icon}
        </i>
      </button>
      <div className={style.btnChildWrap}>
        {isMenuOpen &&
          menus.options.map((icon, idx) =>
            idx !== 0 ? (
              <button
                key={idx}
                className={style.btnWrapper}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <Link href={icon.link}>
                  <i className={style.icon}>{icon.icon}</i>
                </Link>
              </button>
            ) : null
          )}
      </div>
    </div>
  );
}
