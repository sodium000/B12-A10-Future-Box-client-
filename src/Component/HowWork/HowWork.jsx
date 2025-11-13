/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion"

import { FaUserCircle, FaEnvelopeOpenText, FaPhoneAlt, FaBriefcase } from "react-icons/fa";



const steps = [
  {
    
    icon: <FaUserCircle className="text-blue-600 text-4xl" />, 
    title: "Create profile",
    desc: "Build your profile to showcase your skills and experience.",
    imageUrl: `https://i.ibb.co/yFsvq4j8/Screenshot-15.png`, 
  },
  {
    icon: <FaEnvelopeOpenText className="text-blue-600 text-4xl" />,
    title: "Available Food",
    desc: "Here you found all the food",
    imageUrl: `https://i.ibb.co/BHnZGCVp/Screenshot-1.png`, 
  },
  {
    icon: <FaPhoneAlt className="text-blue-600 text-4xl" />,
    title: "Request Food",
    desc: "Click the request button you get a from",
    imageUrl: `https://i.ibb.co/7JwPnPQX/Screenshot-2.png`, 
  },
  {
    icon: <FaBriefcase className="text-blue-600 text-4xl" />,
    title: "Get Request",
    desc: "When you fill the from you found your food here",
    imageUrl: `https://i.ibb.co/Xr7vncXz/Screenshot-3.png`,
  },
];


const HowWork = () => {
    return (
        <section className=" py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative ">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4 text-transparent bg-clip-text bg-linear-to-r from-violet-600  to-pink-700">
          How it works
        </h2>
        <p className="text-sm sm:text-base text-violet-600 max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4">
           Provides a step-by-step guide from topic selection and research to outlining, writing a rough draft, and proofreading.
        </p>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-6 lg:gap-8 ">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat  shadow-lg rounded-2xl p-4 sm:p-6 w-full flex flex-col items-center text-center z-10 hover:shadow-xl transition"
            >
              <div className="w-full h-40 mb-4 rounded-xl overflow-hidden">
                <img
                  src={step.imageUrl}
                  alt={step.title}
                  className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-105"
                />
              </div>
              <h3 className="font-semibold text-gray-300 sm:text-lg mb-2">{step.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm">{step.desc}</p>
            </div>
          ))}

          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-48 pointer-events-none z-0">
            <svg className="absolute w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M180 100 C260 40, 340 40, 420 100"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
              />
              <motion.path
                d="M420 100 C500 160, 580 160, 660 100"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
              />
              <motion.path
                d="M660 100 C740 40, 820 40, 900 100"
                stroke="#3b82f6"
                strokeWidth="2"
                strokeDasharray="6 6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
    );
};

export default HowWork;