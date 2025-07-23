import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <span className="footer-name">Sebastian Gallardo</span>
            <span className="footer-separator">-</span>
            <span className="footer-title">Desarrollador FullStack</span>
          </div>
          
          <div className="footer-icon">
            <span className="code-icon">&lt;/&gt;</span>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
