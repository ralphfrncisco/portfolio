import React from 'react';
import { Laptop } from 'lucide-react';

function TechStack({darkMode}) {
    const ImageLanguages = [
    { name: "Python", path: "/src/assets/images/languages/python.png", size: "h-4 w-4" },
    { name: "Java", path: "/src/assets/images/languages/java.png", size: "h-5 w-5" },
    { name: "SQL", path: "/src/assets/images/languages/mysql1.png", size: "h-5 w-5" },
    { name: "C#", path: "/src/assets/images/languages/csharp.png", size: "h-4 w-4" },
    { name: "C++", path: "/src/assets/images/languages/C++.png", size: "h-4 w-4" },
    { name: "BootStrap", path: "/src/assets/images/languages/bootstrap.png", size: "h-4 w-4" },
    { name: "PHP", path: "/src/assets/images/languages/php.png", size: "h-4 w-7" },
    { name: "Tailwind CSS", path: "/src/assets/images/languages/tailwind.png", size: "h-4 w-6" },
    { name: "React", path: "/src/assets/images/languages/React-icon.png", size: "h-5 w-6" },
    ];

    const IconLanguages = [
    { name: "HTML", icon: "fa-brands fa-html5", color: "text-orange-500" },
    { name: "CSS", icon: "fa-brands fa-css3", color: "text-blue-500" },
    { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-500" },
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
                    <Laptop className="w-4 h-4" />
                    <div className="w-full flex items-center gap-3 truncate">
                        <h1 className="text-lg md:text-xl font-bold truncate">Tech Stack</h1>
                    </div>
                </div>
                <div className={`mt-4 space-y-4 text-xs md:text-sm font-light leading-relaxed ${
                    darkMode ? 'text-white/90' : 'text-gray-800 font-normal'
                }`}>

                    <p className = "font-semibold">Languages</p>

                    <div className="flex flex-wrap gap-2">
                        {ImageLanguages.map((lang, index) => (
                        <div key={`img-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                            darkMode ? 'bg-black/30 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-600'
                        }`}>
                            <img src={lang.path} alt={lang.name} className={`${lang.size} rounded-lg object-fit flex-shrink-0`}/> 
                            {lang.name}
                        </div>
                        ))}

                        {IconLanguages.map((lang, index) => (
                        <div key={`icon-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                            darkMode ? 'bg-black/30 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-600'
                        }`}>
                            <i className={`${lang.icon} ${lang.color} text-lg`}></i>
                            {lang.name}
                        </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-4 space-y-4 text-xs md:text-sm font-light leading-relaxed ${
                    darkMode ? 'text-white/90' : 'text-gray-800 font-normal'
                }`}>

                    <p className = "font-semibold">Tools</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default TechStack;