import { portfolio } from "../data"

function Hero() {
    return (
     <section>
        <p>$ whoami</p>
        <h1>{portfolio.name}</h1>
        <p>{portfolio.title}</p>
        <p>{portfolio.about}</p>
        <div>
            <a href={portfolio.github} target="_blank" rel="nonreferrer">GitHub</a>
            <a href={portfolio.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={`mailto:${portfolio.email}`}>Email</a>
        </div>
     </section>   
    )
}

export default Hero