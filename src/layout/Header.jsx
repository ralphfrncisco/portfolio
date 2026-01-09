import React from 'react'
import { Github, Linkedin, MapPin, Moon, Mail, Sun, Phone } from 'lucide-react'

function Header({ darkMode, setDarkMode }) {

    const handleEmailClick = (e) => {
    e.preventDefault();
        const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=ralphfrncisco@gmail.com&su=Project Inquiry&body=Hi Ralph,";

        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };
  return (

    <section className="p-2">

        <div className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 border rounded-lg transition-colors duration-300 mt-4 mb-0 md:mb-4 ${
        darkMode 
          ? 'border-none text-white' 
          : 'border-none text-gray-900'
      }`}>
            
            <img src = "/src/assets/images/ralph.png" alt="Logo" className="h-40 w-40 rounded-lg object-cover flex-shrink-0" />

            <div className="flex-1 min-w-0 ml-1 md:ml-0">
                <div className="flex items-center justify-between gap-5">
                    
                    <div className="w-full flex items-center gap-3">
                        <h1 className="text-lg md:text-2xl font-bold truncate">Ralph Angelo Francisco</h1>
                        
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <a href = "/src/assets/files/resume.pdf" target="_blank" id = "download-cv" 
                        className={`hidden md:inline-flex h-7 md:h-8 items-center rounded-lg px-2.5 md:px-4 
                        text-[10px] md:text-xs font-medium whitespace-nowrap 
                        transition-all hover:translate-y-[-1px] shadow-xs ${
                            darkMode ? 'shadow-gray-500/10 bg-white text-black' : 'shadow-black/20 bg-black text-white'
                        }`}>
                            <span id = "dl-text"> Download CV</span>
                        </a>

                        <button
                            onClick={() => setDarkMode(!darkMode)} 
                            className={`p-2 rounded-lg transition-all duration-100 cursor-pointer border ${
                                darkMode 
                                    ? 'border-transparent hover:border-white/20 text-white'
                                    : 'border-transparent hover:border-black/10 hover:bg-black/5 text-gray-900'
                            }`}
                        >
                            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>

                </div>

                <div className="flex items-center justify-between md:mt-1">
                    <p className="text-xs md:text-[11px] md:text-base font-normal md:font-medium">
                        Software Developer / Front-End Developer
                    </p>
                </div>
                
                <p className="text-xs md:text-sm mt-2 flex items-center gap-1">
                    <MapPin size={15} /><span className="truncate font-normal">Valenzuela City, Philippines</span>
                </p>
  
                <div className="flex flex-wrap items-center gap-2 mt-3 md:mt-4">
                    <a href="https://github.com/ralphfrncisco" 
                        target="_blank" 
                        className={`inline-flex h-7 md:h-8 items-center rounded-lg bg-black px-2.5 md:px-4 
                        text-[10px] md:text-xs font-medium gap-1 md:gap-1.5 whitespace-nowrap 
                        transition-all hover:translate-y-[-1px] shadow-xs ${
                            darkMode ? 'shadow-gray-500/70 bg-black/5 text-white' : 'shadow-black/20 bg-black text-white'
                        }`}>
                            <Github size={18} /><span>GitHub</span>
                    </a>

                    <a href="https://www.linkedin.com/in/ralphfrancisco/" 
                        target="_blank"  
                        className="inline-flex h-7 md:h-8 items-center rounded-lg bg-blue-600 px-2.5 md:px-4 text-[10px] md:text-xs font-medium gap-1 md:gap-1.5 whitespace-nowrap shadow-sm text-white hover:translate-y-[-1px] transition-transform">
                            <i className="fa-brands fa-linkedin relative top-[0.3px] text-[13pt]"></i><span className="relative top-[0.5px]">LinkedIn</span>
                    </a>

                    <button 
                        onClick={handleEmailClick} 
                        className={`inline-flex h-7 md:h-8 items-center rounded-lg border border-gray-500/20 px-2.5 md:px-4 text-[10px] md:text-xs font-medium gap-1 md:gap-1.5 whitespace-nowrap shadow-sm hover:translate-y-[-1px] transition-all cursor-pointer ${
                        darkMode ? 'text-white' : 'text-black'
                        }`}
                    >
                        <Mail size={14} />
                        <span className="relative top-[0.5px]">Send Email</span>
                    </button>
                    
                    {/* <div className={`flex items-center gap-2 py-1 pl-1 md:pl-0 ${darkMode ? 'text-white/90' : 'text-gray-600'}`}>
                        <Phone size={14} className="shrink-0" /> 
                        <span className="font-light text-[10px] md:text-xs whitespace-nowrap">
                          (+63) 9611091804
                        </span>
                    </div> */}
                </div>

                {/* <div className = "w-full flex items-center justify-center md:hidden mt-4">
                    <a href = "/src/assets/files/resume.pdf" target="_blank" id = "download-cv" 
                        className={`inline-flex h-7 md:h-8 items-center rounded-lg px-2.5 md:px-4 
                        text-[10px] md:text-xs font-medium whitespace-nowrap 
                        transition-all hover:translate-y-[-1px] shadow-xs ${
                            darkMode ? 'shadow-gray-500/10 bg-white text-black' : 'shadow-black/20 bg-black text-white'
                        }`}>
                        <span id = "dl-text"> Download CV</span>
                    </a>
                </div> */}
            </div>
        </div>
    </section>
  )
}

export default Header;