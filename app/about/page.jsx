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
          <h2>About PERM Process</h2>

          <p className={styles.blue}>
            The{" "}
            <span className={styles.highlight}>
              Program Electronic Review Management (PERM)
            </span>{" "}
            process is a system established by the{" "}
            <span className={styles.highlight}>
              U.S. Department of Labor (DOL)
            </span>{" "}
            to ensure that hiring a foreign worker for a specific position{" "}
            <span className={styles.highlight}>
              does not adversely affect U.S. workers
            </span>{" "}
            in terms of wages, working conditions, or job opportunities.
          </p>

          <p>
            Employers who wish to{" "}
            <span className={styles.highlight}>
              sponsor a foreign national for permanent residency (a green card)
            </span>{" "}
            in most employment-based categories must first obtain a{" "}
            <span className={styles.highlight}>
              certified PERM labor certification
            </span>
            . This certification confirms that there are{" "}
            <span className={styles.highlight}>
              no qualified, willing, and available
            </span>{" "}
            U.S. workers for the role after proper recruitment efforts.
          </p>

          <p>
            The PERM process is{" "}
            <span className={styles.highlight}>employer-driven</span> — the
            foreign worker cannot file the application themselves. The employer
            is responsible for following all DOL rules, maintaining records, and{" "}
            <span className={styles.highlight}>
              paying all PERM-related costs
            </span>{" "}
            (not the employee).
          </p>
        </div>

        <div>
          <h3>🎯 Purpose & Importance of PERM</h3>

          <p>
            The main goal of PERM is to{" "}
            <span className={styles.highlight}>
              protect the U.S. labor market
            </span>
            . Before hiring a foreign worker permanently, the government
            requires proof that:
          </p>

          <ul>
            <li>
              <span className={styles.highlight}>Qualified U.S. workers</span>{" "}
              had a fair chance to apply for the job
            </li>
            <li>
              The offered{" "}
              <span className={styles.highlight}>
                wage meets or exceeds the prevailing wage
              </span>{" "}
              for that position and location
            </li>
            <li>
              Hiring a foreign worker will{" "}
              <span className={styles.highlight}>
                not negatively affect wages or working conditions
              </span>{" "}
              of similarly employed U.S. workers
            </li>
          </ul>

          <p>
            Because of this, the PERM process is{" "}
            <span className={styles.highlight}>highly regulated</span> and
            requires employers to carefully follow specific steps and timelines.
          </p>
        </div>

        <div>
          <h3>👥 Key Participants in the PERM Process</h3>

          <p>
            A typical PERM case involves several parties working together to
            ensure the application is accurate and compliant:
          </p>

          <ul>
            <li>
              <span className={styles.highlight}>Employer</span> – Initiates the
              process, defines the job, conducts recruitment, and files the PERM
              application.
            </li>
            <li>
              <span className={styles.highlight}>
                Foreign worker (beneficiary)
              </span>{" "}
              – The individual being sponsored for permanent residency.
            </li>
            <li>
              <span className={styles.highlight}>
                Immigration attorney or legal team
              </span>{" "}
              – Often assists with compliance, documentation, and filing
              strategy.
            </li>
            <li>
              <span className={styles.highlight}>
                U.S. Department of Labor (DOL)
              </span>{" "}
              – Reviews and decides whether to certify, deny, or audit the
              application.
            </li>
          </ul>
        </div>

        <div>
          <h3>📌 Main Stages of the PERM Process</h3>

          <div>
            <h4>1. Job Definition & Prevailing Wage</h4>
            <p>
              Before recruitment begins, the employer defines the{" "}
              <span className={styles.highlight}>
                job title, duties, minimum requirements
              </span>{" "}
              (education, experience, skills), and work location. This
              information is used to request a{" "}
              <span className={styles.highlight}>
                Prevailing Wage Determination (PWD)
              </span>{" "}
              from the DOL.
            </p>
            <p>
              The <span className={styles.highlight}>prevailing wage</span> is
              the minimum salary the employer must offer for that role in that
              geographic area. The employer must agree to pay at least this wage
              once the foreign worker obtains permanent residency.
            </p>
          </div>

          <div>
            <h4>2. Job Advertisement & Recruitment</h4>
            <p>
              The employer must conduct a{" "}
              <span className={styles.highlight}>
                good-faith recruitment effort
              </span>{" "}
              to identify qualified U.S. workers before filing the PERM
              application. Typical recruitment steps include:
            </p>

            <ul>
              <li>
                Placing a{" "}
                <span className={styles.highlight}>
                  job order with the State Workforce Agency (SWA)
                </span>{" "}
                for a required period.
              </li>
              <li>
                Publishing{" "}
                <span className={styles.highlight}>
                  two Sunday newspaper advertisements
                </span>{" "}
                in a newspaper of general circulation in the area of employment.
              </li>
              <li>
                For professional positions, using{" "}
                <span className={styles.highlight}>
                  additional recruitment methods
                </span>{" "}
                (such as job fairs, employer website, job search websites,
                campus recruiting, trade journals, or radio ads).
              </li>
            </ul>

            <p>
              During this stage, the employer must{" "}
              <span className={styles.highlight}>
                review and document all applicants
              </span>
              , interview potentially qualified U.S. workers, and record lawful
              reasons if candidates are rejected.
            </p>
          </div>

          <div>
            <h4>3. Application Submission (ETA Form 9089)</h4>
            <p>
              Once recruitment is complete and no qualified, willing, and
              available U.S. workers are found, the employer can file{" "}
              <span className={styles.highlight}>ETA Form 9089</span>{" "}
              electronically with the DOL.
            </p>
            <p>The form includes detailed information about:</p>

            <ul>
              <li>
                The <span className={styles.highlight}>employer</span> and the{" "}
                <span className={styles.highlight}>job opportunity</span>
              </li>
              <li>
                The <span className={styles.highlight}>foreign worker’s</span>{" "}
                education and experience
              </li>
              <li>
                The <span className={styles.highlight}>recruitment steps</span>{" "}
                taken and their results
              </li>
              <li>
                The <span className={styles.highlight}>wage offered</span> and
                prevailing wage details
              </li>
            </ul>
          </div>

          <div>
            <h4>4. Review & Certification by DOL</h4>
            <p>
              After submission, the{" "}
              <span className={styles.highlight}>
                U.S. Department of Labor reviews the PERM application
              </span>{" "}
              to ensure that all requirements were followed and that the job
              truly could not be filled by a qualified U.S. worker.
            </p>
            <p>
              If the DOL is satisfied, the case is{" "}
              <span className={styles.highlight}>certified</span>, and the
              employer receives an approved PERM labor certification, which can
              then be used to move forward with the{" "}
              <span className={styles.highlight}>
                immigrant petition (Form I-140) with USCIS
              </span>
              .
            </p>
          </div>
        </div>

        <div>
          <h3>📝 Audits & Additional Review</h3>
          <p>
            Not all PERM applications are processed the same way. Some cases are{" "}
            <span className={styles.highlight}>selected for audit</span> either
            randomly or due to specific case factors that DOL wishes to examine
            more closely.
          </p>

          <p>
            In an audit, the employer must provide{" "}
            <span className={styles.highlight}>additional documentation</span>{" "}
            to support the application, such as:
          </p>

          <ul>
            <li>
              Copies of <span className={styles.highlight}>advertisements</span>{" "}
              and job postings
            </li>
            <li>
              <span className={styles.highlight}>Recruitment reports</span>{" "}
              describing applicants and reasons for rejection
            </li>
            <li>
              Evidence of the{" "}
              <span className={styles.highlight}>
                prevailing wage determination
              </span>{" "}
              and offered wage
            </li>
            <li>
              Internal documents showing{" "}
              <span className={styles.highlight}>
                job duties and requirements
              </span>
            </li>
          </ul>

          <p>
            An audit usually{" "}
            <span className={styles.highlight}>
              extends the overall processing time
            </span>{" "}
            and may result in approval, denial, or further supervised
            recruitment in complex cases.
          </p>
        </div>

        <div>
          <h3>➡️ What Happens After PERM Approval?</h3>
          <p>
            A certified PERM labor certification is{" "}
            <span className={styles.highlight}>not a green card by itself</span>
            . Instead, it is the first major step in many employment-based
            permanent residency paths.
          </p>

          <p>After PERM approval, the employer typically:</p>

          <ul>
            <li>
              Files an{" "}
              <span className={styles.highlight}>I-140 Immigrant Petition</span>{" "}
              with U.S. Citizenship and Immigration Services (USCIS)
            </li>
            <li>
              The foreign worker then proceeds to{" "}
              <span className={styles.highlight}>
                adjust status or consular processing
              </span>{" "}
              when a visa number becomes available (based on visa bulletin and
              category)
            </li>
          </ul>

          <p>
            Each stage after PERM has its own{" "}
            <span className={styles.highlight}>
              processing times, rules, and evidence
            </span>
            , but PERM approval is often considered the{" "}
            <span className={styles.highlight}>foundation</span> of a long-term
            employment-based green card process.
          </p>
        </div>

        <div>
          <h3>⚠️ Important Note</h3>
          <p>
            The information above is a{" "}
            <span className={styles.highlight}>general overview</span> of the
            PERM process and{" "}
            <span className={styles.highlight}>
              does not constitute legal advice
            </span>
            . Specific cases may involve additional steps, risks, or strategies.
            For personalized guidance, employers and foreign workers should
            consult a{" "}
            <span className={styles.highlight}>
              qualified immigration attorney
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
