import { motion } from 'framer-motion'
import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section__header">
          <p className="section__eyebrow">Services</p>
          <h2 className="section__title">One studio. Complete spatial care.</h2>
        </div>

        <div className="services__list">
          {services.map((item, i) => (
            <motion.article
              key={item.title}
              className="service"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
            >
              <span className="service__index">0{i + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
