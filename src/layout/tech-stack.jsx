import React from 'react';
import { Laptop } from 'lucide-react';

function TechStack({darkMode}) {
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
                    darkMode ? 'text-white/80' : 'text-gray-800 font-normal'
                }`}>


                </div>
            </div>

        </div>
    </section>
  )
}

export default TechStack;