/* eslint-disable no-unused-vars */
// src/Component/Testimonials/Testimonials.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Food Donor",
      image: "https://i.pravatar.cc/150?img=1",
      text: "PlateShare has made it so easy to donate my surplus food. I love knowing that my extra groceries are helping families in need instead of going to waste.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Community Member",
      image: "https://i.pravatar.cc/150?img=12",
      text: "As someone who struggles with food insecurity, PlateShare has been a lifesaver. The community here is so supportive and generous.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Restaurant Owner",
      image: "https://i.pravatar.cc/150?img=47",
      text: "We donate our leftover food daily through PlateShare. It's wonderful to see the positive impact we're making in our community.",
      rating: 5
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
            What People Say
          </h2>
          <p className="font-bold text-lg max-w-2xl mx-auto">
            Real stories from our community members
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat p-6 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-1 mb-4 text-yellow-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <FaQuoteLeft className="text-3xl text-gray-400 mb-4" />
              <p className="text-gray-200 mb-6 leading-relaxed">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;