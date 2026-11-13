import { useEffect, useState } from 'react'
import { brand, navLinks } from '../data/content'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <span className="nav__mark">LK</span>
          <span className="nav__name">
            {brand.name}
            <em>{brand.studio}</em>
          </span>
        </a>

        <nav className={`nav__links ${open ? 'is-open' : ''}`} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a
            className="nav__cta nav__cta--mobile"
            href={brand.instagram}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Instagram
          </a>
        </nav>

        <a
          className="nav__cta nav__cta--desktop"
          href={brand.instagram}
          target="_blank"
          rel="noreferrer"
        >
          Follow Studio
        </a>

        <button
          className={`nav__toggle ${open ? 'is-open' : ''}`}
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
