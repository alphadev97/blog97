import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit,
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src={"/p1.jpeg"} alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Mark John</span>
              <span className={styles.date}>02.11.23</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={"/p1.jpeg"} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit varius
              viverra, tristique id eget platea donec facilisi primis
              suspendisse, fusce hac tellus molestie felis fringilla quis
              faucibus.
            </p>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipiscing elit varius
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit varius
              viverra, tristique id eget platea donec facilisi primis
              suspendisse, fusce hac tellus molestie felis fringilla quis
              faucibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit varius
              viverra, tristique id eget platea donec facilisi primis
              suspendisse, fusce hac tellus molestie felis fringilla quis
              faucibus.
            </p>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
