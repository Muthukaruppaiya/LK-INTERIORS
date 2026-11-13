import { motion } from 'framer-motion'
import { steps } from '../data/content'

export default function Process() {
  return (
    <section className="section process">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Process</p>
          <h2 className="section__title">From first walkthrough to final styling.</h2>
        </div>

        <ol className="process__track">
          {steps.map((step, i) => (
            <motion.li
              key={step.num}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <span>{step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
