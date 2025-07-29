import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className={styles.header}>
      <div className={styles.greeting}>
        Welcome, <span className={styles.name}>Tanishq Pandey</span> to <span className={styles.brand}>Study Befikar</span>
      </div>
      <div className={styles.date}>{formattedDate}</div>
    </header>
  );
};

export default Header;
