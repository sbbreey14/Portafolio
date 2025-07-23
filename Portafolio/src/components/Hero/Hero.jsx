import './Hero.css'

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hola, me llamo <span className="gradient-text">Sebastian Gallardo</span>
            </h1>
            <h2 className="hero-subtitle">Desarrollador Full Stack</h2>
            <p className="hero-description">
              Apasionado por crear experiencias digitales y soluciones 
              tecnológicas innovadoras. Especializado en desarrollo web moderno 
              con javaScript,  React y tecnologías emergentes.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary"
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver Proyectos
              </button>
              <button 
                className="btn btn-secondary"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://via.placeholder.com/300x300/667eea/ffffff?text=Tu+Foto" 
                alt="Foto de perfil" 
                className="profile-image"
              />
              <div className="image-bg"></div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
