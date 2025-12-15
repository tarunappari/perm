import React from "react";
import styles from "@/styles/common/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerContent}>
          {/* Brand Section */}
          <div className={styles.brandSection}>
            <h3 className={styles.brandTitle}>PERM Timeline Tracker</h3>
            <p className={styles.brandDescription}>
              Stay updated with real-time insights into your PERM case status.
            </p>
          </div>

          {/* Resources Section */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="/about" className={styles.link}>
                  About PERM Process
                </a>
              </li>
              <li>
                <a href="/timeline-estimator" className={styles.link}>
                  Timeline Estimator
                </a>
              </li>
              <li>
                <a href="/faq" className={styles.link}>
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className={styles.linkSection}>
            <h4 className={styles.sectionTitle}>Legal</h4>
            <ul className={styles.linkList}>
              <li>
                <a href="/privacy-policy" className={styles.link}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className={styles.link}>
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className={styles.link}>
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2025 PERM Tracker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
