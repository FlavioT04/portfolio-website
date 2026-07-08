import { portfolio } from '../data'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <span className="navbar-name">{portfolio.shortName}</span>
        <ul className="navbar-links">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
