import React from 'react';
import { BadgeCheck } from 'lucide-react';
import threatLandscapeImage from '../assets/images/threat-landscape.png';
import cybersecurityImage from '../assets/images/cybersecurity.png';

function Certifications() {
    const certs = [
        {
            title: "Introduction to the Threat Landscape 2.0",
            issuer: "Fortinet",
            date: "Dec 10, 2023",
            image: threatLandscapeImage
        },
        {
            title: "Getting Started in Cybersecurity 2.0",
            issuer: "Fortinet",
            date: "Dec 10, 2023",
            image: cybersecurityImage
        }
    ];

    return (
        <section className="p-2">
            <div className="flex items-center border rounded-lg p-4 transition-colors duration-300
                bg-white border-gray-200 text-gray-800 shadow-sm
                dark:bg-[#111] dark:border-[#222] dark:text-white">
                <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                        <BadgeCheck className="w-5 h-5" />
                        <div className="w-full flex items-center gap-3 truncate">
                            <h1 className="text-lg md:text-xl font-bold truncate">Certifications</h1>
                        </div>
                    </div>

                    <div className="flex flex-col mt-4 space-y-2 text-xs md:text-sm font-light leading-relaxed
                        text-gray-800 font-normal dark:text-white/80 dark:font-light">
                        {certs.map((cert, index) => (
                            <div key={index} className="flex items-center gap-4 p-2 rounded-md transition-colors duration-300
                                bg-gray-50 border border-gray-100 text-gray-900
                                dark:bg-black/40 dark:border dark:border-white/5 dark:text-white">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-15 h-15 rounded-sm rounded-br-2xl object-cover shadow-sm"
                                />
                                <div>
                                    <span className="font-semibold block text-gray-800 dark:text-gray-200">
                                        {cert.title}
                                    </span>
                                    <span className="text-[11px] text-gray-500 dark:text-gray-400">
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

export default Certifications;