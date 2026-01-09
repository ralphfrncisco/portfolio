import React from 'react';
import { BadgeCheck } from 'lucide-react';

function Certifications({darkMode}) {
    const certs = [
    {
        title: "Introduction to the Threat Landscape 2.0",
        issuer: "Fortinet",
        date: "Dec 10, 2023",
        image: "/assets/images/threat-landscape.png"
    },
    {
        title: "Getting Started in Cybersecurity 2.0",
        issuer: "Fortinet",
        date: "Dec 10, 2023",
        image: "/assets/images/cybersecurity.png"
    }
    ];

  return (
    <section className="p-2">
        <div className={`flex items-center border rounded-lg p-4 transition-colors duration-300 ${
            darkMode 
            ? 'bg-[#111] border-[#222] text-white' 
            : 'bg-white border-gray-200 text-gray-800 shadow-sm'
        }`}>
            <div className="flex-1 min-w-0">
             <div className="flex items-center justify-between gap-2">
                    <BadgeCheck className="w-5 h-5" />
                    <div className="w-full flex items-center gap-3 truncate">
                        <h1 className="text-lg md:text-xl font-bold truncate">Certifications</h1>
                    </div>
                </div>
                <div className={`flex flex-col mt-4 space-y-2 text-xs md:text-sm font-light leading-relaxed ${
                    darkMode ? 'text-white/80' : 'text-gray-800 font-normal'
                }`}>
                    {certs.map((cert, index) => (
                        <div key={index} className={`flex items-center gap-4 p-2 rounded-md transition-colors duration-300 ${
                            darkMode 
                            ? 'bg-black/40 border border-white/5 text-white' 
                            : 'bg-gray-50 border border-gray-100 text-gray-900'
                        }`}>
                            <img 
                                src={cert.image} 
                                alt={cert.title}
                                className='w-15 h-15 rounded-sm rounded-br-2xl object-cover shadow-sm'
                            />
                            <div>
                                <span className={`font-semibold block ${darkMode ? 'text-gray-200' : 'text-gray-800'}`}>{cert.title}</span>
                                <span className={`text-[11px] ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {cert.issuer} · {cert.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    </section>
  )
}

export default Certifications