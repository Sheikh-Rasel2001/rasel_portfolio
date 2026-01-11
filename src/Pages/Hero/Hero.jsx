import React from 'react';
import Reveal from '../Reveal/Reveal';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import image from '../../assets/rasel.png'


const Hero = () => {
    return (
        <Reveal>
            {/* hero section  */}
            <div className='flex flex-col-reverse lg:flex-row items-center gap-10  min-h-screen pt-20 pb-16 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'>
                {/* description */}
                <div className='px-6 md:px-10 py-8 text-center lg:text-left lg:w-1/2'>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl text-gray-100 font-bold mb-4'>Hi, I am <span className='text-purple-700'>Sheikh Rasel</span></h1>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl text-gray-100 font-semibold mb-4 typeWriter'>Full Stuck Developer</h2>
                    <p className='text-gray-300 max-w-md lg:mx-0 md:text-lg text-lg mb-6'>I create stunning web experiences with modern technologies and innovative design.
                    </p>
                    {/* button */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                       <Link to={'/projects'} className='rounded-lg bg-purple-800 text-gray-100 px-6 py-3 mr-6 font-semibold hover:bg-purple-950 text-white transition-all duration-300 ease-in-out'>View Work</Link>
                        <Link to={'/contact'} className='rounded-lg border-2 border-purple-700 text-gray-100 px-6 py-3 mr-6 font-semibold hover:bg-purple-950 transition-all duration-300 ease-in-out'>Contact Me</Link>
                    </div>
                </div>
                {/* image */}
                <div className='lg:w-1/2 flex justify-center'>
                <div className='relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80'>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 rounded-full opacity-70 animate-pulse-slow'>
                        <motion.img 
                        animate={{y:[0, -20, 0]}}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }}
                        className='relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 animate-float'
                        src={image} alt="Profile Image" />
                    </div>
                   
                </div>
                   
                </div>

            </div>
        </Reveal>
    );
};

export default Hero;