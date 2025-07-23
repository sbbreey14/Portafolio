import { useState } from 'react'
import './Navbar.css'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <span className="code-icon">&lt;/&gt;</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#hero" onClick={() => scrollToSection('hero')} className="nav-link">
            Inicio
          </a>
          <a href="#about" onClick={() => scrollToSection('about')} className="nav-link">
            Sobre mí
          </a>
          <a href="#experience" onClick={() => scrollToSection('experience')} className="nav-link">
            Experiencia
          </a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="nav-link">
            Proyectos
          </a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="nav-link">
            Contacto
          </a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
