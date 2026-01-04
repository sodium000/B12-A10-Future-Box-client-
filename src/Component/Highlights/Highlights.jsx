/* eslint-disable no-unused-vars */
// src/Component/Highlights/Highlights.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Highlights = () => {
  const highlights = [
    "Zero food waste in your community",
    "Help feed families in need",
    "Build stronger community connections",
    "Track your positive impact",
    "Easy-to-use platform for everyone",
    "Safe and verified food sharing"
  ];

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-pink-700">
              Why Choose PlateShare?
            </h2>
            <p className=" text-lg mb-8 leading-relaxed">
              PlateShare is more than just a food sharing platform. It's a movement towards zero food waste and stronger communities. Join thousands of users making a difference every day.
            </p>
            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaCheckCircle className="text-green-400 text-xl shrink-0" />
                  <span className="text-lg">{highlight}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="/digital-navigation-compass-abstract-data-visualizations-shines-against-dark-background-353353549.webp"
              alt="Highlights"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;