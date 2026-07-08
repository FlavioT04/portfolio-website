import { portfolio } from '../data'

function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {portfolio.projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-meta">
                <span className="project-type">{project.type}</span>
                <span className="project-period">{project.period}</span>
              </div>
              <h3 className="project-name">{project.name}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="tech-list">
                {project.tech.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
