import React from "react";
import styles from "@/styles/common/Navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div>
        <a href="/">
          <h1>PERM Tracker</h1>
        </a>
      </div>
      <div>
        <a href="/timeline-estimator">
          <span>Timeline Estimator</span>
        </a>
        <a href="/about">
          <span>About PERM</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
