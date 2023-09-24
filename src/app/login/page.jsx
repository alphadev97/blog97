"use client";

import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";

const LoginPage = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className={styles.loading}>Loading</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn("google")}>
          Sign in with Google
        </div>
        <div className={styles.socialButton}>Sign in with GitHub</div>
        <div className={styles.socialButton}>Sign in with Facebook</div>
      </div>
    </div>
  );
};

export default LoginPage;
