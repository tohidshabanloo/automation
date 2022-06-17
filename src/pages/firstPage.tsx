import Link from "next/link";
import React from "react";
import styles from "../styles/Home.module.css";

const firstPage = () => {
  return (
    <div className={styles.firstPage}>
      <h1> شما در حال حاضر لاگین نیستید...</h1>
      <Link href="/login">
        <a className={styles.login}>ورود به صفحه لاگین</a>
      </Link>
    </div>
  );
};

export default firstPage;
