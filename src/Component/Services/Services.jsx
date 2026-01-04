/* eslint-disable no-unused-vars */

import React from 'react';
import { motion } from 'framer-motion';
import { FaHandHoldingHeart, FaSearch, FaBell, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaHandHoldingHeart className="text-5xl text-yellow-400" />,
      title: "Food Donation",
      description: "Easily donate your surplus food to help those in need. Our platform makes it simple to post available food items with all necessary details.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <FaSearch className="text-5xl text-blue-400" />,
      title: "Food Discovery",
      description: "Browse through available food donations in your area. Filter by location, food type, and availability to find exactly what you need.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: <FaBell className="text-5xl text-green-400" />,
      title: "Request Management",
      description: "Submit food requests and track their status. Get notified when new food items matching your needs become available.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: <FaChartLine className="text-5xl text-purple-400" />,
      title: "Impact Tracking",
      description: "See the positive impact you're making. Track how much food you've shared or received, and contribute to reducing food waste.",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 pb-2 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
            Our Services
          </h2>
          <p className="text-lg font-bold max-w-2xl mx-auto">
            Comprehensive solutions for food sharing and community support
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat p-8 rounded-2xl shadow-lg overflow-hidden group"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative z-10">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;