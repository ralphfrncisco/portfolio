{/* --- CODE START (10 lines before change) --- */}
import React from 'react'
import { FolderCode } from 'lucide-react'

function Projects({darkMode}) {

    const projects = [
        { 
            name: "SmartLoan System", 
            description: "A web-based loan management system that digitizes loan inquiries, applications, and approvals, streamlining the loan process for cooperative officials and members.",
            path: "/src/assets/images/projects/loan-system.jpg",
            type: "Capstone Project",
            langs: ["PHP", "SQL"],
            link: "https://github.com/ralphfrncisco/SmartLoan"
        },
        { 
            name: "SysTrack SLA Monitoring", 
            description: "A specialized performance monitoring dashboard designed for manual entry and analysis of Service Level Agreement (SLA) metrics, calculating system uptime and reliability to ensure service compliance.",
            path: "/src/assets/images/projects/SLA-index.jpg",
            type: "Internship Project",
            langs: ["PHP", "SQL"],
            link: "#"
        },
        { 
            name: "The Philippines", 
            description: "A responsive web platform developed to master utility-first styling with Tailwind CSS and implement advanced CSS Grid and Flexbox layouts for seamless cross-device compatibility.",
            path: "/src/assets/images/projects/philippines.png",
            type: "Personal Project",
            langs: ["HTML", "Tailwind CSS"],
            link: "https://the-philippines.vercel.app/"
        },
    ];

    return (
        <section className="p-2">
            <div className={`flex items-center border rounded-lg p-4 transition-colors duration-300 ${
                darkMode 
                ? 'bg-[#111] border-[#222] text-white' 
                : 'bg-white border-gray-200 text-gray-800 shadow-sm'
            }`}>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mt-2">
                        <FolderCode className="w-5 h-5" />
                        <div className="w-full flex items-center gap-3 truncate">
                            <h1 className="text-lg md:text-xl font-bold truncate">Recent Projects</h1>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 space-y-4">
                        {projects.map((project, index) => (
                            <a href={project.link} target="_blank" key={index} className="block">
                                <div className={`flex flex-col md:flex-row items-center gap-4 p-4 rounded-md transition-colors duration-300 ${
                                        darkMode
                                        ? 'bg-black/40 border border-white/5 text-white' 
                                        : 'bg-gray-50 border border-gray-100 text-gray-900'
                                    }`}>

                                    <div>
                                        <img
                                            src={project.path} 
                                            alt={project.name} 
                                            className="h-30 w-60 rounded-sm object-cover flex-shrink-0" 
                                        />
                                    </div>

                                    <div className="flex-1 min-w-0 ml-1 md:ml-0">
                                        <div className="flex flex-col md:flex-row md:items-center justify-start md:justify-between gap-2">
                                            <div className="flex items-center gap-3">
                                                <h1 className="text-md md:text-lg font-bold truncate">{project.name}</h1>
                                            </div>

                                            {/* Removed md:w-full to let tags sit naturally, added flex-wrap for small screens */}
                                            <div className="flex flex-wrap items-center gap-1.5 text-[10px] md:text-xs font-mono">
                                                <div className={`px-2.5 py-0.5 rounded-full truncate 
                                                    ${darkMode ? 'text-white/80 bg-[#1E1E1E] border border-white/10' : 'text-gray-800 bg-gray-300/50 font-normal'}`}>
                                                    <p>{project.type}</p>
                                                </div>
                                                <div className={`px-2.5 py-0.5 rounded-full truncate 
                                                    ${darkMode ? 'text-white/80 bg-[#1E1E1E] border border-white/10' : 'text-gray-800 bg-gray-300/50 font-normal'}`}>
                                                    <p>{project.langs[0]}</p>
                                                </div>
                                                <div className={`px-2.5 py-0.5 rounded-full truncate 
                                                    ${darkMode ? 'text-white/80 bg-[#1E1E1E] border border-white/10' : 'text-gray-800 bg-gray-300/50 font-normal'}`}>
                                                    <p>{project.langs[1]}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <p className={`mt-4 text-xs md:text-sm font-light leading-relaxed ${
                                                darkMode ? 'text-white/80' : 'text-gray-800'
                                            }`}>
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;