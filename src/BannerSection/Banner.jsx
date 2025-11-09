/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
const Banner = () => {
    return (
        <div>
            <div className="flex items-start justify-center p-4 sm:p-8">
                <div
                    className="w-full max-w-6xl mt-10 p-6 md:p-0 
                    bg-blend-screen shadow-none rounded-none 
                    relative overflow-hidden
                    flex flex-col md:flex-row items-center justify-center"
                >
                    <motion.div
                        className="md:w-1/2 p-4 md:p-8 lg:p-12 text-center md:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-extrabold text-blue-600 mb-6 leading-tight font-sans  inline-block px-4 py-2">
                            The Largest Crop Ever
                        </h1>

                        <p className="text-md text-gray-500 mb-4 max-w-xl mx-auto md:mx-0">
                            Stimulates vast a real proven works discount secure care. Market. Invigorate a
                            awesome handcrafted bigger comes newer recommended lifetime. Evulates
                            vast a real proven works discount secure care. Market Invigorate a awesome
                            handcrafted bigger comes newer recommended lifetime. Odor to yummy high
                            racy bonus soaking mouthwatering. First superior
                        </p>

                        <button
                            className="px-8 py-3 border-2 border-yellow-400 text-yellow-600 font-semibold 
                            rounded-md hover:bg-yellow-50 transition duration-300 
                            transform hover:scale-105 active:scale-95"
                        >
                            Search
                        </button>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 mt-8 md:mt-0 flex justify-center items-center"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 2, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://placehold.co/800x600/e0d8c0/333333?text=Harvest+Field"
                            alt="Golden hay bales in a sunny field."
                            className="w-full h-auto object-cover max-h-[600px] md:max-h-full"
                        />
                    </motion.div>
                </div>
            </div>
            
        </div>
    );
};

export default Banner;
