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
          <h2>Frequently Asked Questions (FAQ)</h2>
          <p>
            Here are some of the most commonly asked questions about the{" "}
            <span className={styles.highlight}>PERM Timeline Estimator</span>{" "}
            and how our system predicts processing times based on real-world
            data and DOL patterns.
          </p>
        </div>

        <div>
          <h3>❓ What determines how fast my PERM case gets processed?</h3>
          <p>
            The speed at which your PERM case is processed depends on two main
            factors, each influencing your position in the{" "}
            <span className={styles.highlight}>Department of Labor (DOL)</span>{" "}
            queue.
          </p>

          <ul>
            <li>
              <span className={styles.highlight}>
                Employer Name Initial (≈ 80%)
              </span>{" "}
              – This has the most significant impact on processing speed. The
              DOL processes applications within each month{" "}
              <span className={styles.highlight}>
                alphabetically by employer name
              </span>
              . Employers with names beginning earlier in the alphabet (A–I) are
              usually processed sooner than those with later initials (S–Z).
            </li>
            <li>
              <span className={styles.highlight}>Submission Date (≈ 20%)</span>{" "}
              – The exact date your PERM application was filed can cause small
              variations in processing time. Applications submitted earlier in
              the month may move slightly faster, but the effect is minor
              compared to the employer initial.
            </li>
          </ul>

          <p>
            Together, these factors determine where your case stands in the
            current <span className={styles.highlight}>processing queue</span>{" "}
            and help our system estimate an accurate timeline.
          </p>
        </div>

        <div>
          <h3>📊 How accurate are these timeline estimates?</h3>
          <p>
            Our predictions are generated using{" "}
            <span className={styles.highlight}>statistical models</span> and{" "}
            <span className={styles.highlight}>
              real-time DOL processing data
            </span>
            . Each timeline shown on our platform reflects the{" "}
            <span className={styles.highlight}>
              most recent movement trends
            </span>{" "}
            and historical averages.
          </p>

          <p>
            In most cases, the accuracy rate of our estimates is around{" "}
            <span className={styles.highlight}>80% confidence level</span>. This
            means that most cases will fall within the predicted completion
            window. However,{" "}
            <span className={styles.highlight}>
              processing times can still vary
            </span>{" "}
            due to:
          </p>

          <ul>
            <li>Unexpected workload changes at the DOL</li>
            <li>Temporary slowdowns or backlog increases</li>
            <li>Random case audits or document reviews</li>
          </ul>

          <p>
            Therefore, while our estimator provides{" "}
            <span className={styles.highlight}>
              highly reliable predictions
            </span>
            , it should be treated as a{" "}
            <span className={styles.highlight}>forecast, not a guarantee</span>.
          </p>
        </div>

        <div>
          <h3>🌐 Where does permupdate.com obtain its data?</h3>
          <p>
            All our predictions are built using{" "}
            <span className={styles.highlight}>publicly available data</span>{" "}
            and verified sources. Our core data originates from the{" "}
            <span className={styles.highlight}>
              U.S. Department of Labor (DOL)
            </span>
            , specifically through their{" "}
            <a
              href="https://www.dol.gov/agencies/eta/foreign-labor/performance"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.highlight}
            >
              official performance and processing time reports
            </a>
            .
          </p>

          <p>
            In addition to these official reports, our team{" "}
            <span className={styles.highlight}>
              manually gathers daily updates
            </span>{" "}
            from other publicly accessible and verified immigration tracking
            platforms. This allows us to:
          </p>

          <ul>
            <li>
              Enhance the{" "}
              <span className={styles.highlight}>accuracy and timeliness</span>{" "}
              of our dataset
            </li>
            <li>
              Monitor{" "}
              <span className={styles.highlight}>
                real-time DOL case movements
              </span>
            </li>
            <li>
              Adjust our algorithm dynamically based on{" "}
              <span className={styles.highlight}>
                newly observed processing trends
              </span>
            </li>
          </ul>

          <p>
            By combining multiple data sources, permupdate.com ensures that each
            prediction reflects the{" "}
            <span className={styles.highlight}>
              most up-to-date processing environment
            </span>
            .
          </p>
        </div>

        <div>
          <h3>⚠️ Can I rely solely on permupdate.com’s predictions?</h3>
          <p>
            While our system is designed to provide{" "}
            <span className={styles.highlight}>
              accurate, data-backed insights
            </span>
            , it should not be used as a substitute for{" "}
            <span className={styles.highlight}>
              official guidance or legal advice
            </span>
            . The information displayed on permupdate.com is{" "}
            <span className={styles.highlight}>purely informational</span> and
            meant to help users understand general trends in PERM processing.
          </p>

          <p>
            We are{" "}
            <span className={styles.highlight}>
              not affiliated with any government agency
            </span>{" "}
            or legal service provider. While we strive for precision and
            transparency, users should always:
          </p>

          <ul>
            <li>
              Verify case status through{" "}
              <span className={styles.highlight}>official DOL resources</span>
            </li>
            <li>
              Consult a{" "}
              <span className={styles.highlight}>
                qualified immigration attorney
              </span>{" "}
              for case-specific questions or strategic decisions
            </li>
            <li>
              Use our timelines as{" "}
              <span className={styles.highlight}>helpful references</span>, not
              as legally binding projections
            </li>
          </ul>

          <p>
            In summary, permupdate.com is a{" "}
            <span className={styles.highlight}>
              trusted data analysis platform
            </span>{" "}
            — but final decisions and case interpretations should always rely on
            <span className={styles.highlight}>
              {" "}
              official sources and legal counsel
            </span>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default page;
