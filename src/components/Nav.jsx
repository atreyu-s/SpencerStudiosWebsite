import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const onHome = pathname === '/'

  return (
    <nav className="nav">
      <Link to="/" className="nav-logo">Spencer Studios LLC</Link>

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
        <li><a href={onHome ? '#about' : '/#about'} onClick={() => setOpen(false)}>About</a></li>
        <li><a href={onHome ? '#projects' : '/#projects'} onClick={() => setOpen(false)}>Work</a></li>
        <li><a href={onHome ? '#consulting' : '/#consulting'} onClick={() => setOpen(false)}>Consulting</a></li>
        <li><a href={onHome ? '#contact' : '/#contact'} onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )
}
