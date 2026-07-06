import { portfolio } from '../data'

function Certificates() {
  return (
    <section id="certificates">
      <h2>Certificates</h2>
      <div>
        {portfolio.certificates.map((cert) => (
          <div key={cert.id}>
            <span>{cert.name}</span>
            <span>{cert.date}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
