import React from 'react'

const ValueProps = () => {
    return (
        <div className="py-8 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-4 md:px-8 max-w-6xl mx-auto">
                
                <div className="group relative p-4 md:p-6 rounded-2xl bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/60 dark:to-gray-900/20 border border-gray-200/60 dark:border-gray-800/80 hover:border-gray-300 dark:hover:border-gray-700/80 transition-all duration-300 shadow-sm hover:shadow-md flex flex-row md:flex-col items-start md:items-center gap-4 cursor-default">

                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200/80 dark:border-gray-700/80 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11"/>
                            <path d="M14 9h4l4 4v4c0 .6-.4 1-1 1h-2"/>
                            <circle cx="7" cy="18" r="2"/>
                            <circle cx="17" cy="18" r="2"/>
                        </svg>
                    </div>
                    
                    <div className="flex-1 text-left md:text-center mt-1 md:mt-0">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                            Fast Global Shipping
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                            Complimentary express delivery on all worldwide orders over $150.
                        </p>
                    </div>
                </div>

                <div className="group relative p-4 md:p-6 rounded-2xl bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/60 dark:to-gray-900/20 border border-gray-200/60 dark:border-gray-800/80 hover:border-gray-300 dark:hover:border-gray-700/80 transition-all duration-300 shadow-sm hover:shadow-md flex flex-row md:flex-col items-start md:items-center gap-4 cursor-default">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200/80 dark:border-gray-700/80 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                        </svg>
                    </div>
                    <div className="flex-1 text-left md:text-center mt-1 md:mt-0">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                            Ethical Sourcing
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                            Crafted exclusively with 100% certified organic cotton fabrics.
                        </p>
                    </div>
                </div>

                <div className="group relative p-4 md:p-6 rounded-2xl bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/60 dark:to-gray-900/20 border border-gray-200/60 dark:border-gray-800/80 hover:border-gray-300 dark:hover:border-gray-700/80 transition-all duration-300 shadow-sm hover:shadow-md flex flex-row md:flex-col items-start md:items-center gap-4 cursor-default">
                    <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200/80 dark:border-gray-700/80 shadow-sm group-hover:scale-105 transition-transform duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 18v-6a9 9 0 0 1 18 0v6"/>
                            <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
                        </svg>
                    </div>
                    <div className="flex-1 text-left md:text-center mt-1 md:mt-0">
                        <h3 className="font-semibold text-base text-gray-900 dark:text-gray-100 tracking-tight mb-1">
                            Dedicated Support
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-xs md:text-sm leading-relaxed">
                            Our luxury concierges are available round-the-clock for assistance.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ValueProps