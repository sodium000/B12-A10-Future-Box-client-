/* eslint-disable no-unused-vars */

import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';

const Blogs = () => {
  const blogs = [
    {
      title: "10 Tips for Reducing Food Waste at Home",
      excerpt: "Learn simple strategies to minimize food waste and make a positive impact on the environment.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800",
      author: "Jane Smith",
      date: "Dec 15, 2024",
      category: "Tips"
    },
    {
      title: "How Food Sharing Strengthens Communities",
      excerpt: "Discover how sharing food creates stronger bonds and helps build resilient communities.",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
      author: "John Doe",
      date: "Dec 10, 2024",
      category: "Community"
    },
    {
      title: "The Environmental Impact of Food Waste",
      excerpt: "Understanding the connection between food waste and climate change, and what we can do about it.",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800",
      author: "Maria Garcia",
      date: "Dec 5, 2024",
      category: "Environment"
    }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Latest Blogs
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Stay informed with our latest articles and tips
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              className="bg-[url(/background-gradient-lights.jpg)] bg-cover bg-center bg-no-repeat rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-semibold rounded-full mb-3">
                  {blog.category}
                </span>
                <h3 className="text-xl font-bold text-white mb-3">{blog.title}</h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-2">
                    <FaUser className="text-xs" />
                    <span>{blog.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt className="text-xs" />
                    <span>{blog.date}</span>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-semibold">
                  Read More <FaArrowRight />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;