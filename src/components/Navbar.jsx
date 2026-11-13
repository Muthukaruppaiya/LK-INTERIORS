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
    <>
      <header className={`nav ${scrolled || open ? 'nav--solid' : ''}`}>
        <div className="nav__inner">
          <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
            <span className="nav__mark">LK</span>
            <span className="nav__name">
              {brand.name}
              <em>{brand.studio}</em>
            </span>
          </a>

          <nav className="nav__desktop" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
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
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {/* Outside header so backdrop-filter does not clip fixed overlay */}
      <div className={`nav-mobile ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <nav className="nav-mobile__panel" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              style={{ transitionDelay: open ? `${70 + i * 45}ms` : '0ms' }}
              onClick={() => setOpen(false)}
            >
              <span>0{i + 1}</span>
              {link.label}
            </a>
          ))}

          <div className="nav-mobile__actions">
            <a
              className="nav__cta nav__cta--mobile"
              href={`tel:${brand.phone.replace(/\s/g, '')}`}
              onClick={() => setOpen(false)}
            >
              Call {brand.phone}
            </a>
            <a
              className="nav__ig"
              href={brand.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
            >
              @lk.interiors.studio
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}
