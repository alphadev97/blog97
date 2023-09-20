import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey, Alpha97 here!</b> Discover my stories and craetive ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, dictum
            penatibus donec libero duis aliquet proin, laoreet accumsan est
            habitasse porttitor elementum.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
