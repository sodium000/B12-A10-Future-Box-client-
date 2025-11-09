/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from "framer-motion"

import { FaUserCircle, FaEnvelopeOpenText, FaPhoneAlt, FaBriefcase } from "react-icons/fa";


const steps = [
  {
    icon: <FaUserCircle className="text-blue-600 text-4xl" />,
    title: "Create profile",
    desc: "Build your profile to showcase your skills and experience.",
  },
  {
    icon: <FaEnvelopeOpenText className="text-blue-600 text-4xl" />,
    title: "Receive Job offers",
    desc: "Employers will reach out with exciting opportunities.",
  },
  {
    icon: <FaPhoneAlt className="text-blue-600 text-4xl" />,
    title: "Contact employer",
    desc: "Communicate directly with employers and discuss details.",
  },
  {
    icon: <FaBriefcase className="text-blue-600 text-4xl" />,
    title: "Get your dream Job",
    desc: "Accept the offer and start your journey with your dream job.",
  },
];


const HowWork = () => {
    return (
        <section className="bg-white py-16 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          How it works
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 md:gap-8">
          {steps.map((step, i) => (
            <di v
              key={i}
              className="relative bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/4 flex flex-col items-center text-center z-10 hover:shadow-xl transition"
            >
              <div className="bg-blue-100 w-16 h-16 flex items-center justify-center rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm">{step.desc}</p>
            </di>
          ))}

          <div className="hidden md:block absolute top-1/2 left-0 w-full h-48 pointer-events-none z-0">
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