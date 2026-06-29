import { portfolio } from "../data"

function About() {
    return (
        <section id="about">
            <h2>About</h2>
            <p>{portfolio.about}</p>
            <div>
                <h3>{portfolio.education.school}</h3>
                <p>{portfolio.education.degree}</p>
                <p>{portfolio.education.period}</p>
            </div>
        </section>
    )
}

export default About