import React, { useRef } from 'react';
import { assets } from '../assets/assets';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
const Hero = () => {
    const container = useRef();
    useGSAP(() => {
        gsap.from('.hero-text', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.2 
        });


        gsap.from('.hero-image', {
            scale: 1.05,
            opacity: 0,
            duration: 1.5,
            ease: 'power2.out',
            delay: 0.5
        });
    }, { scope: container });
    return (

        <div ref={container} className='flex flex-col sm:flex-row border border-gray-400'>

            <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-6 sm:px-0'>
                <div className='text-[#414141] max-w-md'>

                    <div className='hero-text flex items-center gap-2'>
                        <p className='w-8 md:w-11 h-[1px] bg-[#414141] dark:bg-gray-300'></p>
                        <p className='font-medium text-sm md:text-base uppercase dark:text-gray-300'>Our Bestseller</p>
                    </div>
                    
                    <h1 className='hero-text prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed dark:text-gray-100'>
                        Latest Arrivals
                    </h1>

                    <p className='hero-text text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 leading-relaxed'>
                        Premium fabrics. Timeless designs. Elevate your everyday wardrobe with our meticulously crafted cotton classics.
                    </p>
                    
                    <div className='hero-text flex flex-wrap items-center gap-6'>
                        <button className='flex items-center gap-2 group cursor-pointer'>
                            <p className='font-semibold text-sm md:text-base group-hover:text-black dark:text-gray-200 transition-colors'>
                                SHOP NOW
                            </p>
                            <p className='w-8 md:w-11 h-[1px] bg-[#414141] dark:bg-gray-200 group-hover:bg-black transition-colors'></p>
                        </button>
                        <button className='px-6 py-2 border border-[#414141] dark:border-gray-300 text-[#414141] dark:text-gray-300 text-sm font-medium hover:bg-[#414141] dark:hover:bg-gray-200 hover:text-white dark:hover:text-gray-900 transition-all duration-300'>
                            EXPLORE LOOKBOOK
                        </button>
                    </div>
                </div>
            </div>
            <img className='hero-image w-full sm:w-1/2 object-cover' src={assets.hero_img} alt='Model' />
        </div>
    );
};

export default Hero;