import React from 'react'
import { FolderCode } from 'lucide-react'

function Projects({darkMode}) {
  return (
        <section className="p-2">

        <div className={`flex items-center border rounded-lg p-4 transition-colors duration-300 ${
            darkMode 
            ? 'bg-[#111] border-[#222] text-white' 
            : 'bg-white border-gray-200 text-gray-800 shadow-sm'
        }`}>
            <div className="flex-1 min-w-0 p-4">

                <div className="flex items-center justify-between gap-2 ">
                    <FolderCode className="w-5 h-5" />
                    <div className="w-full flex items-center gap-3 truncate">
                        <h1 className="text-lg md:text-xl font-bold truncate">Recent Projects</h1>
                    </div>
                </div>

                <div className = "flex flex-row mt-4 space-x-4">
                    <div className = "border border-gray-200 dark:border-gray-700 p-4"></div>
                    <div className = "border border-gray-200 dark:border-gray-700 p-4"></div>
                    <div className = "border border-gray-200 dark:border-gray-700 p-4"></div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects;