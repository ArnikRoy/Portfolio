import styles from './App.module.css'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { About } from './components/About/About'
import { Skills } from './components/Skills/Skills'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'
import { Experience } from './components/Experience/Experience'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollToTop } from './components/ScrollToTop/ScrollToTop'
import { Background } from './components/Background/Background'

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    // GSAP animation for the background
    gsap.to('.background-gradient', {
      background: 'radial-gradient(circle at 50% 50%, rgba(25, 55, 109, 0.1) 0%, rgba(12, 12, 12, 0.8) 100%)',
      duration: 2,
      ease: 'power2.inOut'
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const pageVariants = {
    initial: {
      opacity: 0,
      y: 20
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut'
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: 'easeIn'
      }
    }
  };

  return (
    <div className={styles.App}>
      <Background />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
        >
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </motion.div>
      </AnimatePresence>
      <ScrollToTop />
    </div>
  )
}

export default App
