import { portfolio } from '../data'

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div>
        {portfolio.projects.map((project) => (
          <div key={project.id}>
            <span>{project.type}</span>
            <span>{project.period}</span>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div>
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects