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
          <h2>Disclaimer</h2>
          <p>
            <span className={styles.highlight}>Last updated:</span> December 3 ,
            2024
          </p>
          <p>
            This Disclaimer explains the limits of responsibility and accuracy
            for the information presented on{" "}
            <span className={styles.highlight}>permupdate.com</span>. By
            accessing or using our website, you acknowledge that you have read,
            understood, and agree to the terms outlined below.
          </p>
        </div>

        <div>
          <h3>⚖️ General Disclaimer</h3>
          <p>
            The content provided on{" "}
            <span className={styles.highlight}>permupdate.com</span> is intended
            solely for{" "}
            <span className={styles.highlight}>informational purposes</span> and
            should not be interpreted as{" "}
            <span className={styles.highlight}>
              legal, financial, or professional advice
            </span>
            . We are <span className={styles.highlight}>not a legal firm</span>,
            and no part of the content on this site should be relied upon for
            legal decision-making or immigration processing.
          </p>

          <p>
            All data and information presented are derived from{" "}
            <span className={styles.highlight}>publicly available sources</span>
            , such as the{" "}
            <a
              href="https://www.dol.gov/agencies/eta/foreign-labor/performance"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.highlight}
            >
              U.S. Department of Labor (DOL)
            </a>{" "}
            and other verified platforms. While we make every effort to ensure
            the accuracy and timeliness of information,{" "}
            <span className={styles.highlight}>
              predictions and data displayed may not be fully accurate or up to
              date
            </span>
            .
          </p>

          <p>
            We do not guarantee the{" "}
            <span className={styles.highlight}>
              completeness, reliability, or precision
            </span>{" "}
            of the information on our site and{" "}
            <span className={styles.highlight}>accept no responsibility</span>{" "}
            for any errors, omissions, or inaccuracies in the data presented.
          </p>
        </div>

        <div>
          <h3>🔗 External Links</h3>
          <p>
            Our website may contain{" "}
            <span className={styles.highlight}>links to external websites</span>{" "}
            for reference or informational purposes. These links are provided
            for convenience and do not imply any endorsement, approval, or
            responsibility for the content or policies of such third-party
            sites.
          </p>

          <p>
            We do not control, maintain, or guarantee the{" "}
            <span className={styles.highlight}>
              accuracy, relevance, or completeness
            </span>{" "}
            of information found on external websites. Visiting third-party
            websites is at your own risk, and{" "}
            <span className={styles.highlight}>permupdate.com</span> shall not
            be held liable for any consequences resulting from external site
            usage.
          </p>
        </div>

        <div>
          <h3>🚫 No Liability</h3>
          <p>
            Under no circumstances shall{" "}
            <span className={styles.highlight}>permupdate.com</span>, its
            affiliates, or contributors be held liable for{" "}
            <span className={styles.highlight}>
              any loss, damage, or consequence
            </span>{" "}
            arising directly or indirectly from the use—or misuse—of the
            information provided on this website.
          </p>

          <p>
            This includes, but is not limited to,{" "}
            <span className={styles.highlight}>
              reliance on predictions, analytical reports, or case timelines
            </span>
            . Users are solely responsible for evaluating the accuracy,
            completeness, and usefulness of information before making decisions
            based on it.
          </p>
        </div>

        <div>
          <h3>🔁 Changes to Disclaimer</h3>
          <p>
            This Disclaimer may be{" "}
            <span className={styles.highlight}>
              revised or updated periodically
            </span>{" "}
            to reflect new regulations, data updates, or policy adjustments. We
            encourage users to{" "}
            <span className={styles.highlight}>review this page regularly</span>{" "}
            to stay informed of any changes.
          </p>

          <p>
            The effective date of the most recent version will always be
            displayed at the top of this page.
          </p>
        </div>

        <div>
          <h3>📩 Contact Us</h3>
          <p>
            If you have any questions, concerns, or feedback regarding this
            Disclaimer, please contact us at{" "}
            <a href="mailto:info@firstusit.com" className={styles.highlight}>
              info@firstusit.com
            </a>
            .
          </p>

          <p>
            We value transparency and are committed to{" "}
            <span className={styles.highlight}>responding promptly</span> to all
            legitimate user inquiries.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
