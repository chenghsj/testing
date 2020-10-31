import React from "react";
import styles from "../styles/reusedStyle.module.css";

function contacts() {
  return (
    <div className={`container ${styles["display-center"]}`}>
      <h1>Contacts page</h1>
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

export default contacts;
