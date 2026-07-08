import { portfolio } from '../data'

function Certificates() {
  return (
    <section id="certificates">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="certificates-list">
          {portfolio.certificates.map((cert) => (
            <div key={cert.id} className="certificate-item">
              <span className="certificate-name">{cert.name}</span>
              <span className="certificate-date">{cert.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
