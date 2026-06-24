import { portfolio } from "../data"

function Navbar() {
    return (
        <nav>
            <span>{portfolio.shortName}</span>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#Experience">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar