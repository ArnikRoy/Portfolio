import React, { useEffect, useRef } from 'react'
import styles from './Experience.module.css'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export const Experience = () => {
  const timelineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        scaleY: 0,
        duration: 1.5,
        ease: "power2.inOut"
      });

      // Animate timeline dots
      gsap.from(".timeline-dot", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        scale: 0,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)"
      });

      // Animate timeline content
      gsap.from(".timeline-content", {
        scrollTrigger: {
          trigger: ".timeline-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const contentVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id='experience' className={styles.container}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Experience
      </motion.h2>
      <div className={styles.content}>
        <motion.div 
          ref={timelineRef}
          className={`${styles.timelineContainer} timeline-container`}
          variants={timelineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className={`${styles.timelineLine} timeline-line`}></div>
          
          <motion.div 
            className={styles.timelineItem}
            variants={itemVariants}
          >
            <div className={`${styles.timelineDot} timeline-dot`}></div>
            <motion.div 
              className={`${styles.timelineContent} timeline-content`}
              variants={contentVariants}
              whileHover="hover"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Software Developer Intern (Backend)
              </motion.h3>
              <motion.p 
                className={styles.company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Fi Money
              </motion.p>
              <motion.p 
                className={styles.duration}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Feb 2025 - Apr 2025
              </motion.p>
              <motion.p 
                className={styles.description}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Tech Stacks: Go, gRPC, Protocol Buffers, PostgreSQL
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.timelineItem}
            variants={itemVariants}
          >
            <div className={`${styles.timelineDot} timeline-dot`}></div>
            <motion.div 
              className={`${styles.timelineContent} timeline-content`}
              variants={contentVariants}
              whileHover="hover"
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Network Security Intern
              </motion.h3>
              <motion.p 
                className={styles.company}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                C3i Hub
              </motion.p>
              <motion.p 
                className={styles.duration}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Aug 2023 - Nov 2023
              </motion.p>
              <motion.p 
                className={styles.description}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                Tech Stacks: Java, Network Protocols
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}