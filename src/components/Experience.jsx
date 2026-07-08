import { portfolio } from '../data'

function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {portfolio.experience.map((job) => (
            <div key={job.id} className="experience-item">
              <div className="experience-header">
                <h3 className="experience-role">{job.role}</h3>
                <span className="experience-period">{job.period}</span>
              </div>
              <p className="experience-company">{job.company}</p>
              <ul className="experience-points">
                {job.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
