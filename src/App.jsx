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
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <BeforeAfter />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
