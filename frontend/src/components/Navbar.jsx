import React from 'react'
import { assets } from "../assets/assets.js"
import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
        }
    };

    return (
        <div className='flex items-center justify-between py-5 font-medium transition-colors duration-300'>
            <Link to='/'><img src={assets.logo} className='w-36 dark:invert transition-all' alt='logo' /></Link>

            <ul className='hidden sm:flex gap-5 text-sm'>
                <NavLink to='/' className='flex flex-col items-center gap-1'>
                    <p className='text-gray-700 dark:text-gray-300 transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110'>
                        HOME
                    </p>
                    <hr className='w-2/4 border-none h-[1.4px] bg-gray-700 dark:bg-gray-300 hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p className='text-gray-700 dark:text-gray-300 transition-all duration-300 ease-out hover:text-black dark:hover:text-white hover:-translate-y-1 hover:scale-110'>
                        CONTACT
                    </p>
                    <hr className='w-2/4 border-none h-[1.4px] bg-gray-700 dark:bg-gray-300 hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-5'>
                <button
                    onClick={toggleTheme}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 transition-all duration-300"
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                <img src={assets.search_icon} className='w-5 cursor-pointer dark:invert' alt='searchIcon' />

                <div className='group relative'>
                    <img src={assets.profile_icon} className='w-5 cursor-pointer dark:invert' alt='ProfileIcon' />
                    <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
                        <div className='flex flex-col gap-2 w-36 px-5 py-3 bg-slate-50 dark:bg-gray-800 text-gray-500 dark:text-gray-300 rounded shadow-lg border border-gray-200 dark:border-gray-700'>
                            <p className='cursor-pointer hover:text-black dark:hover:text-white'>My Profile</p>
                            <p className='cursor-pointer hover:text-black dark:hover:text-white'>Orders</p>
                            <p className='cursor-pointer hover:text-black dark:hover:text-white'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className="relative">
                    <img src={assets.cart_icon} className='w-5 min-w-5 dark:invert' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black dark:bg-white text-white dark:text-black aspect-square rounded-full text-[8px]'>0</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden dark:invert' alt="" />
            </div>

            <div className={`absolute top-0 right-0 bottom-0 z-50 overflow-hidden bg-white dark:bg-gray-950 transition-all duration-300 ${visible ? 'w-full' : 'w-0'} `} >
                <div className='flex flex-col text-gray-600 dark:text-gray-300'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer border-b border-gray-200 dark:border-gray-800'>
                        <img src={assets.dropdown_icon} alt="" className='h-4 rotate-180 dark:invert' />
                        <p>Back</p>
                    </div>

                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-4 pl-6 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>
    )
}

export default Navbar