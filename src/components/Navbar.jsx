import { useState, useEffect } from 'react'
import { personal } from '../data/portfolio'

const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Projects',   href: '#projects'    },
  { label: 'Skills',     href: '#skills'      },
  { label: 'Experience', href: '#experience'  },
  { label: 'Contact',    href: '#contact'     },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [active,    setActive]    = useState('')
  const [menuOpen,  setMenuOpen]  = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Scroll-spy
      const sections = NAV_LINKS.map(l => document.querySelector(l.href))
      let current = ''
      sections.forEach(sec => {
        if (sec && window.scrollY >= sec.offsetTop - 120) current = '#' + sec.id
      })
      setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/90 backdrop-blur-md shadow-sm shadow-olive-900/5 py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display text-2xl font-semibold text-olive-800 tracking-tight hover:text-olive-600 transition-colors"
        >
          {personal.initials}
          <span className="text-olive-400">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`font-body text-sm font-medium tracking-wide transition-colors duration-200 relative group ${
                  active === href ? 'text-olive-600' : 'text-olive-700 hover:text-olive-500'
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-olive-500 transition-all duration-300 ${
                    active === href ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/resume/rohitha_resume.pdf"
          target='_blank'
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-primary text-xs px-5 py-2.5"
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 text-olive-700"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4 bg-cream-50/95 backdrop-blur-md border-t border-warm-200">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm font-medium text-olive-700 hover:text-olive-500 transition-colors"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume/rohitha_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs px-5 py-2.5 w-fit"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
