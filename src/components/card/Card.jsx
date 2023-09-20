import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>10.2.2022 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href={"/"}>
          <h1>Lorem ipsum dolor sit amet consectetur adipiscing elit.</h1>
        </Link>

        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipiscing elit bibendum in
          commodo, maecenas porttitor laoreet elementum tempus sem dis
          parturient. Ultrices turpis quis auctor torquent justo facilisis
          placerat ac duis...
        </p>
        <Link href={"/"} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
