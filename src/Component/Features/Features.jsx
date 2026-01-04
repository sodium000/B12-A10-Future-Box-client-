/* eslint-disable no-unused-vars */

import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaUsers, FaHeart, FaShieldAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      icon: <FaUtensils className="text-4xl text-yellow-400" />,
      title: "Easy Food Sharing",
      description: "Share surplus food with those in need effortlessly"
    },
    {
      icon: <FaUsers className="text-4xl text-blue-400" />,
      title: "Community Driven",
      description: "Connect with your local community and make a difference"
    },
    {
      icon: <FaHeart className="text-4xl text-red-400" />,
      title: "Reduce Waste",
      description: "Help reduce food waste and fight hunger simultaneously"
    },
    {
      icon: <FaShieldAlt className="text-4xl text-green-400" />,
      title: "Safe & Secure",
      description: "Secure platform with verified users and food safety guidelines"
    },
    {
      icon: <FaClock className="text-4xl text-purple-400" />,
      title: "Real-time Updates",
      description: "Get instant notifications about available food in your area"
    },
    {
      icon: <FaMapMarkerAlt className="text-4xl text-orange-400" />,
      title: "Location Based",
      description: "Find food donations near you with location-based search"
    }
  ];

  return (
    <section className="py-16 px-6 bg-linear-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
            Key Features
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Discover what makes PlateShare the best platform for food sharing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;