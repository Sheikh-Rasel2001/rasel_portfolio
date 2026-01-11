import React from 'react';
import { createBrowserRouter } from "react-router";
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Skills from '../Pages/Skills/Skills'
import Projects from '../Pages/Project/Projects';
import Experience from '../Pages/Experience/Experience';
import Contact from '../Pages/Contact/Contact';


const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: '/about',
                Component: About
            },
            {
               path: '/skills',
               Component: Skills
            },
            {
                path: '/projects',
                Component: Projects
            },
            {
                path: '/experience',
                Component: Experience
            },
            {
                path: '/contact',
                Component: Contact
            }
        ]
    },
]);



export default router;