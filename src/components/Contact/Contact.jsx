import React from 'react';
import { getImageUrl } from '../../utils';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'/>
                <a href='mailto: royarnik107@gmail.com'>royarnik107@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Github Icon'/>
                <a href='https://github.com/ArnikRoy'>github.com/ArnikRoy</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='Linkedin Icon'/>
                <a href='https://www.linkedin.com/in/arnik-roy-040a1a234/'>linkedin.com/arnik-roy</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/igIcon.png")} alt='Insta Icon'/>
                <a href='https://www.instagram.com/glider_107/'>instagram.com/glider_107</a>
            </li>
        </ul>
    </footer>
  )
}
