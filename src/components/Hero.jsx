import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { brand } from '../data/content'

const HERO_IMAGE = '/gallery/transform-living-after.png?v=hero-clear'

export default function Hero() {
  const ref = useRef(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 18 })
  const sy = useSpring(my, { stiffness: 60, damping: 18 })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const fadeOut = useTransform(scrollYProgress, [0, 0.55], [1, 0])
  const fadeSlide = useTransform(scrollYProgress, [0, 0.7], [0, 48])
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.12])
  const veilDarken = useTransform(scrollYProgress, [0, 0.8], [1, 0.92])

  const layerFar = {
    x: useTransform(sx, [-0.5, 0.5], [28, -28]),
    y: useTransform(sy, [-0.5, 0.5], [18, -18]),
  }
  const layerNear = {
    x: useTransform(sx, [-0.5, 0.5], [-18, 18]),
    y: useTransform(sy, [-0.5, 0.5], [-12, 12]),
  }

  const onMove = (e) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      id="top"
      className="hero"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => {
        mx.set(0)
        my.set(0)
      }}
    >
      <motion.div className="hero__media" style={{ ...layerFar, scale: mediaScale }}>
        <img src={HERO_IMAGE} alt="Modern living room designed by LK Interiors Studio" />
      </motion.div>
      <motion.div className="hero__veil" style={{ opacity: veilDarken }} />

      <motion.div
        className="hero__content"
        style={{ opacity: fadeOut, y: fadeSlide }}
      >
        <motion.p
          className="hero__eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Interior Design Studio
        </motion.p>

        <motion.h1
          className="hero__brand"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.08 }}
        >
          {brand.name}
          <span>{brand.studio}</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.18 }}
        >
          {brand.tagline} Modern rooms with depth, warmth, and quiet luxury.
        </motion.p>

        <motion.div
          className="hero__actions"
          style={layerNear}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
        >
          <a className="btn btn--light" href="#transform">
            View Projects
          </a>
          <a className="btn btn--ghost" href="#contact">
            Start a Project
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
