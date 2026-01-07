import { useState } from 'react'
import './App.css';

import Header from './layout/Header.jsx';
import About from './layout/About.jsx';
import Experience from './layout/Experience.jsx';

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={`min-h-screen w-full antialiased transition-colors duration-300 ${darkMode ? 'bg-[#090909] text-white' : 'bg-[#FFF] text-gray-900'}`}>
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
          
        </main>
      </div>
    </div>
  )
}

export default App