/* eslint-disable no-unused-vars */
// src/Component/Categories/Categories.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaAppleAlt, FaBreadSlice, FaDrumstickBite, FaFish, FaIceCream, FaCookie } from 'react-icons/fa';

const Categories = () => {
  const categories = [
    { icon: <FaAppleAlt className="text-4xl" />, name: "Fruits & Vegetables", color: "from-green-400 to-emerald-600" },
    { icon: <FaBreadSlice className="text-4xl" />, name: "Bakery Items", color: "from-yellow-400 to-orange-500" },
    { icon: <FaDrumstickBite className="text-4xl" />, name: "Meat & Poultry", color: "from-red-400 to-pink-600" },
    { icon: <FaFish className="text-4xl" />, name: "Seafood", color: "from-blue-400 to-cyan-600" },
    { icon: <FaIceCream className="text-4xl" />, name: "Dairy Products", color: "from-purple-400 to-indigo-600" },
    { icon: <FaCookie className="text-4xl" />, name: "Snacks & Beverages", color: "from-orange-400 to-red-500" }
  ];

  return (
    <section className="py-16 px-6 bg-linear-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
            Food Categories
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Browse food donations by category
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`flex flex-col items-center text-center bg-linear-to-br ${category.color} p-4 rounded-lg`}>
                <div className="text-white mb-3">{category.icon}</div>
                <h3 className="text-white text-sm font-semibold">{category.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;