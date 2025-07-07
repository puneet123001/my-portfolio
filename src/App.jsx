import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skill';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
function App() {
  

  return (
     <div className="relative scroll-smooth ">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
         <Skills />
         <Projects />
         <Experience />
         <Contact/>
    </div>
  )
}

export default App
