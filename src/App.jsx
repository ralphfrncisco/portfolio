import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Header from './layout/Header.jsx';
import About from './layout/About.jsx';
import Experience from './layout/Experience.jsx';
import TechStack from './layout/tech-stack.jsx';
import Certifications from './layout/Certifications.jsx';
import Projects from './layout/Projects.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  // AOS comment for future changes

  useEffect(() => {
    AOS.init({
      duration: 400,       // animation duration in milliseconds
      once: false,         // whether animation should happen only once
      offset: 3,           // offset (in px) from the original trigger point
      easing: 'ease',      // animation easing
      delay: 50           // delay before the animation starts
    });
  }, []);

  return (
    <div className={`min-h-screen w-full antialiased transition-colors duration-300
    ${darkMode ? 'portfolio-gradient text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <section>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>

        <main>
          <section className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 md:col-span-2" data-aos="fade-up">
              <About darkMode={darkMode} />
            </div>

            <div className="col-span-1 md:col-span-1" data-aos="fade-up">
              <Experience darkMode={darkMode} />
            </div>
          </section>
          
          <section className="grid grid-cols-1 md:grid-cols-2">
            <div data-aos="fade-up">
              <TechStack darkMode={darkMode} />
            </div>
            <div data-aos="fade-up">
              <Certifications darkMode={darkMode} />
            </div>
          </section>

          <div data-aos="fade-up">
            <Projects darkMode={darkMode} />
          </div>
        </main>
      </div>

      <footer>
        <div className={`mx-auto pt-6 pb-6 p-4 text-center text-xs font-light ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>
          <p>© 2024 Ralph Angelo Francisco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App