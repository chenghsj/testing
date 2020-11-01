import React from "react";
import AnimatePage from "../src/components/AnimatePage";
import styles from "../styles/reusedStyle.module.scss";

function features() {
  return (
    <AnimatePage>
      <div className={`${styles.container} ${styles["display-center"]}`}>
        <h1>Features page</h1>
      </div>
    </AnimatePage>
  );
}

export default features;
