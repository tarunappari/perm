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
          <h2>Terms of Service</h2>
          <p>
            <span className={styles.highlight}>Last updated:</span> March 21,
            2024
          </p>
          <p>
            Welcome to <span className={styles.highlight}>permupdate.com</span>.
            By accessing and using this website, you agree to comply with and be
            bound by these{" "}
            <span className={styles.highlight}>Terms of Service</span> as well
            as all applicable laws and regulations. If you do not agree with any
            of these terms, you should{" "}
            <span className={styles.highlight}>
              discontinue use of this site immediately
            </span>
            .
          </p>
        </div>

        <div>
          <h3>✅ Acceptance of Terms</h3>
          <p>
            By using <span className={styles.highlight}>permupdate.com</span>,
            you acknowledge that you have read, understood, and agree to be
            bound by these Terms of Service and all applicable laws. Continued
            access or use of our site signifies your{" "}
            <span className={styles.highlight}>
              acceptance of the current terms
            </span>
            . We reserve the right to{" "}
            <span className={styles.highlight}>update or modify</span> these
            terms at any time without prior notice.
          </p>
        </div>

        <div>
          <h3>🧾 Use License</h3>
          <p>
            We grant you a{" "}
            <span className={styles.highlight}>
              limited, non-exclusive, and non-transferable license
            </span>{" "}
            to access and view the content available on our website for{" "}
            <span className={styles.highlight}>
              personal and non-commercial use only
            </span>
            . This is a license to use—not a transfer of ownership.
          </p>

          <p>Under this license, you may not:</p>

          <ul>
            <li>
              <span className={styles.highlight}>Modify or copy</span> the
              materials;
            </li>
            <li>
              Use the materials for{" "}
              <span className={styles.highlight}>
                commercial or public display
              </span>
              ;
            </li>
            <li>
              Attempt to{" "}
              <span className={styles.highlight}>reverse engineer</span> any
              software contained on our website;
            </li>
            <li>
              <span className={styles.highlight}>Mirror or replicate</span> any
              of the materials on another server or platform.
            </li>
          </ul>

          <p>
            Violation of any of these restrictions will{" "}
            <span className={styles.highlight}>automatically terminate</span>{" "}
            your access to this website, and we may restrict or revoke future
            access at our discretion.
          </p>
        </div>

        <div>
          <h3>⚠️ Disclaimer of Accuracy</h3>
          <p>
            The information provided on{" "}
            <span className={styles.highlight}>permupdate.com</span> is
            collected from
            <span className={styles.highlight}>
              {" "}
              publicly available sources
            </span>{" "}
            and may include data manually entered for better tracking and
            presentation. While we strive to maintain accuracy, we{" "}
            <span className={styles.highlight}>do not guarantee</span> the
            completeness, reliability, or timeliness of any data or prediction
            presented on this site.
          </p>

          <p>
            All information, including{" "}
            <span className={styles.highlight}>
              estimates, timelines, and analytics
            </span>
            , is provided “as is” without warranties of any kind, expressed or
            implied. We assume no responsibility for{" "}
            <span className={styles.highlight}>
              errors, inaccuracies, or omissions
            </span>{" "}
            and disclaim all liability related to reliance on such information.
          </p>
        </div>

        <div>
          <h3>🚫 Limitations</h3>
          <p>
            In no event shall{" "}
            <span className={styles.highlight}>permupdate.com</span> or its
            contributors be held liable for any{" "}
            <span className={styles.highlight}>
              direct, indirect, incidental, or consequential damages
            </span>{" "}
            arising from the use—or inability to use—the materials provided on
            this site.
          </p>

          <p>
            This includes, but is not limited to, losses due to{" "}
            <span className={styles.highlight}>
              data inaccuracies, site unavailability
            </span>
            , or reliance on predicted timelines. Users access and interpret
            information on this website{" "}
            <span className={styles.highlight}>at their own risk</span>.
          </p>
        </div>

        <div>
          <h3>⚖️ Governing Law</h3>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the{" "}
            <span className={styles.highlight}>
              laws of the jurisdiction in which permupdate.com operates
            </span>
            . Any disputes arising under or related to these Terms will be
            resolved exclusively under applicable laws within that jurisdiction.
          </p>
        </div>

        <div>
          <h3>📩 Contact Us</h3>
          <p>
            For any questions, clarifications, or concerns regarding these Terms
            of Service, please reach out to us at{" "}
            <a href="mailto:info@firstusit.com" className={styles.highlight}>
              info@firstusit.com
            </a>
            .
          </p>
          <p>
            We welcome inquiries and will make every effort to{" "}
            <span className={styles.highlight}>respond promptly</span> to
            resolve your concerns.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
