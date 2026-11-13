import { motion } from 'framer-motion'
import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container testimonials__grid">
        {testimonials.map((item, i) => (
          <motion.blockquote
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.55 }}
          >
            <p>“{item.quote}”</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  )
}
