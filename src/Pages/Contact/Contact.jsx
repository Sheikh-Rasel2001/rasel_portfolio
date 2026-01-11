import React from 'react';
import { motion } from 'framer-motion';
import { IoLocationSharp } from 'react-icons/io5';
import { IoIosMail } from 'react-icons/io';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
        >
            <div className='bg-black py-20'>
                <h1 className='text-4xl text-gray-300 font-bold text-center mb-4'>Get in <span className='text-purple-700'>Touch</span></h1>
                <p className='text-gray-400 text-center mb-8'>I'd love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto px-4'>
                    <div>
                        <form className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-lg font-semibold mb-2'>Your Name</label>
                                <input type="text" className='w-full bg-gray-600 mb-3 text-lg py-3 px-4 text-gray-100 outline-none rounded-xl'/>
                                <label htmlFor="email" className='block text-lg font-semibold mb-2'>Your Email</label>
                                <input type="email" className='w-full bg-gray-600 mb-3 text-lg py-3 px-4 text-gray-100 outline-none rounded-xl'/>
                                <label htmlFor="message" className='block text-lg font-semibold mb-2'>Your Message</label>
                                <textarea rows="4" className='w-full bg-gray-600 mb-3 text-lg py-3 px-4 text-gray-100 outline-none rounded-xl'></textarea>
                                <button className='w-full bg-purple-500 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-xl transition duration-300 cursor-pointer'>Send Message</button>
                            </div>
                        </form>
                    </div>
                    <div className='text-gray-400 flex flex-col justify-center'>
                        <h2 className='text-2xl font-bold mb-4'>Contact Information</h2>
                        <div className='space-y-8'>
                            <div className='flex items-start'>
                                <div>
                                    <IoLocationSharp className='text-3xl text-purple-500 mr-4 mt-1'/>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold mb-2'>Location</h3>
                                    <p>123 Main Street, Anytown, USA</p>
                                </div>

                            </div>
                            <div className='flex items-start'>
                                <div>
                                    <IoIosMail className='text-3xl text-purple-500 mr-4 mt-1'/>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold mb-2'>Email</h3>
                                    <p>contact@example.com</p>
                                </div>

                            </div>
                            <div className='flex items-start'>
                                <div>
                                    <FaPhone className='text-3xl text-purple-500 mr-4 mt-1'/>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold mb-2'>Phone</h3>
                                    <p>+1 (123) 456-7890</p>
                                </div>

                            </div>

                            <div>
                                <h1 className='text-xl font-bold mb-2'>Follow Me On</h1>
                                <div>
                                    {/* social media icons can be added here  */}
                                    <div className='flex space-x-4 mt-4'>
                                        <a href="#" className='text-purple-500 hover:text-purple-800'>
                                            <FaFacebook className='text-3xl'/>
                                        </a>
                                        <a href="#" className='text-purple-500 hover:text-purple-800'>
                                            <FaTwitter className='text-3xl'/>
                                        </a>
                                        <a href="#" className='text-purple-500 hover:text-purple-800'>
                                            <FaInstagram className='text-3xl'/>
                                        </a>
                                        <a href="#" className='text-purple-500 hover:text-purple-800'>
                                            <FaLinkedin className='text-3xl'/>
                                        </a>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default Contact;