import { portfolio } from '../data'

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-name">{portfolio.name}</h1>
        <p className="hero-title">{portfolio.title}</p>
        <p className="hero-desc">{portfolio.about}</p>
        <div className="hero-links">
          <a href={portfolio.github} target="_blank" rel="noreferrer" className="btn btn-primary">GitHub</a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="btn btn-secondary">LinkedIn</a>
          <a href={`mailto:${portfolio.email}`} className="btn btn-secondary">Email</a>
        </div>
      </div>
    </section>
  )
}

export default Hero
