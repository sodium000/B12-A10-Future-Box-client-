import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-800 text-white">
    <div className="max-w-6xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-8">
            
            <div>
                <h3 className="text-lg font-semibold mb-4">Plates Share</h3>
                <p className="text-gray-400 text-sm">
                    Our mission at Engage People is to create spaces where diverse individuals can connect, collaborate, and grow together.
                </p>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">About Us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Services</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Contact</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-lg font-semibold mb-4">Support</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">FAQ</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white transition duration-300">Terms of Service</a></li>
                </ul>
            </div>

        <div>
                <h3 className="text-lg font-semibold mb-4 ">Connect</h3>
                <div className="flex space-x-4 justify-center">
                    <a href="https://www.facebook.com/sodiumRdX.000/" className="text-gray-400 hover:text-blue-400" aria-label="Facebook">
                        <FaFacebook className="text-2xl" /> 
                    </a> 
                    
                    <a href="#" className="text-gray-400 hover:text-red-500" aria-label="Instagram">
                        <FaInstagram className="text-2xl" />
                    </a>
                    
                    <a href="#" className="text-gray-400 hover:text-blue-300" aria-label="Twitter">
                        <FaXTwitter className="text-2xl" />
                    </a>
                    
                </div>
                <p className="mt-4 text-gray-400 text-sm wrap-break-word">
                    Email: raisultonmoy.dev@gmail.com
                </p>
            </div>

        </div>

        <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 sm:mb-0">
                &copy; 2024 Plate Shear. All rights reserved.
            </p>
            <div className="flex space-x-4 text-sm">
                <a href="#" className="text-gray-400 hover:text-white">Programing Hero</a>
            </div>
        </div>

    </div>
</footer>
        </div>
    );
};

export default Footer;