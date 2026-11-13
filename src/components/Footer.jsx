import { brand } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>
            {brand.name} {brand.studio}
          </strong>
          <p>Modern interior design with depth, material honesty, and calm luxury.</p>
        </div>
        <a href={brand.instagram} target="_blank" rel="noreferrer">
          Instagram
        </a>
        <p className="footer__copy">© {new Date().getFullYear()} LK Interiors Studio</p>
      </div>
    </footer>
  )
}
