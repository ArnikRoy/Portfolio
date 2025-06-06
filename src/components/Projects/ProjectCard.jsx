import React from 'react'
import { getImageUrl } from '../../utils';
import styles from "./ProjectCard.module.css"
import { motion } from 'framer-motion'

export const ProjectCard = ({project}) => {
  const cardVariants = {
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
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

  const linkVariants = {
    hover: {
      scale: 1.1,
      backgroundColor: "var(--color-primary)",
      color: "white",
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div 
      className={styles.container}
      variants={cardVariants}
      whileHover="hover"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className={styles.imageContainer}
        variants={imageVariants}
      >
        <img 
          src={getImageUrl(project.imageSrc)} 
          alt={`Image of ${project.title}`} 
          className={styles.image}
        />
      </motion.div>
      <motion.h3 
        className={styles.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {project.title}
      </motion.h3>
      <motion.p 
        className={styles.description}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {project.description}
      </motion.p>
      <motion.ul 
        className={styles.skills}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {project.skills.map((skill, id) => {
          return (
            <motion.li 
              key={id} 
              className={styles.skill}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + (id * 0.1) }}
            >
              {skill}
            </motion.li>
          )
        })}
      </motion.ul>
      <motion.div 
        className={styles.links}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.a 
          href={project.demo} 
          className={styles.link}
          variants={linkVariants}
          whileHover="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </motion.a>
        <motion.a 
          href={project.source} 
          className={styles.link}
          variants={linkVariants}
          whileHover="hover"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source
        </motion.a>
      </motion.div>
    </motion.div>
  )
}
