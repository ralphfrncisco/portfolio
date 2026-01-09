import { useState } from 'react'
import './App.css';

import Header from './layout/Header.jsx';
import About from './layout/About.jsx';
import Experience from './layout/Experience.jsx';
import TechStack from './layout/tech-stack.jsx';
import Certifications from './layout/Certifications.jsx';
import Projects from './layout/Projects.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen w-full antialiased transition-colors duration-300
    ${darkMode ? 'portfolio-gradient text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        <section>
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        </section>

        <main>
          <section className = "grid grid-cols-1 md:grid-cols-3">
            <div className="col-span-1 md:col-span-2">
              <About darkMode={darkMode} />
            </div>

            <div className="col-span-1 md:col-span-1">
              <Experience darkMode={darkMode} />
            </div>
          </section>
          
          <section className = "grid grid-cols-1 md:grid-cols-2">
            <TechStack darkMode={darkMode} />
            <Certifications darkMode={darkMode} />
          </section>

          <Projects darkMode={darkMode} />
        </main>
      </div>

      <footer>
        <div className= {`mx-auto pt-6 pb-6 p-4 text-center text-xs font-light ${darkMode ? 'text-white/60' : 'text-gray-500'}`}>
          <p>© 2024 Ralph Angelo Francisco. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App