/* eslint-disable no-unused-vars */
// src/Component/CTA/CTA.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router';
import { FaHandHoldingHeart, FaArrowRight } from 'react-icons/fa';

const CTA = () => {
  return (
    <section className="py-10 px-6 ">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 pb-2 text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
            Ready to Make a Difference?
          </h2>
          <p className=" text-lg font-bold md:text-xl mb-2 max-w-2xl mx-auto">
            Join thousands of community members fighting food waste and hunger. Start sharing or requesting food today!
          </p>
          <div className="flex justify-center mb-2">
            <div className=" p-4 rounded-full">
              <FaHandHoldingHeart className="text-5xl text-orange-500 rounded-full ring-2" />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/addfood">
              <motion.button
                className="px-8 py-4  text-orange-500 border font-bold rounded-full flex items-center justify-center gap-2 hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Donate Food <FaArrowRight />
              </motion.button>
            </Link>
            <Link to="/allfood">
              <motion.button
                className="px-8 py-4 bg-transparent border font-bold rounded-full flex items-center justify-center gap-2 hover:bg-white/10 transform hover:scale-105 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Food <FaArrowRight />
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;