import React from "react";
import styles from "../styles/reusedStyle.module.css";

function features() {
  return (
    <div className={`container ${styles["display-center"]}`}>
      <h1>Features page</h1>
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

export default features;
