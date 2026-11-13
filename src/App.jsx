import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import BeforeAfter from './components/BeforeAfter'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Reveal from './components/Reveal'
import SmoothScroll from './components/SmoothScroll'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal delay={0.05}>
          <Services />
        </Reveal>
        <Reveal delay={0.05}>
          <BeforeAfter />
        </Reveal>
        <Reveal delay={0.05}>
          <Portfolio />
        </Reveal>
        <Reveal delay={0.05}>
          <Process />
        </Reveal>
        <Reveal delay={0.05}>
          <Testimonials />
        </Reveal>
        <Reveal delay={0.05}>
          <Contact />
        </Reveal>
      </main>
      <Reveal y={20}>
        <Footer />
      </Reveal>
    </div>
  )
}
