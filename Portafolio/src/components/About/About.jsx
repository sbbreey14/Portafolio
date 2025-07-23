import './About.css'

const About = () => {
  const technologies = [
    { name: 'JavaScript', icon: 'JS', color: '#F7DF1E', textColor: '#000' },
    { name: 'React', icon: '⚛️', color: '#61DAFB', textColor: '#000' },
    { name: 'Node.js', icon: 'NODE', color: '#339933', textColor: '#fff' },
    { name: 'Python', icon: 'PY', color: '#3776AB', textColor: '#fff' },
    { name: 'TypeScript', icon: 'TS', color: '#3178C6', textColor: '#fff' },
    { name: 'CSS3', icon: 'CSS', color: '#1572B6', textColor: '#fff' },
    { name: 'HTML', icon: 'HTML', color: '#b66015ff', textColor: '#fff' },
    { name: 'MongoDB', icon: 'DB', color: '#47A248', textColor: '#fff' },
    { name: 'Git', icon: 'GIT', color: '#F05032', textColor: '#fff' },
  ]

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Conoce más sobre mi pasión por la tecnología
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <div className="about-card">
              <h3>Mi Historia</h3>
              <p>
                Soy un desarrollador apasionado con más de 3 años de experiencia
                creando servicios y aplicaciones web modernas.
                Mi viaje comenzó con la curiosidad por entender cómo funcionan las
                cosas detras de cada programa, y esa curiosidad me llevó al fascinante mundo del desarrollo.
              </p>
              <p>
                Tengo conocimientos en tecnologías front-end como React, así como en el desarrollo back-end con Node.js.
                Me gusta crear interfaces de usuario intuitivas y experiencias digitales que aporten valor a los usuarios.
              </p>
            </div>

            <div className="about-card">
              <h3>Mi Filosofía</h3>
              <p>
                Me motiva el aprendizaje constante y la superación diaria. Considero que en un entorno tecnológico en constante evolución, 
                es fundamental mantenerse al día y abierto a nuevas ideas. Para mí, cada proyecto representa una oportunidad valiosa para crecer profesionalmente 
                y seguir desarrollando mis habilidades.
              </p>
            </div>
          </div>

          <div className="skills-section">
            <h3>Tecnologías que manejo</h3>
            <div className="technologies-grid">
              {technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <div
                    className="tech-icon"
                    style={{
                      backgroundColor: tech.color,
                      color: tech.textColor
                    }}
                  >
                    {tech.icon}
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
