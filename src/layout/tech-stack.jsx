import React from 'react'

function TechStack({darkMode}) {
  return (
    <section className="p-2">
        <div className={`flex items-center border rounded-lg p-4 transition-colors duration-300 ${
            darkMode 
            ? 'bg-[#111] border-[#222] text-white' 
            : 'bg-white border-gray-200 text-gray-800 shadow-sm'
        }`}>
            <div className="flex-1 min-w-0">
            </div>

        </div>
    </section>
  )
}

export default TechStack;