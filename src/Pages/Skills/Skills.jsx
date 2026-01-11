import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaCode, FaDatabase, FaMobileAlt, FaServer, FaTools } from 'react-icons/fa';

const iconMap = {
    FaCode: FaCode,
    FaServer: FaServer,
    FaDatabase: FaDatabase,
    FaCloud: FaCloud,
    FaTools: FaTools,
    FaMobileAlt: FaMobileAlt,

}



const Skills = () => {
    
    
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        fetch('/skills.json')
            .then(res => res.json())
            .then(data => setSkills(data))
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className='bg-black py-20'>
                <h1 className='text-4xl text-gray-300 font-bold text-center mb-4'>My <span className='text-purple-700'>Skills</span></h1>
                <p className='text-gray-400 text-center mb-8'>Technologies I work with to bring ideas to life</p>

                {/* skills card */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
                    {skills.map((skill, index) => {
                        const Icon = iconMap[skill.icon]
                        return (
                            <motion.div
                                key={skill.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className='bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-purple-900/40 transition-all duration-300 cursor-pointer hover:-translate-y-2'
                            >
                                <div className='flex gap-4 items-center'>
                                    <span className='text-4xl text-purple-800'>{Icon && <Icon />}</span>
                                    <h1 className='text-xl font-bold  text-white'>{skill.title}</h1>

                                </div>
                                <p className='text-gray-400 mt-2'>{skill.description}</p>
                            <div>
                                {skill.tags.map((tag, idx) => (
                                    <span
                                        key={idx}
                                        className='inline-block bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm mr-2 mt-2'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            </motion.div>
                        )
                    })}

                </div>


            </div>
        </motion.div>

    );
};

export default Skills;