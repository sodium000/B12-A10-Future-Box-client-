/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaUtensils, FaHeart, FaRecycle } from 'react-icons/fa';

const Statistics = () => {
  const stats = [
    { icon: <FaUsers className="text-5xl" />, number: "10K+", label: "Active Users", color: "from-blue-400 to-cyan-500" },
    { icon: <FaUtensils className="text-5xl" />, number: "50K+", label: "Food Items Shared", color: "from-yellow-400 to-orange-500" },
    { icon: <FaHeart className="text-5xl" />, number: "25K+", label: "Families Helped", color: "from-red-400 to-pink-500" },
    { icon: <FaRecycle className="text-5xl" />, number: "30K+", label: "Lbs Waste Reduced", color: "from-green-400 to-emerald-500" }
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
            Our Impact
          </h2>
          <p className=" text-lg max-w-2xl mx-auto">
            Numbers that show our community's commitment to fighting hunger
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat p-6 rounded-2xl shadow-lg text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className={`inline-block mb-4 text-transparent bg-clip-text bg-linear-to-r ${stat.color}`}>
                {stat.icon}
              </div>
              <motion.h3
                className={`text-4xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-linear-to-r ${stat.color}`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-300 text-sm md:text-base font-semibold">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;