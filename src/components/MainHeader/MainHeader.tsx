import React from "react";
import styles from "./mainHeader.module.pcss";
const MainHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}></div>
      <a className={styles.phone}>+38 (050) 555 66 77</a>
    </div>
  );
};

export default MainHeader;
