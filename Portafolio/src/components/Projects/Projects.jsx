import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ToDo list App",
      description: "Aplicación de lista de tareas que agrega, borra y marca como completadas.",
      image: "./src/images/ToDoReducer.png",
      technologies: ["React", "Reducer"],
      github: "https://github.com/sbbreey14/ToDo-ReactReducer",
      demo: "https://todo-list-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Pizzeria App",
      description: "Aplicación que permite escoger entre diferentes pizzas, con un carrito de compras e información de precios.",
      image: "./src/images/pizzaMammaMia.png",
      technologies: ["React", "Router", "useContext", "useState", "CSS", "HTML"],
      github: "https://github.com/sbbreey14/PizzeriaMammaMiaReact",
      demo: "https://pizzeria-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Aplicación De inmobiliaria",
      description: "Aplicación de gestión inmobiliaria con propiedades en arriendo y venta.",
      image: "./src/images/inmobiliaria.png",
      technologies: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/sbbreey14/Inmobiliaria",
      demo: "https://weather-demo.com",
      featured: false
    },
    {
      id: 4,
      title: "Conversor de Monedas",
      description: "Aplicación que permite convertir diferentes monedas en tiempo real, con una interfaz intuitiva, actualizaciones automáticas y graficación de tasas de cambio.",
      image: "./src/images/conversor.png",
      technologies: ["JavaScript", "CSS", "HTML"],
      github: "https://github.com/sbbreey14/conversorMonedas",
      demo: "https://currency-converter-demo.com",
      featured: false
    },
  ]

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2 className="section-title">Mis Proyectos</h2>
          <p className="section-subtitle">
            Algunos de los proyectos en los que he trabajado
          </p>
        </div>

        <div className="featured-projects">
          <h3 className="subsection-title">Proyectos Destacados</h3>
          <div className="featured-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="project-card featured">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>GitHub</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="other-projects">
          <h3 className="subsection-title">Otros Proyectos</h3>
          <div className="projects-grid">
            {otherProjects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-overlay">
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>GitHub</span>
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <span>Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="project-content">
                  <h4 className="project-title">{project.title}</h4>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-technologies">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
