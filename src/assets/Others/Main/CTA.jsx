import CV from "./CV.pdf"

function CTA() {
  return (
    <>
        <div className="cta">
            <a href={CV} download className="btn">DownLoad CV</a>
            <a href="#contact" className="btn btn-primary">Contact</a>
        </div>
    </>
  )
}

export default CTA;