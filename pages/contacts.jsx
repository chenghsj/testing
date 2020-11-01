import React from "react";
import AnimatePage from "../src/components/AnimatePage";
import styles from "../styles/reusedStyle.module.scss";

function contacts() {
  return (
    <AnimatePage>
      <div className={`${styles.container} ${styles["display-center"]}`}>
        <h1>Contacts page</h1>
      </div>
    </AnimatePage>
  );
}

export default contacts;
