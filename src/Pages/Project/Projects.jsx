import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';


const Projects = () => {
    const [projects, setProjects] = React.useState([]);

    React.useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className='bg-black py-20'>
                <h1 className='text-4xl text-gray-300 font-bold text-center mb-4'>My <span className='text-purple-700'>Projects</span></h1>
                <p className='text-gray-400 text-center mb-8'>A selection of my recent work</p>

                {/* projects card */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4'>
                    {/* Project cards will be rendered here */}
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className='bg-[#1a1a1a] p-6 rounded-2xl shadow-lg hover:shadow-purple-900/40 transition-all duration-300 cursor-pointer hover:-translate-y-2'
                        >
                            <div className='flex flex-col items-center'>
                                <img src={project.image} alt={project.title} className='w-full h-48 object-cover rounded-lg mb-4' />
                                <h2 className='text-xl font-bold text-white mb-2'>{project.title}</h2>
                                <p className='text-gray-400 text-center mb-4'>{project.description}</p>
                                <div className='flex flex-wrap justify-center gap-2'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className='inline-block bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm'
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='mt-4 flex justify-center items-baseline'>
                                    <Link to={'/'} className='rounded-lg bg-purple-800 text-gray-100 px-6 py-3 mr-6 font-semibold hover:bg-purple-950 transition-all duration-300 ease-in-out'>{project.demoLink}</Link>
                                     <Link to={'/'} className='rounded-lg border-2 border-purple-700 text-gray-100 px-6 py-3 mr-6 font-semibold hover:bg-purple-950 transition-all duration-300 ease-in-out'>{project.codeLink}</Link>
                                </div>
                            </div>
                            
                        </motion.div>
                        
                    ))}
                    
                </div>
                <Link to={'/projects'}>
                <button className='mt-8 mx-auto block rounded-lg bg-purple-800 text-gray-100 px-6 py-3 font-semibold hover:bg-purple-950 transition-all duration-300 ease-in-out '>View All Projects </button>
                </Link>

            </div>
        </motion.div>
    );
};

export default Projects;