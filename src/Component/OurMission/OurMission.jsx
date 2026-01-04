/* eslint-disable no-unused-vars */
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const BusinessLandingPage = () => {
  return (
    <>
      <div className='mt-10'>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold pb-2 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
            Our Mission
          </h2>
          <p className="text-gray-900 font-bold text-lg max-w-2xl mx-auto">
          Our craft a mission statement that expresses brand's values and connects with  audience
          </p>
        </motion.div>
      </div>
      <div className="flex items-center justify-center p-2">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-4">
                PlatesShare
              </h1>
              <h2 className="text-2xl text-gray-400 font-light mb-6 tracking-wider">
                Engage People
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                "Our mission at Engage People is to create spaces where diverse individuals can connect, collaborate, and grow together.We are the online destination designed to bring people together. Engage People is where connections are made and communities thrive."
              </p>
              <button className="bg-linear-to-r from-yellow-400 to-orange-500 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
                READ MORE
                <FaArrowRight />
              </button>
            </div>

            <div className="relative">
              <div className="relative">
                <img
                  src="/business-growth-chart-illustration-svg-download-png-4720375.webp"
                  alt="Business Growth Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessLandingPage;