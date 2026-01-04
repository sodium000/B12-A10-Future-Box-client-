/* eslint-disable no-unused-vars */
// src/Component/FAQ/FAQ.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How do I donate food?",
      answer: "Simply create an account, click on 'Add Food', fill in the details about your food item (name, quantity, location, expiration date), and post it. Recipients can then request your donation."
    },
    {
      question: "Is it safe to share food?",
      answer: "Yes! We encourage all users to follow food safety guidelines. Donors should only share food that is safe to consume, properly stored, and within expiration dates. Recipients should inspect food before consuming."
    },
    {
      question: "Can I request specific types of food?",
      answer: "Absolutely! You can browse available food donations and filter by category, or submit a food request specifying what you need. Our platform will notify you when matching food becomes available."
    },
    {
      question: "Is PlateShare free to use?",
      answer: "Yes, PlateShare is completely free for all users. Our mission is to reduce food waste and help communities, so we don't charge any fees for using the platform."
    },
    {
      question: "How do I track my donations or requests?",
      answer: "Once logged in, you can access 'Manage My Food' to see all your posted donations, or 'My Food Requests' to track all your food requests and their status."
    },
    {
      question: "What areas does PlateShare serve?",
      answer: "PlateShare is available in communities where our users are active. The platform uses location-based matching, so you'll see food donations and requests in your local area."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 ">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-violet-600 to-pink-700">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-900 text-lg max-w-2xl mx-auto">
            Find answers to common questions about PlateShare
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat rounded-xl shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-yellow-400 shrink-0" />
                ) : (
                  <FaChevronDown className="text-yellow-400 shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;