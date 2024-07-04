import React from 'react'

import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from '../../utils'
import styles from "./Skills.module.css"

export const Skills = () => {
  return (
    <section id='skills' className={styles.container}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.content}>
            <div className={styles.skills}>
                {skills.map((skill,id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                            </div>
                            <p>{skill.title}</p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.history}>
                {history.map((courseItem, id) => {
                    return (
                        <div key={id} className={styles.historyItem}>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${courseItem.acads}`}</h3>
                                <ul>
                                    {courseItem.courses.map((course, id) => {
                                        return <li key={id}>{course}</li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    </section>
  )
}

