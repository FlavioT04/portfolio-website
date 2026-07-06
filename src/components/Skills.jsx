import { portfolio } from '../data'

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        {Object.entries(portfolio.skills).map(([category, items]) => (
          <div key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
