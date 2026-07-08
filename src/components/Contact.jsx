import { portfolio } from '../data'

function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact</h2>
        <div className="contact-content">
          <p className="contact-desc">Feel free to reach out!</p>
          <div className="contact-links">
            <a href={`mailto:${portfolio.email}`} className="contact-link">
              <span className="contact-label">email</span>
              {portfolio.email}
            </a>
            <a href={portfolio.github} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-label">github</span>
              github.com/FlavioT04
            </a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer" className="contact-link">
              <span className="contact-label">linkedin</span>
              linkedin.com/in/flaviomt1
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
