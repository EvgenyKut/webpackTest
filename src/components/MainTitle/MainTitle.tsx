import React from "react";
import styles from "./mainTitle.module.pcss";
const MainTitle = () => {
  return (
    <div className={styles.container}>
      <span className={styles.mainTitle}>авто из сша “под ключ”</span>
      <span className={styles.secondTitle}>
        ЗАКАЖИ СЕБЕ АВТО ИЗ США С ВЫГОДОЙ ДО 40%
      </span>

      <span className={styles.thirdTitle}>
        Подбор, покупка, доставка, растаможка, ремонт, оформление по договору
      </span>
    </div>
  );
};

export default MainTitle;
