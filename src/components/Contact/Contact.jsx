import React, { useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

export const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate contact section on scroll
      gsap.from(".contact-container", {
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animate contact links
      gsap.from(".contact-link", {
        scrollTrigger: {
          trigger: ".contact-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        x: -50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, contactRef);

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

  const linkVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
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
    <motion.footer 
      id='contact' 
      className={`${styles.container} contact-container`}
      ref={contactRef}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div 
        className={styles.text}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Contact
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          Feel free to reach out
        </motion.p>
      </motion.div>
      <motion.ul 
        className={styles.links}
        variants={containerVariants}
      >
        <motion.li 
          className={`${styles.link} contact-link`}
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.img 
            src={getImageUrl("contact/emailIcon.png")} 
            alt='Email Icon'
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.a 
            href='mailto: royarnik107@gmail.com'
            whileHover={{ color: "var(--color-primary)" }}
          >
            royarnik107@gmail.com
          </motion.a>
        </motion.li>

        <motion.li 
          className={`${styles.link} contact-link`}
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.img 
            src={getImageUrl("contact/githubIcon.png")} 
            alt='Github Icon'
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.a 
            href='https://github.com/ArnikRoy'
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "var(--color-primary)" }}
          >
            github.com/ArnikRoy
          </motion.a>
        </motion.li>

        <motion.li 
          className={`${styles.link} contact-link`}
          variants={linkVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.img 
            src={getImageUrl("contact/linkedinIcon.png")} 
            alt='Linkedin Icon'
            variants={iconVariants}
            whileHover="hover"
          />
          <motion.a 
            href='https://www.linkedin.com/in/arnik-roy-040a1a234/'
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ color: "var(--color-primary)" }}
          >
            linkedin.com/arnik-roy
          </motion.a>
        </motion.li>
      </motion.ul>
    </motion.footer>
  )
}
