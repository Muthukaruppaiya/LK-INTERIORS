import { projects } from '../data/content'
import TiltCard from './TiltCard'
import Scene3D from './Scene3D'
export default function Portfolio() {
  return (
    <section id="work" className="section portfolio">
      <div className="container">
        <div className="portfolio__top">
          <div>
            <p className="section__eyebrow">From @lk.interiors.studio</p>
            <h2 className="section__title">Real projects from our Instagram.</h2>
          </div>
          <Scene3D />
        </div>

        <div className="portfolio__grid">
          {projects.map((project) => (
            <TiltCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
