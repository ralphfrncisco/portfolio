import React from 'react'
import { Building } from 'lucide-react'

function Experience() {
  const experiences = [
    { title: "Front-End Developer", company: "Freelance", year: "2026", current: true },
    { title: "BS Information Technology 🎓", company: "University of the East", year: "2025" },
    { title: "NOC Intern", company: "Tech2Go Network Innovation", year: "2025" },
    { title: "Hello World! 👋🏻", company: "Wrote my first line of code", year: "2021" },
  ];

  return (
    <section className="p-2">
      <div className="border rounded-lg p-6 md:pb-[5.4rem] transition-colors duration-300
        bg-white border-gray-200 text-gray-900 shadow-sm
        dark:bg-[#121212] dark:border-[#222] dark:text-white">

        <div className="flex items-center gap-2 mb-9">
          <Building size={18} className="text-gray-800 dark:text-white/80" />
          <h2 className="text-xl font-bold tracking-tight">Experience</h2>
        </div>

        <div className="relative space-y-6">
          <div className="absolute left-1.5 top-2 bottom-2 w-px bg-gray-300 dark:bg-white/10"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 group cursor-default">
              <div className={`absolute left-0 top-1.5 w-3 h-3 rounded-full transition-all duration-300 z-10 hover:scale-120 ${
                exp.current
                  ? 'bg-black border-black scale-110 dark:bg-white dark:border-white'
                  : 'bg-white border-2 border-gray-300 dark:bg-black dark:border-white/20'
              }`}></div>

              <div className="flex flex-row items-start justify-between gap-2">
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-normal leading-none text-gray-900 dark:text-white">
                    {exp.title}
                  </h3>
                  <p className="text-xs mt-1.5 font-extralight text-gray-500 dark:text-gray-200/60">
                    {exp.company}
                  </p>
                </div>

                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0
                  bg-gray-100 border-gray-200 text-gray-600
                  dark:bg-gray-800/50 dark:border-gray-700 dark:text-gray-400">
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