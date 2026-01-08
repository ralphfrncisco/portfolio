import React, {useState} from 'react';
import { Laptop, X } from 'lucide-react';

function TechStack({darkMode}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div className={`flex items-center border rounded-lg p-4 pb-7 transition-colors duration-300 ${
            darkMode 
            ? 'bg-[#111] border-[#222] text-white' 
            : 'bg-white border-gray-200 text-gray-800 shadow-sm'
        }`}>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                    <div className = "flex items-center gap-2">
                        <Laptop className="w-4 h-4" />
                        <div className="w-full flex items-center gap-3 truncate">
                            <h1 className="text-lg md:text-xl font-bold truncate">Tech Stack</h1>
                        </div>
                    </div>

                    <div>
                        <a 
                        onClick={() => setIsModalOpen(true)}
                        className = "flex items-center text-xs font-medium gap-1 cursor-pointer">
                            View All
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5l7 7-7 7"></path></svg>
                        </a>
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
            </div>

        </div>

        {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60">
                <div className={`w-full max-w-2xl rounded-xl p-6 shadow-2xl transition-all ${
                    darkMode ? 'bg-[#151515] text-white border border-[#333]' : 'bg-white text-gray-900'
                }`}>
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-bold">Tech Stack</h2>
                        <button onClick={() => setIsModalOpen(false)} className="cursor-pointer hover:bg-gray-500/20 p-2 rounded-full">
                            <X size={20} />
                        </button>
                    </div>

                    <div className = "space-y-8">
                        <div>
                            <p className = "font-semibold mb-7">Languages</p>

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

                        <div>
                            <p className = "font-semibold mb-7">Developer Tools</p>

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
                    </div>

                </div>
            </div>
        )}
    </section>
  )
}

export default TechStack;