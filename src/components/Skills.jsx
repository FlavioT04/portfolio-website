import { portfolio } from '../data'

function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(portfolio.skills).map(([category, items]) => (
            <div key={category} className="skill-group">
              <h3 className="skill-category">{category}</h3>
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
