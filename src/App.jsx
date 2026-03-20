import { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import { Analytics } from '@vercel/analytics/react';

import Header from './layout/Header.jsx';
import About from './layout/About.jsx';
import Experience from './layout/Experience.jsx';
import TechStack from './layout/tech-stack.jsx';
import Certifications from './layout/Certifications.jsx';
import Projects from './layout/Projects.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  // Sync darkMode → .dark class + bg on <html>
  useEffect(() => {
    const html = document.documentElement
    if (darkMode) {
      html.classList.add('dark')
      html.style.backgroundColor = '#000'
    } else {
      html.classList.remove('dark')
      html.style.backgroundColor = ''
    }
  }, [darkMode])

  useEffect(() => {
    AOS.init({
      duration: 400,
      once: false,
      offset: 3,
      easing: 'ease',
      delay: 50
    });
  }, []);

  return (
    <div className="min-h-screen w-full antialiased transition-colors duration-300 custom-scrollbar
      bg-gray-50 text-gray-900 dark:bg-transparent dark:text-white">
      <div className="max-w-4xl mx-auto">
        <section>
          {/* Header still receives darkMode/setDarkMode — needed for the toggle button UI */}
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>

        <main>
          <section className="grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 md:col-span-2" data-aos="fade-up">
              <About />
            </div>
            <div className="col-span-1 md:col-span-1" data-aos="fade-up">
              <Experience />
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2">
            <div data-aos="fade-up">
              <TechStack />
            </div>
            <div data-aos="fade-up">
              <Certifications />
            </div>
          </section>

          <div data-aos="fade-up">
            <Projects />
          </div>
        </main>
      </div>

      <footer>
        <div className="mx-auto pt-6 pb-6 p-4 text-center text-xs font-light
          text-gray-500 dark:text-white/60">
          <p>© 2024 Ralph Angelo Francisco. All rights reserved.</p>
        </div>
      </footer>
      <Analytics />
    </div>
  )
}

export default App