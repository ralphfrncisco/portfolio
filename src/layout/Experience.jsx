import React from 'react'

function Experience({ darkMode }) {
  const experiences = [
    { title: "Quality Assurance", company: "GameOps Inc.", year: "2026", current: true },
    { title: "Front-End Developer", company: "Freelance", year: "2026", current: true },
    { title: "BS Information Technology", company: "University of the East", year: "2025" },
    { title: "NOC Intern", company: "Tech2Go Network Innovation", year: "2025" },
    { title: "Hello World! 👋🏻", company: "Wrote my first line of code", year: "2021" },
  ];

  return (
    <section>
      <div className={`border rounded-lg p-6 transition-colors duration-300 max-w-xs ${
        darkMode ? 'bg-[#121212] border-[#222] text-white' : 'bg-white border-gray-200 text-gray-900 shadow-sm'
      }`}>
        <div className="flex items-center gap-2 mb-6">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          <h2 className="text-xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="relative space-y-6">
          <div className={`absolute left-1.5 top-2 bottom-2 w-px ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group cursor-default">
              <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full transition-all duration-200 hover:scale-120 ${
                exp.current 
                  ? 'bg-black border-1 border-black dark:bg-white dark:border-gray-300 scale-110' 
                  : `bg-white border-2 border-gray-300 dark:bg-[#121212] dark:border-gray-700 group-hover:border-gray-500`
              }`}></div>

                {/* bg-white border-gray-300 dark:bg-[#121212] dark:border-gray-700 group-hover:border-gray-500 */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <div>
                  <h3 className={`text-sm font-normal ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {exp.title}
                  </h3>
                  <p className={`text-xs font-extralight ${darkMode ? 'text-gray-200/60' : 'text-gray-500'}`}>
                    {exp.company}
                  </p>
                </div>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border self-start sm:self-center ${
                  darkMode 
                    ? 'bg-gray-800/50 border-gray-700 text-gray-400' 
                    : 'bg-gray-100 border-gray-200 text-gray-600'
                }`}>
                  {exp.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience;