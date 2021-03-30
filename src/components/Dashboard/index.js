import React from "react";
import styles from "./Dashboard.module.css";
import DashboardHeader from "./DashboardHeader";

const Dashboard = (props) => {
  const handleLogout = (e) => {
    props.history.push("/login");
  };
  return (
    <div className={styles.dashboard_container}>
      <DashboardHeader />
      <div className={styles.dashboard_content}>
        <div className={styles.left_content}>
          <div className={styles.left_content_header}>
            <div>
              <h2>Balance Details</h2>
            </div>
            <div>
              <button>Submit Verification Documents?</button>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.content_second_section}>
            <div className={styles.content_second_section_column}>
              <div>
                <div>Account Balance</div>
                <div>12321213</div>
              </div>
              <div>
                <div>Estimated Value Balance</div>
                <div>97329423423</div>
              </div>
            </div>
            <div className={styles.content_second_section_column}><div className={styles.graph}></div></div>
            <div className={styles.content_second_section_column}>
              <div>
                <div>Account Balance</div>
                <div>12321213</div>
              </div>
              <div>
                <div>Estimated Value Balance</div>
                <div>97329423423</div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.third_section}></div>
          </div>
        </div>
        <div className={styles.right_content}>
          <div className={styles.images}>
            <div className={styles.img1}></div>
            <div className={styles.img1}></div>
            <div className={styles.img1}></div>
            <div className={styles.img1}></div>
            <div className={styles.img1}></div>
          </div>
          <div className={styles.grid}>
            <div className={styles.gridimg}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
