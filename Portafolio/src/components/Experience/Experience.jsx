import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Desarrollador de Software",
      company: "NeoSoltec",
      period: "Agosto 2021 - Octubre 2021",
      description: "Desarrollé aplicaciones móviles con Ionic, HTML y CSS. Implementé un prototipo en Flutter para el registro de turnos mediante QR, automatizando la selección de controles de seguridad y mejorando la eficiencia en el ingreso de trabajadores.",
      technologies: ["Flutter", "Dart"]
    },
    {
      id: 2,
      title: "Desarrollador FullStack",
      company: "Selyt",
      period: "Octubre 2021 - Enero 2022",
      description: "Construí interfaces completas para plataformas web usando HTML, CSS, JavaScript, ReactJS, Bootstrap 5 y MongoDB. Transformé requerimientos empresariales en soluciones tecnológicas, optimizando la experiencia de usuario y la gestión de datos",
      technologies: ["React", "MongoDB", "Node.js", "JavaScript", "CSS", "Bootstrap", "Redux"]
    },
    {
      id: 3,
      title: "Desarrollador de Software",
      company: "MineRP",
      period: "Enero 2022 - Sept 2022",
      description: "Brindé soporte técnico entre operaciones en Sudáfrica y Chile, diagnosticando y resolviendo incidencias en servicios mineros desarrollados en Python. Mejoré y mantuve aplicaciones críticas, alineando soluciones a las necesidades del cliente.",
      technologies: ["Python", "AutoCAD", "PowerBI"]
    },
    {
      id: 4,
      title: "Ingeniero de Software",
      company: "Epiroc S.A.C",
      period: "Sep 2022 - Marzo 2025",
      description: "Lideré proyectos de digitalización y automatización en minería, desde la recopilación de requerimientos hasta la implementación. Automatizé el procesamiento y validación de grandes volúmenes de datos con Python, optimizando la toma de decisiones y la eficiencia operativa.",
      technologies: ["Python", "JavaScript", "AutoCAD", "PowerBI", "SQl Server Management Studio", "PostreSQl"]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div className="section-header">
          <h2 className="section-title">Experiencia Profesional</h2>
          <p className="section-subtitle">
            Mi trayectoria en el mundo del desarrollo
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="experience-card">
                  <div className="card-header">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="period">{exp.period}</span>
                    </div>
                  </div>
                  
                  <p className="job-description">{exp.description}</p>
                  
                  <div className="technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="timeline-marker">
                <div className="marker-ring"></div>
                <div className="marker-dot"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
