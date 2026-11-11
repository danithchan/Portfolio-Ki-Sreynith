
import Navbar from './component/Navbar';

import Home from './Page/Home';
import About from './Page/About';
import Skills from './Page/Skills';
import Projects from './Page/Projects';
import Experience from './Page/Experience';
import Contact from './Page/Contact';
import Footer from './Page/Footer';

import './App.css';

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-clip bg-white font-sans text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100">
      <Navbar />

      {/* Full-width sections */}
      <Home />
      <About />
      <Skills />
              <Projects />
        <Experience />
         <Contact />
      <Footer />
    </div>
  );
}

export default App;
