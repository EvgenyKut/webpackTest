import React from "react";
import MainHeader from "../MainHeader";
import MainTitle from "../MainTitle";

import styles from "./firstpage.module.pcss";
const FirstPage = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <MainHeader />
        </div>
        <div className={styles.title}>
          <MainTitle />
        </div>
      </div>
      <div className={styles.car}></div>
    </div>
  );
};

export default FirstPage;
