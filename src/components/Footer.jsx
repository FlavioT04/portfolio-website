import { portfolio } from '../data'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-name">{portfolio.name}</span>
        <div className="footer-links">
          <a href={portfolio.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
