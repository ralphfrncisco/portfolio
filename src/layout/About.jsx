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
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div className="w-full flex items-center gap-3 truncate">
                        <h1 className="text-lg md:text-xl font-bold truncate">About</h1>
                    </div>
                </div>
                <div className={`mt-4 space-y-4 text-xs md:text-sm font-light leading-relaxed ${
                    darkMode ? 'text-white/80' : 'text-gray-800 font-normal'
                }`}>
                    <p>
                    I’m a software developer with a strong focus on building responsive and 
                    user-friendly web applications. I work mainly with HTML, CSS, JavaScript, 
                    PHP, and MySQL, and I enjoy turning ideas into working systems that solve 
                    real problems.
                    </p>

                    <p>
                    I’ve built projects like web-based dashboards, loan management systems, and 
                    account management platforms that manage real-world workflows. These workflows 
                    include user registration, approvals, data processing, and reporting. <br></br>I focus on layout,
                    responsiveness, and usability while ensuring the code remains clean and practical.
                    </p>

                    <p>
                    I’ve worked on systems that help organizations and small businesses streamline 
                    their processes by moving manual tasks into efficient digital solutions. 
                    These projects helped me understand how software can directly support 
                    operations and decision-making.
                    </p>

                    <p>
                    Currently, I’m expanding my skills by learning modern tools like React 
                    and exploring how emerging technologies—such as automation and AI-assisted 
                    development—can improve productivity and enhance modern web applications.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About;