import { useEffect } from 'react'

/**
 * Smooth anchor scrolling + soft wheel easing feel.
 */
export default function SmoothScroll() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'

    const onClick = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href')
      if (!id || id === '#') return
      const target = document.querySelector(id)
      if (!target) return
      e.preventDefault()
      const top = target.getBoundingClientRect().top + window.scrollY - 72
      window.scrollTo({ top, behavior: 'smooth' })
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
