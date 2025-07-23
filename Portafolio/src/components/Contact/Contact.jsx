import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [copied, setCopied] = useState(false)
  const email = "seba.gallardo.huerta@gmail.com"

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Error al copiar email:', err)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¿Tienes un proyecto en mente? ¡Hablemos!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <h3>¡Trabajemos juntos!</h3>
              <p>
                Estoy siempre interesado en nuevas oportunidades y proyectos emocionantes.
              </p>
              
              <div className="contact-details">
                <div className="contact-item main-contact">
                  <div className="contact-icon">
                    <span>📧</span>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Copia mi email para contactarme</span>
                    <div className="email-container">
                      <span className="email-text">{email}</span>
                      <button 
                        className={`copy-btn ${copied ? 'copied' : ''}`}
                        onClick={copyEmail}
                        title="Copiar email"
                      >
                        {copied ? '✓ Copiado' : '📋 Copiar'}
                      </button>
                    </div>
                    {copied && <span className="copy-feedback">¡Email copiado al portapapeles!</span>}
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <span>📍</span>
                  </div>
                  <div className="contact-text">
                    <span className="contact-label">Ubicación</span>
                    <span className="contact-value">Santiago, Chile</span>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <a href="https://www.linkedin.com/in/sebastian-gallardo-5b6685221/" target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
                <a href="https://github.com/sbbreey14" target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
