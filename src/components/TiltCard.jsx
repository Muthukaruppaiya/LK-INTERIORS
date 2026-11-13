import { useRef } from 'react'
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion'

export default function TiltCard({ project }) {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 180,
    damping: 16,
  })
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), {
    stiffness: 180,
    damping: 16,
  })
  const glareX = useTransform(mx, [-0.5, 0.5], [0, 100])
  const glareY = useTransform(my, [-0.5, 0.5], [0, 100])
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.28), transparent 55%)`

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.article
      ref={ref}
      className="tilt-card"
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseLeave={reset}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      <div className="tilt-card__media" style={{ transform: 'translateZ(36px)' }}>
        <img src={project.image} alt={project.title} loading="lazy" />
        <motion.div className="tilt-card__glare" style={{ background: glare }} />
      </div>
      <div className="tilt-card__meta" style={{ transform: 'translateZ(48px)' }}>
        <span>{project.category}</span>
        <h3>{project.title}</h3>
      </div>
    </motion.article>
  )
}
