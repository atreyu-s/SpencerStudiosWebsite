import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-inner">
        <h2 className="about-title">About</h2>
        <div className="about-body">
          <p>
            I'm Trey Spencer — a software engineer and Microsoft Certified Professional full-stack developer with experience across mobile, IoT, and real-time
            systems. I spent five years at NAVSEA building software for underwater autonomous
            vehicles: real-time radio handling, multiprocessing architectures, ROS middleware on
            Nvidia Jetson hardware. Serious work, seriously constrained environments.
          </p>
          <p>I left to build something of my own.</p>
          <p>
            Spencer Studios is my independent software studio, based out of Warren, Rhode Island.
            Right now that means Barback, a professional cocktail reference tool for bartenders
            currently in development. It also means consulting: I take on embedded systems, IoT,
            and mobile projects for small teams who need focused technical help without the
            overhead of a large firm.
          </p>
          <p>
            The through-line is craft. Whether it's firmware for an ESP32, a React Native app, or a
            control system for a greenhouse — I care about building things that actually work, that
            are worth the time it took to make them.
          </p>
        </div>
      </div>
    </section>
  )
}
