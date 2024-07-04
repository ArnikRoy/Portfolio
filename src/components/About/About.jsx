import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container} id='about'>
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} alt='Sitting with laptop'/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cursorIcon.png")} alt='Cursor Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Frontend Developer</h3>
                        <p>I am a Frontend developer skilled in React.js with expertise in creating dynamic and responsive user interfaces.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/serverIcon.png")} alt='Server Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Backend developer skilled in Node.js and Express.js, specializing in building robust and scalable server-side applications and APIs.</p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/uiIcon.png")} alt='UI Icon' />
                    <div className={styles.aboutItemText}>
                        <h3>MERN Stack Developer</h3>
                        <p>MERN stack developer with experience in developing multiple websites. Passionate about creating efficient and scalable web applications.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

