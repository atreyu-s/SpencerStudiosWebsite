import { useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <a href="#hero" className="nav-logo">Spencer Studios LLC</a>

      <button
        className={`nav-hamburger${open ? ' nav-hamburger--open' : ''}`}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`nav-links${open ? ' nav-links--open' : ''}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Work</a></li>
        <li><a href="#consulting" onClick={() => setOpen(false)}>Consulting</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}
