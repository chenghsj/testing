import React from "react";
import styles from "../styles/reusedStyle.module.css";

function partners() {
  console.log(styles);
  return (
    <div className={`container ${styles["display-center"]}`}>
      <h1>Partners page</h1>
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

export default partners;
