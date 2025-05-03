import React from 'react'
import styles from './Experience.module.css'

export const Experience = () => {
  return (
    <section id='experience' className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Experience items will go here */}
        <div className={styles.timelineContainer}>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>Software Developer Intern (Backend)</h3>
              <p className={styles.company}>Fi Money</p>
              <p className={styles.duration}>Feb 2025 - Apr 2025</p>
              <p className={styles.description}>
                Tech Stacks: Go, gRPC, Protocol Buffers, PostgreSQL
              </p>
            </div>
          </div>
          <div className={styles.timelineItem}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>UG Research Fellow</h3>
              <p className={styles.company}>IoT security lab, IIIT Allahabad</p>
              <p className={styles.duration}>Aug 2023 - Nov 2023</p>
              <p className={styles.description}>
                Tech Stacks: Java
              </p>
            </div>
          </div>
          {/* Add more timeline items as needed */}
        </div>
      </div>
    </section>
  )
}