import React, { useEffect, useRef } from 'react'
import skills from "../../data/skills.json"
import acads from "../../data/acads.json"
import { getImageUrl } from '../../utils'
import styles from "./Skills.module.css"
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export const Skills = () => {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skills on scroll
      gsap.from(".skill", {
        scrollTrigger: {
          trigger: ".skills",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Animate academic items on scroll
      gsap.from(".acadsItem", {
        scrollTrigger: {
          trigger: ".acads",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const skillVariants = {
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id='skills' className={styles.container} ref={skillsRef}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Skills
      </motion.h2>
      <div className={styles.content}>
        <div className={`${styles.skills} skills`}>
          {skills.map((skill, id) => {
            return (
              <motion.div 
                key={id} 
                className={`${styles.skill} skill`}
                variants={skillVariants}
                whileHover="hover"
              >
                <motion.div 
                  className={styles.skillImageContainer}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </motion.div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {skill.title}
                </motion.p>
              </motion.div>
            )
          })}
        </div>
        <div className={`${styles.acads} acads`}>
          {acads.map((courseItem, id) => {
            return (
              <motion.div 
                key={id} 
                className={`${styles.acadsItem} acadsItem`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: id * 0.1 }}
              >
                <div className={styles.acadsItemDetails}>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    {`${courseItem.acads}`}
                  </motion.h3>
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    {courseItem.courses.map((course, id) => {
                      return (
                        <motion.li 
                          key={id}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4 + (id * 0.1) }}
                        >
                          {course}
                        </motion.li>
                      )
                    })}
                  </motion.ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

