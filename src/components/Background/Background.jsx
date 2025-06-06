import React, { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './Background.module.css'

export const Background = () => {
    const canvasRef = useRef(null)
    const particlesRef = useRef([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const { scrollYProgress } = useScroll()
    
    // Transform scroll progress into various effects
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const gradientOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.6, 0.3])
    const particleSpeed = useTransform(scrollYProgress, [0, 1], [1, 3])
    const hueRotation = useTransform(scrollYProgress, [0, 1], [0, 360])

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId

        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const handleMouseMove = (e) => {
            mouseRef.current = {
                x: e.clientX,
                y: e.clientY
            }
        }

        class Particle {
            constructor() {
                this.reset()
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 4 + 2
                this.speedX = Math.random() * 2 - 1
                this.speedY = Math.random() * 2 - 1
                this.opacity = Math.random() * 0.5 + 0.3
                this.hue = Math.random() * 60 - 30
                this.parallaxFactor = Math.random() * 0.5 + 0.5 // For parallax effect
            }

            update(scrollProgress) {
                // Parallax scrolling effect
                this.y += this.speedY + (scrollProgress * this.parallaxFactor * 2)
                this.x += this.speedX

                // Mouse interaction
                const dx = this.x - mouseRef.current.x
                const dy = this.y - mouseRef.current.y
                const distance = Math.sqrt(dx * dx + dy * dy)
                
                if (distance < 200) {
                    const angle = Math.atan2(dy, dx)
                    const force = (200 - distance) / 200
                    this.x += Math.cos(angle) * force * 2
                    this.y += Math.sin(angle) * force * 2
                }

                // Wrap around screen
                if (this.x < 0) this.x = canvas.width
                if (this.x > canvas.width) this.x = 0
                if (this.y < 0) this.y = canvas.height
                if (this.y > canvas.height) this.y = 0
            }

            draw(currentHue) {
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.fillStyle = `hsla(${(currentHue + this.hue) % 360}, 80%, 70%, ${this.opacity})`
                ctx.fill()
            }
        }

        const initParticles = () => {
            particlesRef.current = Array.from({ length: 150 }, () => new Particle())
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            
            const scrollProgress = scrollYProgress.get()
            const currentHue = hueRotation.get()

            // Update and draw particles
            particlesRef.current.forEach(particle => {
                particle.update(scrollProgress)
                particle.draw(currentHue)
            })

            // Draw connections
            particlesRef.current.forEach((p1, i) => {
                particlesRef.current.slice(i + 1).forEach(p2 => {
                    const dx = p1.x - p2.x
                    const dy = p1.y - p2.y
                    const distance = Math.sqrt(dx * dx + dy * dy)

                    if (distance < 150) {
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.strokeStyle = `hsla(${(currentHue + (p1.hue + p2.hue) / 2) % 360}, 80%, 70%, ${0.2 * (1 - distance / 150)})`
                        ctx.lineWidth = 1
                        ctx.stroke()
                    }
                })
            })

            animationFrameId = requestAnimationFrame(animate)
        }

        // Initialize
        resizeCanvas()
        initParticles()
        animate()

        // Event listeners
        window.addEventListener('resize', resizeCanvas)
        window.addEventListener('mousemove', handleMouseMove)

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas)
            window.removeEventListener('mousemove', handleMouseMove)
            cancelAnimationFrame(animationFrameId)
        }
    }, [scrollYProgress, hueRotation])

    return (
        <div className={styles.background}>
            <canvas ref={canvasRef} className={styles.canvas} />
            <motion.div
                className={styles.gradient}
                style={{
                    y: backgroundY,
                    opacity: gradientOpacity,
                    background: [
                        'radial-gradient(circle at 0% 0%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 0%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 100%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 0%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)'
                    ]
                }}
                animate={{
                    background: [
                        'radial-gradient(circle at 0% 0%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 0%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 100% 100%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 100%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)',
                        'radial-gradient(circle at 0% 0%, rgba(25, 55, 109, 0.4) 0%, transparent 50%)'
                    ]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
        </div>
    )
} 