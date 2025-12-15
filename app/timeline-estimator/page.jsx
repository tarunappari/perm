import CommonHeroSection from "@/components/common/CommonHeroSection";
import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import React from "react";
import styles from '@/styles/common/commonStyling.module.scss'

const page = () => {
  return (
    <div>
      <Navbar />
      <CommonHeroSection />
      <section className={styles.commonContainer}>
        <div>
          <h2>Timeline Estimator (How It Works)</h2>

          <p className={styles.blue}>
            Our{" "}
            <span className={styles.highlight}>PERM Timeline Estimator</span>{" "}
            uses a combination of
            <span className={styles.highlight}> real-time processing data</span>
            ,<span className={styles.highlight}> historical trends</span>, and
            <span className={styles.highlight}>
              {" "}
              Department of Labor (DOL)
            </span>{" "}
            behavior patterns to calculate an estimated approval timeline for
            your PERM Labor Certification application.
          </p>

          <p>
            The prediction model analyzes both
            <span className={styles.highlight}>
              {" "}
              recent case processing speeds
            </span>{" "}
            and
            <span className={styles.highlight}>
              {" "}
              specific details from your application
            </span>
            (such as your employer’s name initial and submission month) to
            estimate when your case might be approved.
          </p>
        </div>

        <div>
          <h3>🕒 Current Processing Overview</h3>

          <p>
            As of now,{" "}
            <span className={styles.highlight}>
              PERM applications are taking approximately 462–478 days
            </span>{" "}
            to complete. This range may vary slightly depending on:
          </p>

          <ul>
            <li>The month your application was submitted</li>
            <li>
              The first letter of your employer’s name (used to determine your
              queue position)
            </li>
          </ul>

          <p>
            Each month, the DOL processes applications in batches, primarily
            sorted
            <span className={styles.highlight}>
              {" "}
              alphabetically by employer name
            </span>
            , with earlier letters (A–I) typically processed before later ones
            (S–Z).
          </p>
        </div>
        <div>
          <h3>🔍 How We Calculate the Estimate</h3>

          <div>
            <h4>1. Employer’s Name Initial (≈ 80% Influence)</h4>
            <p>
              Within each submission month, the Department of Labor processes
              applications based on the
              <span className={styles.highlight}>
                {" "}
                alphabetical order of employer names
              </span>
              . For instance, if your employer’s name starts with
              <span className={styles.highlight}> “A”</span>, your application
              may be processed several weeks earlier than one starting with
              <span className={styles.highlight}> “Z”</span>, depending on the
              total volume of cases filed that month.
            </p>
            <p>
              This alphabetical sequencing explains why two applicants who filed
              in the same month might see different processing times.
            </p>
          </div>
          <div>
            <h4>2. Submission Date (≈ 20% Influence)</h4>
            <p>
              The exact day your PERM application was submitted can have a
              smaller but noticeable effect — typically{" "}
              <span className={styles.highlight}>30–40 days of variation</span>.
              Applications filed earlier within the same month often move
              slightly faster, though the difference is not as significant as
              employer initials.
            </p>
          </div>
          <div>
            <h4>3. Real Processing Speeds & Buffer Adjustment</h4>
            <p>
              Our system tracks the{" "}
              <span className={styles.highlight}>actual case movement</span>{" "}
              reported over the past several weeks, then adds a{" "}
              <span className={styles.highlight}>15% buffer</span> to provide a
              more realistic upper estimate. This buffer accounts for{" "}
              <span className={styles.highlight}>review delays</span>,
              <span className={styles.highlight}> workload fluctuations</span>,
              and
              <span className={styles.highlight}> unexpected slowdowns</span> at
              the DOL.
            </p>
          </div>
        </div>

        <div>
          <h3>📈 Confidence Level & Reliability</h3>
          <p>
            Our estimator operates with an{" "}
            <span className={styles.highlight}>80% confidence level</span>,
            meaning that in most cases, your estimated date will fall within the
            projected range. While no prediction can be guaranteed, our results
            are consistently accurate due to
            <span className={styles.highlight}> ongoing data updates</span> and
            <span className={styles.highlight}> real-world observation</span> of
            current DOL processing speeds.
          </p>
        </div>

        <div>
          <h3>⚙️ How the Timeline Estimator Works for You</h3>
          <p>
            Our algorithm combines multiple factors to provide accurate and
            personalized predictions:
          </p>
          <ul>
            <li>
              <span className={styles.highlight}>Historical data</span> – to
              identify long-term processing patterns
            </li>
            <li>
              <span className={styles.highlight}>Recent case completions</span>{" "}
              – to reflect current DOL trends
            </li>
            <li>
              <span className={styles.highlight}>Submission specifics</span> –
              to tailor estimates for each applicant
            </li>
          </ul>
          <p>
            It then calculates your approximate position in the DOL queue and
            generates an
            <span className={styles.highlight}>
              {" "}
              estimated completion window
            </span>{" "}
            — showing when your
            <span className={styles.highlight}> Labor Certification</span> is
            most likely to be approved.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default page;
