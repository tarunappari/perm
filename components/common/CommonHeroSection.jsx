import React from 'react'
import styles from '@/styles/Landingpage/HeroSection.module.scss'

const CommonHeroSection = () => {
  return (
     <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* Main Hero Content */}
        <div className={styles.heroContent}>
          {/* Title */}
          <h1 className={styles.heroTitle}>PERM Timeline Tracker</h1>

          {/* Subtitle */}
          <p className={styles.heroSubtitle}>
            Stay updated with real-time insights into your PERM case status.
          </p>

          {/* Main Description */}
          <p className={styles.heroDescription}>
            Our advanced PERM Timeline Tracker uses a powerful data-driven
            prediction model to estimate your case processing time based on
            recent Department of Labor (DOL) trends, employer name initials, and
            submission details.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CommonHeroSection
