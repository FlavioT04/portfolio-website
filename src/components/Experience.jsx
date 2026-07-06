import { portfolio } from '../data'

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>
      <div>
        {portfolio.experience.map((job) => (
          <div key={job.id}>
            <div>
              <h3>{job.role}</h3>
              <span>{job.period}</span>
            </div>
            <p>{job.company}</p>
            <ul>
              {job.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
