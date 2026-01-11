import React from 'react';
import Reveal from '../Reveal/Reveal'
import { motion } from 'framer-motion';
import image from '../../assets/rasel.png'
import { FaCode, FaLightbulb, FaPaintBrush } from 'react-icons/fa';

const About = () => {
    return (
        <Reveal>
            <div className='bg-black py-20'>
                <h1 className='text-3xl text-center text-gray-400 mb-4 font-bold'>About <span className='text-purple-700'>Me</span></h1>
                <p className='text-gray-400 font-semibold text-center mb-10'>Get to know more about my background and passion
                </p>
                {/* image + description */}
                <div className='flex flex-col lg:flex-row items-center gap-12 p-4'>
                    {/* profile image */}
                    <div className='lg:w-1/2 rounded-2xl overflow-hidden'>

                        <motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: false, amount: 0.2 }}
                            src={image} alt="About Profile"
                            className='w-full h-full object-cover rounded-2xl'
                        />
                    </div>
                    {/* text-content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='lg:w-1/2'
                    >
                        <h1 className='text-3xl font-bold text-gray-300 mb-4'>My Journey</h1>
                        <p className='text-lg font-semibold text-gray-200 mb-4'>I'm a passionate full-stack developer with over 5 years of experience creating digital solutions for businesses around the world. My journey started with basic HTML/CSS websites and has evolved into building complex web applications with modern frameworks.
                        </p>

                        <p className='text-lg font-semibold text-gray-200 mb-4'>
                            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through tech blogs and tutorials. I believe in continuous learning and pushing the boundaries of what's possible on the web.
                        </p>
                        {/* cards */}
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-6'>
                            {/* 1 */}
                            <div className='bg-gray-800 p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                <h2 className='text-3xl text-purple-500 font-bold mb-2'><FaLightbulb /></h2>
                                <h3 className='text-xl font-bold text-gray-300 mb-2'>Innovative
                                </h3>
                                <p className='text-gray-300'>I love creating unique solutions to complex problems with cutting-edge technologies.
                                </p>
                            </div>
                            {/* 2 */}
                            <div className='bg-gray-800 p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                <h2 className='text-3xl text-purple-500 font-bold mb-2'><FaPaintBrush /></h2>
                                <h3 className='text-xl font-bold text-gray-300 mb-2'>Design Oriented
                                </h3>
                                <p className='text-gray-300'>Beautiful design and user experience are at the heart of everything I create.
                                </p>
                            </div>
                            {/* 3 */}
                             <div className='bg-gray-800 p-4 rounded-lg transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                <h2 className='text-3xl text-purple-500 font-bold mb-2'><FaCode /></h2>
                                <h3 className='text-xl font-bold text-gray-300 mb-2'>Clean Code
                                </h3>
                                <p className='text-gray-300'>I write maintainable, efficient code following best practices and modern patterns.
                                </p>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>
        </Reveal>
    );
};

export default About;