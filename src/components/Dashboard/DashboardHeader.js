import React from "react";
import styles from "./Dashboard.module.css";

const DashboardHeader = () => {
  return (
    <div className={styles.header_container}>
      <div>Logo</div>
      <div className={styles.header_menus}>
        <div>Investment</div>
        <div>Wallet</div>
        <div>History</div>
        <div>Support</div>
      </div>
      <div className={styles.header_right}>
        <div>My profile</div>
        <div>Language</div>
      </div>
    </div>
  );
};

export default DashboardHeader;
