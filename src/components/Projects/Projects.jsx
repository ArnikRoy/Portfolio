import React, { useEffect, useRef } from 'react'
import projects from "../../data/projects.json"
import { ProjectCard } from './ProjectCard';
import styles from "./Projects.module.css"
import { motion } from 'framer-motion'
import { gsap } from 'gsap'

export const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate projects container
      gsap.from(".projects-container", {
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });

      // Animate individual project cards
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".projects-container",
          start: "top center",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, projectsRef);

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

  return (
    <section className={styles.container} id="projects" ref={projectsRef}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h2>
      <motion.div 
        className={`${styles.projects} projects-container`}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projects.map((project, id) => {
          return (
            <motion.div
              key={id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: id * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};
