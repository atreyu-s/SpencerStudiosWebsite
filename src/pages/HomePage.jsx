import Hero from '../components/Hero'
import About from '../components/About'
import Projects from '../components/Projects'
import Consulting from '../components/Consulting'
import Contact from '../components/Contact'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Consulting />
      <Contact />
    </main>
  )
}
