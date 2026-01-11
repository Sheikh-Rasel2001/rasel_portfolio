import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className='bg-black py-20' >
                <h1 className='text-4xl text-gray-300 font-bold text-center mb-4'>Work <span className='text-purple-700'>Experience</span></h1>
                <p className='text-gray-400 text-center mb-8'>My professional journey so far</p>

                {/* experience content can be added here  */}
                    <div className='max-w-4xl mx-auto px-4'>   
                        <div className='bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-purple-900/40 transition-all duration-300 cursor-pointer hover:-translate-y-2 mb-6'>
                            <h2 className='text-2xl font-bold text-white mb-2'>Frontend Developer at Tech Solutions</h2>
                            <span className='text-purple-500'>Jan 2022 - Present</span>
                            <p className='text-gray-400 mt-4'>Developed and maintained code for client websites primarily using HTML, CSS, Sass, JavaScript, and React.</p>
                        </div>
                        <div className='bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-purple-900/40 transition-all duration-300 cursor-pointer hover:-translate-y-2 mb-6'>
                            <h2 className='text-2xl font-bold text-white mb-2'>Web Developer Intern at WebWorks</h2>
                            <span className='text-purple-500'>Jun 2021 - Dec 2021</span>
                            <p className='text-gray-400 mt-4'>Assisted in the development of web applications and collaborated with the design team to implement user-friendly interfaces.</p>
                        </div>
                    </div>
             </div>

        </motion.div>
    );
};

export default Experience;