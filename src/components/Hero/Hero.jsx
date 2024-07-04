import React, { useEffect } from 'react';
import { getImageUrl } from '../../utils';
import styles from './Hero.module.css';
import Typed from 'typed.js';

export const Hero = () => {
  useEffect(() => {
    const options = {
      strings: ["currently a final year IT undergraduate student at IIIT-Allahabad", "a compettive programmer", "a Full stack web developer specializing in the MERN stack"],
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    };

    const typed = new Typed("#typed", options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Arnik</h1>
        <p className={styles.desc}>
          I am <span id="typed"></span>
        </p>
        <a href='mailto:royarnik107@gmail.com' className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl('hero/heroImage.png')} alt='Hero image' className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
