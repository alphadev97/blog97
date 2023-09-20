"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);

  console.log(theme);

  return (
    <div className={styles.container}>
      <Image src={"/moon.png"} width={14} height={14} />
      <div className={styles.ball}></div>
      <Image src={"/sun.png"} width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
