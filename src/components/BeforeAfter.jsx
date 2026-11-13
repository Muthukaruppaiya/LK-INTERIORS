import { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { transformations } from '../data/content'

function CompareSlider({ item }) {
  const trackRef = useRef(null)
  const dragging = useRef(false)
  const [pos, setPos] = useState(50)

  const updateFromClientX = useCallback((clientX) => {
    const rect = trackRef.current?.getBoundingClientRect()
    if (!rect || rect.width <= 0) return
    const next = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(96, Math.max(4, next)))
  }, [])

  const onPointerDown = (e) => {
    dragging.current = true
    trackRef.current?.setPointerCapture?.(e.pointerId)
    updateFromClientX(e.clientX)
  }

  const onPointerMove = (e) => {
    if (!dragging.current) return
    updateFromClientX(e.clientX)
  }

  const onPointerUp = (e) => {
    dragging.current = false
    if (trackRef.current?.hasPointerCapture?.(e.pointerId)) {
      trackRef.current.releasePointerCapture(e.pointerId)
    }
  }

  return (
    <article className="compare">
      <div className="compare__copy">
        <p className="section__eyebrow">{item.location}</p>
        <h3>{item.title}</h3>
        <p>Drag the handle to reveal the transformation.</p>
      </div>

      <div
        className="compare__stage"
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        role="slider"
        aria-valuemin={4}
        aria-valuemax={96}
        aria-valuenow={Math.round(pos)}
        aria-label={`${item.title} before and after comparison`}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowLeft') setPos((p) => Math.max(4, p - 3))
          if (e.key === 'ArrowRight') setPos((p) => Math.min(96, p + 3))
        }}
      >
        <img
          className="compare__img compare__img--after"
          src={item.after}
          alt={`${item.title} after`}
          draggable={false}
        />
        <div
          className="compare__before"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img src={item.before} alt={`${item.title} before`} draggable={false} />
        </div>
        <div className="compare__line" style={{ left: `${pos}%` }}>
          <span className="compare__handle" aria-hidden>
            ‹ ›
          </span>
        </div>
        <span className="compare__label compare__label--before">Before</span>
        <span className="compare__label compare__label--after">After</span>
      </div>
    </article>
  )
}

export default function BeforeAfter() {
  return (
    <section id="transform" className="section transform">
      <div className="container">
        <motion.div
          className="section__header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section__eyebrow">Before & after</p>
          <h2 className="section__title">See the shift in atmosphere.</h2>
        </motion.div>

        <div className="transform__list">
          {transformations.map((item) => (
            <CompareSlider key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
