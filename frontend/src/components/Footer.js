import React from 'react';

const Footer = () => {
    return (
        <footer className="p-4 text-center text-white bg-gray-800">
            <p className="text-sm">&copy; {new Date().getFullYear()} Pangea TeleGuard. All rights reserved.</p>
        </footer>
    );
};

export default Footer;