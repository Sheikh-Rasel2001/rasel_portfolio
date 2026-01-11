import React from 'react';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Skills from '../Skills/Skills';
import Projects from '../Project/Projects';
import Experience from '../Experience/Experience';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div>
          <Hero></Hero>
          <About></About>
          <Skills></Skills>
          <Projects></Projects>
          <Experience></Experience>
          <Contact></Contact>
        </div>
    );
};

export default Home;