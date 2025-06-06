import React, { useEffect, useRef } from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for the about image
      gsap.to(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        },
        y: 50,
        ease: "none"
      });

      // Animate about items
      gsap.from(".about-item", {
        scrollTrigger: {
          trigger: ".about-items",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  const iconVariants = {
    hover: {
      rotate: 360,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className={styles.container} id='about' ref={aboutRef}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        About
      </motion.h2>
      <div className={styles.content}>
        <motion.img 
          src={getImageUrl("about/aboutImage.png")} 
          alt='Sitting with laptop'
          className="about-image"
          variants={imageVariants}
          whileHover="hover"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
        <motion.ul 
          className={`${styles.aboutItems} about-items`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.li 
            className={`${styles.aboutItem} about-item`}
            variants={itemVariants}
          >
            <motion.img 
              src={getImageUrl("about/cursorIcon.png")} 
              alt='Cursor Icon'
              variants={iconVariants}
              whileHover="hover"
            />
            <motion.div 
              className={styles.aboutItemText}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Frontend Developer
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                I am a Frontend developer skilled in React.js with expertise in creating dynamic and responsive user interfaces.
              </motion.p>
            </motion.div>
          </motion.li>

          <motion.li 
            className={`${styles.aboutItem} about-item`}
            variants={itemVariants}
          >
            <motion.img 
              src={getImageUrl("about/serverIcon.png")} 
              alt='Server Icon'
              variants={iconVariants}
              whileHover="hover"
            />
            <motion.div 
              className={styles.aboutItemText}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Backend Developer
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Backend developer skilled in Node.js and Express.js, specializing in building robust and scalable server-side applications and APIs.
              </motion.p>
            </motion.div>
          </motion.li>

          <motion.li 
            className={`${styles.aboutItem} about-item`}
            variants={itemVariants}
          >
            <motion.img 
              src={getImageUrl("about/uiIcon.png")} 
              alt='UI Icon'
              variants={iconVariants}
              whileHover="hover"
            />
            <motion.div 
              className={styles.aboutItemText}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.h3
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                MERN Stack Developer
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                MERN stack developer with experience in developing multiple websites. Passionate about creating efficient and scalable web applications.
              </motion.p>
            </motion.div>
          </motion.li>
        </motion.ul>
      </div>
    </section>
  )
}

