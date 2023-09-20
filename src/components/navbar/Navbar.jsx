import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}></div>
      <div className={styles.logo}></div>
      <div className={styles.links}></div>
    </div>
  );
};

export default Navbar;
