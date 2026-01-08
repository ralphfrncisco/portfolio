import React from 'react'

function About({ darkMode}) {
  return (
    <section className="p-2">

        <div className={`flex items-center border rounded-lg p-4 transition-colors duration-300 ${
            darkMode 
            ? 'bg-[#111] border-[#222] text-white' 
            : 'bg-white border-gray-200 text-gray-800 shadow-sm'
        }`}>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div className="w-full flex items-center gap-3 truncate">
                        <h1 className="text-lg md:text-xl font-bold truncate">About</h1>
                    </div>
                </div>
                <div className={`mt-4 space-y-4 text-xs md:text-sm font-light leading-relaxed ${
                    darkMode ? 'text-white/80' : 'text-gray-800 font-normal'
                }`}>
                    <p>
                    I'm a software developer with a strong focus on building responsive and 
                    user-friendly web applications. I work mainly with <span className = "font-bold">HTML</span>, <span className = "font-bold">CSS</span>, <span className = "font-bold">JavaScript</span>, 
                    <span className = "font-bold"> PHP</span>, and <span className = "font-bold">MySQL</span>. I enjoy turning ideas into working systems that solve 
                    real problems.
                    </p>

                    <p>
                    I've built a web-based loan management system that eliminates redundant paper-based loan inquiries by enabling digital loan balance monitoring and online loan application and approval. The system reduces manual transactions, saves time, and streamlines the loan process for both cooperative officials and members through a more efficient digital workflow.
                    </p>

                    <p>
                    Lately, I'm expanding my skills by learning modern web development like <span className = "font-bold">React</span>, <span className = "font-bold">Tailwind CSS</span>,
                    and exploring how emerging technologies such as automation and AI-assisted 
                    development.
                    </p>
                    
                    <p>
                    I am currently working on systems that helps small businesses streamline 
                    their processes by moving manual tasks into efficient digital solutions. 
                    </p>

                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;