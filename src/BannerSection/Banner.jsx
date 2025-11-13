/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div>
            <div className="flex items-start justify-center p-4 sm:p-8">
                <div
                    className="w-full max-w-6xl mt-4 sm:mt-6 md:mt-10 p-4 sm:p-6 md:p-0 
                    bg-blend-screen shadow-none rounded-none 
                    relative overflow-hidden
                    flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-0"
                >
                    <motion.div
                        className="w-full md:w-1/2 p-2 sm:p-4 md:p-8 lg:p-12 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 sm:mb-6 leading-tight font-sans inline-block px-2 sm:px-4 py-2">
                            Waste less, save more, live more
                        </h1>

                        <p className="text-sm sm:text-base md:text-md text-gray-200 sm:text-gray-300 mb-4 sm:mb-6 max-w-xl mx-auto md:mx-0">
                            World hunger remains one of the most pressing issues of our time. Despite the fact that enough food is produced globally to feed everyone, a staggering 783 million people still go hungry every day. This article delves into the causes of world hunger, its devastating impacts, and how FARM STEW is addressing the problem through sustainable agriculture and training.
                        </p>
                        <Link to='/allfood'>
                            <button
                                className="px-4 sm:px-6 md:px-8 py-2 sm:py-3 border-2 border-yellow-400 text-yellow-400 sm:text-yellow-600 font-semibold 
                            rounded-md hover:bg-yellow-50 transition duration-300 text-sm sm:text-base
                            transform hover:scale-105 active:scale-95"
                            >
                                Search
                            </button>
                        </Link>

                    </motion.div>

                    <motion.div
                        className="w-full md:w-1/2 mt-4 sm:mt-6 md:mt-0 flex justify-center items-center"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://i.ibb.co/99G1BD8s/2017-07-uria-png.webp"
                            alt="Golden hay bales in a sunny field."
                            className="w-full h-auto object-cover max-h-[300px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[600px] "
                        />
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default Banner;
