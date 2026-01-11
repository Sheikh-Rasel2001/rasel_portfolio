import React from 'react';

const Footer = () => {
    return (
        <div className='text-center py-6 bg-gray-800 text-gray-300 mt-10'>
            <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
        </div>
    );
};

export default Footer;