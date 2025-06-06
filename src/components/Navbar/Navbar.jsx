import React, { useEffect, useState, useRef } from 'react'
import styles from './Navbar.module.css'
import { getImageUrl } from '../../utils'
import { motion, useAnimation } from 'framer-motion'
import { gsap } from 'gsap'

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const navRef = useRef(null)
    const controls = useAnimation()

    useEffect(() => {
        // GSAP scroll-based shadow effect
        const handleScroll = () => {
            if (window.scrollY > 30) {
                gsap.to(navRef.current, { boxShadow: '0 4px 24px rgba(25,55,109,0.15)', background: 'rgba(25,55,109,0.85)', duration: 0.4, ease: 'power2.out' })
            } else {
                gsap.to(navRef.current, { boxShadow: 'none', background: 'transparent', duration: 0.4, ease: 'power2.out' })
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        // Framer Motion entrance animation
        controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: 'easeOut' }
        })
    }, [controls])

    return (
        <motion.nav
            className={styles.navbar}
            ref={navRef}
            initial={{ opacity: 0, y: -40 }}
            animate={controls}
        >
            <motion.a 
                className={styles.title} 
                href='/'
                whileHover={{ scale: 1.08, color: 'var(--color-primary)' }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                Portfolio
            </motion.a>
            <div className={styles.menu}>
                <motion.img 
                    className={styles.menuBtn} 
                    src={menuOpen ? getImageUrl('nav/closeIcon.png') : getImageUrl('nav/menuIcon.png')} 
                    alt='menu-button' 
                    onClick={() => setMenuOpen(!menuOpen)}
                    whileTap={{ scale: 0.9 }}
                />
                <motion.ul 
                    className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <motion.li whileHover={{ scale: 1.1 }}><motion.a href='#about'>About</motion.a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><motion.a href='#skills'>Skills</motion.a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><motion.a href='#experience'>Experience</motion.a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><motion.a href='#projects'>Projects</motion.a></motion.li>
                    <motion.li whileHover={{ scale: 1.1 }}><motion.a href='#contact'>Contact</motion.a></motion.li>
                </motion.ul>
            </div>
        </motion.nav>
    )
}

