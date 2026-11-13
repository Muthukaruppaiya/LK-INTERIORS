import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaInstagram } from 'react-icons/fa'
import { brand } from '../data/content'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <p className="section__eyebrow">Contact</p>
          <h2 className="section__title">Let’s design your next chapter.</h2>
          <p className="section__text">
            Share your space, timeline, and mood. We reply with a clear next step and a path to
            visualization.
          </p>

          <div className="contact__meta">
            <a href={`mailto:${brand.email}`}>{brand.email}</a>
            <a href={`tel:${brand.phone.replace(/\s/g, '')}`}>{brand.phone}</a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="contact__ig">
              <FaInstagram /> @lk.interiors.studio
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          <label>
            Name
            <input name="name" type="text" required placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" required placeholder="you@email.com" />
          </label>
          <label>
            Project notes
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Room type, city, timeline…"
            />
          </label>
          <button className="btn btn--dark" type="submit">
            {sent ? 'Message noted — thank you' : 'Send inquiry'}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
