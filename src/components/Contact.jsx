import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-inner">
        <h2 className="section-title contact-title">Contact</h2>

        <form
          className="contact-form"
          action="https://formspree.io/f/mdawylje"
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required />
          </div>
          <button type="submit" className="btn-submit">Send</button>
        </form>

        <div className="contact-social">
          <a
            href="tel:+14012372092"
            className="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/>
            </svg>
            <span>401-237-2092</span>
          </a>
          <a
            href="mailto:spencer.studios.dev@gmail.com"
            className="social-link"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span>spencer.studios.dev@gmail.com</span>
          </a>
        </div>
      </div>
    </section>
  )
}
