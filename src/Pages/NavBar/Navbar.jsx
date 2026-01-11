import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { RxCross2 } from 'react-icons/rx';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="sticky top-0 left-0 right-0 z-50 bg-gray-900">

            <div className='flex justify-between items-center max-w-7xl mx-auto px-8 py-4'>
                {/* logo */}
                <div>
                    <Link to={'/'} className='text-3xl font-bold text-gray-400'>
                        Sheikh
                        <span className='text-purple-700'>Rasel</span>
                        <div className='w-4 h-4 rounded-full bg-purple-900 '></div>
                    </Link>

                </div>
                {/* desktop view */}
                <div className='hidden md:hidden lg:flex space-x-10'>
                    {
                        navItems.map((item) => (
                            <NavLink key={item.name}
                                to={item.path}
                                className={({ isActive }) =>
                                    `relative text-gray-100 transition hover:text-purple-700 group ${isActive ? "text-purple-600" : ""
                                    }`
                                }
                            >
                                {item.name}
                                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-700 transition-all group-hover:w-full"></span>

                            </NavLink>
                        ))
                    }


                </div>
                {/* mobile toggle */}
                <div className='lg:hidden '>
                    {
                        showMenu ? (<RxCross2 onClick={() => setShowMenu(false)} className='text-2xl cursor-pointer' />) :
                            (<FaBars onClick={() => setShowMenu(true)} className='text-2xl cursor-pointer' />)

                    }
                </div>

            </div>

            {/* mobile menu item */}
            {
                showMenu && (
                    <div className="lg:hidden mt-6 bg-gray-800 p-6 space-y-4 text-center">
                        {
                            navItems.map((item )=>
                                <NavLink 
                                key={item.name}
                                to={item.path}
                                onClick={() => setShowMenu(false)}
                                className={({isActive})=> 
                                `block text-lg transition ${
                                    isActive? "text-purple-700 font-semibold" : "text-gray-100"
                                }`
                                }
                                >
                                    {item.name}
                                </NavLink>
                               
                            )
                        }
                    </div>

                )
            }
        </nav>
    );
};

export default Navbar;