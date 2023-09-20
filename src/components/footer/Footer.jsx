import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image
              src={"/blog97-logo.png"}
              alt="Blog97 blog"
              width={50}
              height={50}
            />
            <h1 className={styles.logoText}>Blog97</h1>
          </div>
          <p lassName={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit, dictum
            magnis elementum facilisi leo nibh luctus pretium, iaculis netus
            montes facilisis placerat interdum. Mollis per ultricies vivamus
            gravida facilisi natoque tellus, proin purus mattis justo habitant
            molestie cras duis.
          </p>
          <div className={styles.icons}>
            <Image src={"/facebook.png"} alt="" width={18} height={18} />
            <Image src={"/instagram.png"} alt="" width={18} height={18} />
            <Image src={"/tiktok.png"} alt="" width={18} height={18} />
            <Image src={"/youtube.png"} alt="" width={18} height={18} />
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href={"/"}>Homepage</Link>
            <Link href={"/"}>Blog</Link>
            <Link href={"/"}>About</Link>
            <Link href={"/"}>Contact</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href={"/"}>Style</Link>
            <Link href={"/"}>Fashion</Link>
            <Link href={"/"}>Coding</Link>
            <Link href={"/"}>Travel</Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Tiktok</Link>
            <Link href={"/"}>Youtube</Link>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>
          &copy; Blog97, Copyright Protected. Built with ❤️ by{" "}
          <a href="https://www.linkedin.com/in/alpha97/">Alpha97</a>
        </p>
      </div>
    </>
  );
};

export default Footer;
