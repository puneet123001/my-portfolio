import './App.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
function App() {
  

  return (
     <div className="relative scroll-smooth ">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <About />
    </div>
  )
}

export default App
