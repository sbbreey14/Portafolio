import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Desarrollador de Software",
      company: "NeoSoltec",
      period: "Agosto 2021 - Octubre 2021",
      description: "Desarrollé un prototipo móvil con Flutter para Codelco, optimizando el registro de ingreso de turnos para los trabajadores.",
      technologies: ["Flutter", "Dart"]
    },
    {
      id: 2,
      title: "Desarrollador FullStack",
      company: "Selyt",
      period: "Octubre 2021 - Enero 2022",
      description: "Desarrollador web con experiencia en el diseño e implementación de interfaces completas para plataformas web.",
      technologies: ["React", "MongoDB", "Node.js", "JavaScript", "CSS", "Bootstrap", "Redux"]
    },
    {
      id: 3,
      title: "Desarrollador de Software",
      company: "MineRP",
      period: "Enero 2022 - Sept 2022",
      description: "Actué como enlace entre las operaciones en Sudáfrica y Chile, facilitando el soporte técnico especializado para servicios mineros desarrollados internamente. Me encargaba del diagnóstico, análisis y resolución de incidencias técnicas, asegurando la continuidad operativa y la satisfacción del cliente",
      technologies: ["Python", "AutoCAD", "PowerBI"]
    },
    {
      id: 4,
      title: "Ingeniero de Software",
      company: "Epiroc S.A.C",
      period: "Sep 2022 - Marzo 2025",
      description: "Lideré proyectos de desarrollo y procesamiento de datos en el sector minero, gestionando desde la definición de requerimientos hasta la implementación final. Desarrollé aplicaciones orientadas al sector minero, incluyendo reuniones directas con clientes para recopilar y analizar sus requerimientos funcionales. Estas necesidades fueron traducidas en funcionalidades técnicas que mejoraron la eficiencia operativa de los procesos",
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
