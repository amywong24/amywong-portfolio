import './App.scss';
import About from './components/about';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Parallax from './components/Parallax';
import Projects from './components/projects';

function App() {
  return (
    <div>
      <section id='Home'>
        <Navbar />
        <Hero />
      </section>
      <section id='About'>
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section id='Projects'>
        <Parallax type="projects" />
      </section>
      <Projects />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
}

export default App;
