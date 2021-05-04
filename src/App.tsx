import React from "react";
import styles from "./app.module.pcss";
import FirstPage from "./components/FirstPage";
const App = () => {
  return (
    <div className={styles.app}>
      <FirstPage />
    </div>
  );
};

export default App;
