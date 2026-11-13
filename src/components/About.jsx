import { motion } from 'framer-motion'
import { galleryVersion } from '../data/content'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <motion.div
          className="about__visual"
          initial={{ opacity: 0, rotateY: -18, x: -40 }}
          whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.9 }}
        >
          <div className="about__frame">
            <img
              src={`/gallery/ig-07.jpg?v=${galleryVersion}`}
              alt="Custom wardrobe by LK Interiors Studio"
            />
          </div>
          <div className="about__float">
            <span>Studio</span>
            <strong>Crafted atmospheres</strong>
          </div>
        </motion.div>

        <motion.div
          className="about__copy"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <p className="section__eyebrow">About the studio</p>
          <h2 className="section__title">Design that feels lived-in from day one.</h2>
          <p className="section__text">
            LK Interiors Studio designs and installs wardrobes, modular kitchens, false ceilings,
            and custom home interiors. Every project is planned around your space, storage needs,
            and a clean modern finish you can live with every day.
          </p>
          <ul className="about__stats">
            <li>
              <strong>3D</strong>
              <span>Concept visuals</span>
            </li>
            <li>
              <strong>End-to-end</strong>
              <span>Design to install</span>
            </li>
            <li>
              <strong>Bespoke</strong>
              <span>Material stories</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
