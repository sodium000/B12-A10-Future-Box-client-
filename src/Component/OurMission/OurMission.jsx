import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const BusinessLandingPage = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-purple-300 via-purple-100 to-purple-300 flex items-center justify-center p-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
             <img src="/Screenshot_4.png" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full sm:ring-offset-2" alt="" />
                <span className="text-lg sm:text-xl md:text-2xl font-bold underline">Plates</span>
             <span className=" italic text-fuchsia-800 text-lg sm:text-xl md:text-2xl font-bold">Share</span>
          </div>

        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-800 mb-4">
              PlatesShare
            </h1>
            <h2 className="text-2xl text-gray-400 font-light mb-6 tracking-wider">
              Engage People
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              "Our mission at Engage People is to create spaces where diverse individuals can connect, collaborate, and grow together.We are the online destination designed to bring people together. Engage People is where connections are made and communities thrive."
            </p>
            <button className="bg-linear-to-r from-yellow-400 to-orange-500 text-white font-bold px-8 py-4 rounded-full flex items-center gap-2 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200">
              READ MORE
              <FaArrowRight />
            </button>
          </div>

          <div className="relative">
            <div className="relative">
              <img
                src="/business-growth-chart-illustration-svg-download-png-4720375.webp"
                alt="Business Growth Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessLandingPage;