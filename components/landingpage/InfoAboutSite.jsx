import React from "react";
import styles from "@/styles/Landingpage/InfoAboutSite.module.scss";

const InfoAboutSite = () => {
  return (
    <div className={styles.container}>
      <div>
        <div>
          <h2>Understanding PERM Labor Certification Processing Times</h2>
          <span className={styles.blue}>
            PERM applications are currently taking approximately 462–478 days to
            process as of 2025.
          </span>
        </div>
      </div>
      <div className={styles.gridLayout}>
        <div>
          <h3>What is PERM Labor Certification?</h3>
          <p>
            The <span>Program Electronic Review Management (PERM)</span> system,
            administered by the <span>U.S. Department of Labor (DOL)</span>, is
            used to process applications for permanent labor certification. This
            certification is a key requirement for most employment-based green
            card applications, ensuring that hiring foreign workers does not
            negatively impact the <span>wages and working conditions</span> of
            U.S. workers.
          </p>
        </div>
        <div>
          <h3>Processing Time Factors</h3>
          <p>
            PERM processing timelines vary depending on multiple factors. The
            DOL generally processes applications by submission month first, and
            then alphabetically by the employer’s name within that month.
          </p>
          <p>
            <span>For example:</span> If your application was submitted in May
            2025, the DOL will process all May submissions in sequence — but
            within that group, companies with names starting from A–I will
            typically be processed before those starting from S–Z.
          </p>
        </div>
      </div>
      <div className={styles.gridLayout}>
        <div>
          <h3>Current Processing Trends</h3>
          <div>
            <p>
              Our real-time dashboard tracks the latest PERM processing trends,
              providing insights into:
            </p>
            <ul>
              <li>Daily and weekly case movement</li>
              <li>Processing speed fluctuations based on backlog volume</li>
              <li>Monthly average completion times</li>
            </ul>
            <p>
              These insights help employers, applicants, and immigration
              professionals better understand current DOL patterns and estimate
              when their case might be approved.
            </p>
          </div>
        </div>
        <div>
          <h3>Timeline Estimation Tool</h3>
          <div>
            <p>
              Our Timeline Estimator leverages statistical analysis and
              historical processing data to generate accurate, data-backed
              predictions for PERM case completion dates.
            </p>
            <ul>
              <li>Submission month and day (to determine case group)</li>
              <li>Employer name initial (to identify queue position)</li>
              <li>Current DOL throughput rates and backlog levels</li>
            </ul>
            <p>
              Using this information, it provides a personalized completion
              window with an 80% confidence range, helping users plan
              immigration timelines with greater accuracy.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.keyBenefits}>
        <div>
          <h3>Key Benefits of PERM Tracking</h3>
          <ul>
            <li>
              🔹Real-time processing data sourced directly from the Department
              of Labor
            </li>
            <li>🔹Accurate, statistically modeled completion estimates</li>
            <li>🔹Comprehensive analytics for immigration and HR planning</li>
            <li>
              🔹Daily monitoring of case volume, backlog, and approval rates
            </li>
            <li>
              🔹Insights into alphabetical employer name processing patterns
            </li>
            <li>🔹Predictive monthly backlog and performance forecasts</li>
          </ul>
        </div>
      </div>

      <div className={styles.disclaimer} >
        <p>
          Disclaimer The data and estimates shown on this dashboard are for
          informational purposes only and should not be treated as legal advice.
          Actual PERM processing times may vary due to case complexity, audit
          selection, or changes in DOL procedures. For specific legal or
          immigration-related questions, please consult a qualified immigration
          attorney.
        </p>
      </div>
    </div>
  );
};

export default InfoAboutSite;
