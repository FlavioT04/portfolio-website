import { portfolio } from '../data'

function About() {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About</h2>
        <div className="about-grid">
          <div className="about-text">
            <p>{portfolio.about}</p>
          </div>
          <div className="education-card">
            <h3>{portfolio.education.school}</h3>
            <p className="degree">{portfolio.education.degree}</p>
            <p className="period">{portfolio.education.period}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
