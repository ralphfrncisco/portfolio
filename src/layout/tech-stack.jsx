{/* --- CODE START (10 lines before change) --- */}
import React, {useState} from 'react';
import { Laptop, X } from 'lucide-react';

import pythonLogo from '../assets/images/languages/python.png';
import javaLogo from '../assets/images/languages/java.png';
import mysqlLogo from '../assets/images/languages/mysql1.png';
import cSharpLogo from '../assets/images/languages/csharp.png';
import cPlusPlusLogo from '../assets/images/languages/C++.png';
import bootstrapLogo from '../assets/images/languages/bootstrap.png';
import phpLogo from '../assets/images/languages/php.png';
import tailwindLogo from '../assets/images/languages/tailwind.png';
import reactLogo from '../assets/images/languages/React-icon.png';
import xamppLogo from '../assets/images/tools/xamp.png';
import photoshopLogo from '../assets/images/tools/photoshop.png';
import geminiLogo from '../assets/images/tools/gemini.png';
import copilotLogo from '../assets/images/tools/copilot.png';

function TechStack({darkMode}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const ImageLanguages = [
        { name: "Python", path: pythonLogo, size: "h-4 w-4", category: "Systems" },
        { name: "Java", path: javaLogo, size: "h-5 w-5", category: "Systems" },
        { name: "SQL", path: mysqlLogo, size: "h-5 w-5", category: "Web" },
        { name: "C#", path: cSharpLogo, size: "h-4 w-4", category: "Systems" },
        { name: "C++", path: cPlusPlusLogo, size: "h-4 w-4", category: "Systems" },
        { name: "BootStrap", path: bootstrapLogo, size: "h-4 w-5", category: "Web" },
        { name: "PHP", path: phpLogo, size: "h-4 w-7", category: "Web" },
        { name: "Tailwind CSS", path: tailwindLogo, size: "h-4 w-6", category: "Web" },
        { name: "React", path: reactLogo, size: "h-5 w-6", category: "Web" },
    ];

    const IconLanguages = [
        { name: "HTML", icon: "fa-brands fa-html5", color: "text-orange-500", category: "Web" },
        { name: "CSS", icon: "fa-brands fa-css3", color: "text-blue-500", category: "Web" },
        { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-500", category: "Web" },
    ];

    const ImageTools = [
        { name: "Visual Studio Code", path: "https://img.icons8.com/color/50/visual-studio-code-2019.png", size: "h-5 w-5", category: "DevTools" },
        { name: "XAMPP", path: xamppLogo , size: "h-5 w-5", category: "DevTools" },
        { name: "Photoshop", path: photoshopLogo, size: "h-5 w-5", category: "Design" },
        { name: "Open AI", path: `https://img.icons8.com/?size=100&id=fO5yVwARGUEB&format=png&color=${darkMode ? 'FFFFFF' : '000000'}`, size: "h-5 w-5", category: "AI" },
        { name: "Gemini", path: geminiLogo, size: "h-5 w-5", category: "AI" },
        { name: "Copilot", path: copilotLogo, size: "h-5 w-5", category: "AI" },
    ];

    const IconTools = [
        { name: "Git", icon: "fa-brands fa-git-alt", color: "text-orange-500", category: "DevTools" },
        { name: "GitHub", icon: "fa-brands fa-github", color: darkMode ? "text-white" : "text-gray-500", category: "DevTools" },
        { name: "Dev Tools", icon: "fa-brands fa-chrome", color: "text-blue-400", category: "DevTools" },
        { name: "Discord", icon: "fa-brands fa-discord", color: "text-blue-500", category: "DevTools" },
        { name: "Figma", icon: "fa-brands fa-figma", color: "text-red-500", category: "Design" },
    ];

  return (
    <section className="p-2">
        <div className={`flex items-center border rounded-lg p-4 md:pb-10 transition-colors duration-300 ${
            darkMode ? 'bg-[#111] border-[#222] text-white' : 'bg-white border-gray-200 text-gray-800 shadow-sm'
        }`}>
            <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                    <div className = "flex items-center gap-2">
                        <Laptop className="w-5 h-5" />
                        <div className="w-full flex items-center gap-3 truncate">
                            <h1 className="text-lg md:text-xl font-bold truncate">Tech Stack</h1>
                        </div>
                    </div>
                    <div>
                        <a onClick={() => setIsModalOpen(true)} className = "flex items-center text-xs font-medium gap-1 cursor-pointer">
                            View All
                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7"></path></svg>
                        </a>
                    </div>
                </div>

                <div className={`mt-6 md:mt-10 text-xs md:text-sm font-light leading-relaxed ${
                    darkMode ? 'text-white/90' : 'text-gray-800 font-normal'
                }`}>
                    <div className="flex flex-wrap gap-2">
                        {ImageLanguages.map((lang, index) => (
                        <div key={`img-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                            darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-600'
                        }`}>
                            <img src={lang.path} alt={lang.name} className={`${lang.size} rounded-lg object-fit flex-shrink-0`}/> 
                            {lang.name}
                        </div>
                        ))}

                        {IconLanguages.map((lang, index) => (
                            <div key={`icon-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                darkMode ? 'bg-black/30 border border-white/20' : 'bg-gray-100 border border-gray-200'
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
                        darkMode ? 'bg-[#121212] text-white border border-[#333]' : 'bg-white text-gray-900'
                    }`}>
                        <div className="flex items-center justify-between mb-8">
                            <div className = "flex items-center gap-2">
                                <Laptop className="w-4 h-4" />
                                <h2 className="text-xl font-bold">Tech Stack</h2>
                            </div>
                            <button onClick={() => setIsModalOpen(false)} className="cursor-pointer hover:bg-gray-500/20 p-2 rounded-full">
                                <X size={20} />
                            </button>
                        </div>

                        <div className = "space-y-8 overflow-y-auto max-h-[70vh] pr-2">

                            <div>
                                <p className = "text-lg font-bold mb-5">Software & Systems</p>
                                <div className="flex flex-wrap gap-2">
                                    {ImageLanguages.filter(l => l.category === "Systems").map((lang, index) => (
                                    <div key={`sys-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                        darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                    }`}>
                                        <img src={lang.path} alt={lang.name} className={`${lang.size} rounded-lg object-fit flex-shrink-0`}/> 
                                        {lang.name}
                                    </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <p className = "text-lg font-bold mb-5">Web Development</p>
                                <div className="flex flex-wrap gap-2">
                                    {IconLanguages.map((lang, index) => (
                                        <div key={`web-icon-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                            darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                        }`}>
                                            <i className={`${lang.icon} ${lang.color} text-lg`}></i>
                                            {lang.name}
                                        </div>
                                    ))}

                                    {ImageLanguages.filter(l => l.category === "Web").map((lang, index) => (
                                    <div key={`web-img-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                        darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                    }`}>
                                        <img src={lang.path} alt={lang.name} className={`${lang.size} rounded-lg object-fit flex-shrink-0`}/> 
                                        {lang.name}
                                    </div>
                                    ))}
                                </div>
                            </div>


                            <div>
                                <p className = "text-lg font-bold mb-5">AI Tools</p>
                                <div className="flex flex-wrap gap-2">
                                    {ImageTools.filter(t => t.category === "AI").map((tool, index) => (
                                    <div key={`ai-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                        darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                    }`}>
                                        <img src={tool.path} alt={tool.name} className={`${tool.size} rounded-lg object-fit flex-shrink-0`}/> 
                                        {tool.name}
                                    </div>
                                    ))}
                                </div>
                            </div>


                            <div>
                                <p className = "text-lg font-bold mb-5">Design</p>
                                <div className="flex flex-wrap gap-2">
                                    {ImageTools.filter(t => t.category === "Design").map((tool, index) => (
                                    <div key={`dsgn-img-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                        darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                    }`}>
                                        <img src={tool.path} alt={tool.name} className={`${tool.size} rounded-lg object-fit flex-shrink-0`}/> 
                                        {tool.name}
                                    </div>
                                    ))}
                                    {IconTools.filter(t => t.category === "Design").map((tool, index) => (
                                    <div key={`dsgn-icon-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                        darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                    }`}>
                                        <i className={`${tool.icon} ${tool.color} text-lg`}></i>
                                        {tool.name}
                                    </div>
                                    ))}
                                </div>
                            </div>


                            <div>
                                <p className = "text-lg font-bold mb-5">Developer Tools</p>
                                <div className="flex flex-wrap gap-2">
                                    {ImageTools.filter(t => t.category === "DevTools").map((tools, index) => (
                                    <div key={`tool-img-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                        darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                    }`}>
                                        <img src={tools.path} alt={tools.name} className={`${tools.size} rounded-lg object-fit flex-shrink-0`}/> 
                                        {tools.name}
                                    </div>
                                    ))}
                                    {IconTools.filter(t => t.category === "DevTools").map((tools, index) => (
                                    <div key={`tool-icon-${index}`} className={`inline-flex items-center px-2 py-1.5 rounded-md text-xs gap-2 ${
                                        darkMode ? 'bg-black/20 border border-white/20 text-white' : 'bg-gray-100 border border-gray-200 text-gray-900'
                                    }`}>
                                        <i className={`${tools.icon} ${tools.color} text-lg`}></i>
                                        {tools.name}
                                    </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default TechStack;
