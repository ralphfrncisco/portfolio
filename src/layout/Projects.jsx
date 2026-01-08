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
            langs: ["PHP", "SQL"]
        },
         { 
            name: "SysTrack SLA Monitoring", 
            description: "A specialized performance monitoring dashboard designed for manual entry and analysis of Service Level Agreement (SLA) metrics, calculating system uptime and reliability to ensure service compliance.",
            path: "/src/assets/images/projects/SLA-index.jpg",
            type: "Internship Project",
            langs: ["PHP", "SQL"]
        },
        { 
            name: "The Philippines", 
            description: "A responsive web platform developed to master utility-first styling with Tailwind CSS and implement advanced CSS Grid and Flexbox layouts for seamless cross-device compatibility.",
            path: "/src/assets/images/projects/philippines.png",
            type: "Personal Project",
            langs: ["HTML", "Tailwind CSS"]
        },
    ];

    return (
        <section className="p-2">
            <div className={`flex items-center border rounded-lg p-4 transition-colors duration-300 ${
                darkMode 
                ? 'bg-[#111] border-[#222] text-white' 
                : 'bg-white border-gray-200 text-gray-800 shadow-sm'
            }`}>
                <div className="flex-1 min-w-0 p-4">
                    <div className="flex items-center justify-between gap-2">
                        <FolderCode className="w-5 h-5" />
                        <div className="w-full flex items-center gap-3 truncate">
                            <h1 className="text-lg md:text-xl font-bold truncate">Recent Projects</h1>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 space-y-4">
                        {projects.map((project, index) => (
                            <div key={index} className={`flex items-center gap-4 p-4 rounded-md transition-colors duration-300 ${
                                darkMode 
                                ? 'bg-black/40 border border-white/20 text-white' 
                                : 'bg-gray-50 border border-gray-100 text-gray-900'
                            }`}>
                                <img 
                                    src={project.path} 
                                    alt={project.name} 
                                    className="h-30 w-60 rounded-sm object-cover flex-shrink-0" 
                                />
                                <div className="flex-1 min-w-0 ml-1 md:ml-0">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="w-full flex items-center gap-3 truncate">
                                            <h1 className="text-md md:text-lg font-bold truncate">{project.name}</h1>
                                        </div>

                                        <div className = "flex flex-row items-center gap-1 text-xs font-mono">
                                            <div className = "px-3 py-1 bg-[#1E1E1E] rounded-full truncate">
                                                <p>{project.type}</p>
                                            </div>
                                            <div className = "px-3 py-1 bg-[#1E1E1E] rounded-full truncate">
                                                <p>{project.langs[0]}</p>
                                            </div>
                                            <div className = "px-3 py-1 bg-[#1E1E1E] rounded-full truncate">
                                                <p>{project.langs[1]}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <p className={`mt-2 text-xs md:text-sm font-light leading-relaxed ${
                                        darkMode ? 'text-white/80' : 'text-gray-800 font-normal'
                                    }`}>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;