import React from "react";
import styles from "../styles/reusedStyle.module.css";

function advantages() {
  console.log(styles);
  return (
    <div className={`container ${styles["display-center"]}`}>
      <h1>Advantages page</h1>
      <style jsx>{`
        .container {
          height: 100vh;
          position: relative;
          top: -60px;
        }
      `}</style>
    </div>
  );
}

export default advantages;
