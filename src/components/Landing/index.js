import React from "react";
import styles from "./Landing.module.css";
function Landing(props) {
  return (
    <div className={styles.landing_container}>
      <div className={styles.landing_nav}>
        <div>
          <a
            onClick={() => {
              props.history.push("/login");
            }}
          >
            Login
          </a>
        </div>
        <div>
          <a
            onClick={() => {
              props.history.push("/login");
            }}
          >
            SignUp
          </a>
        </div>
      </div>
      <div className={styles.landing_Image}></div>
    </div>
  );
}

export default Landing;
