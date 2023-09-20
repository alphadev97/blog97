import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={"/facebook.png"} alt="Facebook" width={24} height={24} />
        <Image src={"/instagram.png"} alt="Instagram" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="tiktok" width={24} height={24} />
        <Image src={"/youtube.png"} alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}></div>
      <div className={styles.links}></div>
    </div>
  );
};

export default Navbar;
