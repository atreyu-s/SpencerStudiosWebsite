import profileImg from '../assets/profile.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-wordmark">Spencer Studios</h1>
          <p className="hero-tagline">Indie software &amp; technical consulting.</p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#consulting" className="btn btn-outline">Work With Me</a>
          </div>
        </div>
        <div className="hero-photo-wrap">
          <img src={profileImg} alt="Trey Spencer" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}
