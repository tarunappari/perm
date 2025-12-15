import CommonHeroSection from "@/components/common/CommonHeroSection";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import styles from "@/styles/common/commonStyling.module.scss";

const page = () => {
  return (
    <div>
      <Navbar />
      <CommonHeroSection />
      <section className={styles.commonContainer}>
        <div>
          <h2>Privacy Policy</h2>
          <p>
            <span className={styles.highlight}>Last updated:</span> December 3,
            2025
          </p>
          <p>
            Welcome to <span className={styles.highlight}>permupdate.com</span>{" "}
            ("we," "us," or "our"). This Privacy Policy explains how we{" "}
            <span className={styles.highlight}>
              collect, use, disclose, and safeguard
            </span>{" "}
            your information when you visit our website. We value your privacy
            and are committed to protecting your personal data.
          </p>
        </div>

        <div>
          <h3>📥 Information Collection</h3>
          <p>
            We may collect both{" "}
            <span className={styles.highlight}>
              personal and non-personal data
            </span>{" "}
            to improve our website’s performance and provide better service to
            users.
          </p>

          <ul>
            <li>
              <span className={styles.highlight}>Personal Data:</span>{" "}
              Information that users voluntarily provide, such as{" "}
              <span className={styles.highlight}>email addresses</span> when
              contacting us or subscribing to updates.
            </li>
            <li>
              <span className={styles.highlight}>Non-Personal Data:</span>{" "}
              Information automatically collected through tools like{" "}
              <span className={styles.highlight}>Google Analytics</span>,
              including your browser type, IP address, pages visited, time spent
              on pages, and other analytical data.
            </li>
          </ul>
        </div>

        <div>
          <h3>📊 Google Analytics</h3>
          <p>
            We use <span className={styles.highlight}>Google Analytics</span> to
            better understand user behavior and optimize our website experience.
            This tool collects data anonymously through{" "}
            <span className={styles.highlight}>cookies</span> and helps us
            analyze trends such as user interaction, session duration, and
            traffic patterns.
          </p>
          <p>
            You can manage or disable cookies anytime through your{" "}
            <span className={styles.highlight}>browser settings</span> if you
            prefer not to share analytical data.
          </p>
        </div>

        <div>
          <h3>💡 Use of Information</h3>
          <p>
            The information we collect is used exclusively to{" "}
            <span className={styles.highlight}>improve and personalize</span>{" "}
            the functionality of our platform. Specifically, we use the
            collected data to:
          </p>

          <ul>
            <li>Enhance and customize user experience</li>
            <li>Monitor and analyze usage patterns</li>
            <li>Maintain and improve website performance and reliability</li>
          </ul>
        </div>

        <div>
          <h3>📚 Data Sources</h3>
          <p>
            Our data primarily originates from{" "}
            <span className={styles.highlight}>
              publicly available information
            </span>{" "}
            provided by the{" "}
            <span className={styles.highlight}>
              U.S. Department of Labor (DOL)
            </span>{" "}
            at{" "}
            <a
              href="https://www.dol.gov/agencies/eta/foreign-labor/performance"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.highlight}
            >
              https://www.dol.gov/agencies/eta/foreign-labor/performance
            </a>
            .
          </p>
          <p>
            Additional data may be{" "}
            <span className={styles.highlight}>manually compiled</span> from
            other reputable and publicly accessible websites to enhance the{" "}
            <span className={styles.highlight}>accuracy and timeliness</span> of
            the information we provide.
          </p>
        </div>

        <div>
          <h3>🔒 Information Sharing</h3>
          <p>
            We respect your privacy and{" "}
            <span className={styles.highlight}>
              do not sell, trade, or otherwise share user data
            </span>{" "}
            with any third parties. Information collected is used only for
            internal purposes and is not distributed externally.
          </p>
        </div>

        <div>
          <h3>🛡️ Security</h3>
          <p>
            We implement{" "}
            <span className={styles.highlight}>
              reasonable security measures
            </span>{" "}
            to protect your data from{" "}
            <span className={styles.highlight}>
              unauthorized access, alteration, or disclosure
            </span>
            . However, please note that no online data transmission or storage
            system can be guaranteed to be completely secure.
          </p>
        </div>

        <div>
          <h3>🔁 Changes to This Privacy Policy</h3>
          <p>
            This Privacy Policy may be{" "}
            <span className={styles.highlight}>updated periodically</span> to
            reflect changes in our practices or legal requirements. We encourage
            users to{" "}
            <span className={styles.highlight}>review this page regularly</span>{" "}
            for any updates or revisions.
          </p>
          <p>
            The date of the latest revision will always be displayed at the top
            of this policy for transparency.
          </p>
        </div>

        <div>
          <h3>📩 Contact Us</h3>
          <p>
            If you have any questions, concerns, or feedback about this Privacy
            Policy, please contact us at{" "}
            <a href="mailto:info@firstusit.com" className={styles.highlight}>
              info@firstusit.com
            </a>
            .
          </p>
          <p>
            We take your privacy seriously and will do our best to{" "}
            <span className={styles.highlight}>respond promptly</span> to any
            inquiries or issues regarding your data.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
