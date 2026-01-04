/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiClock, FiArrowRight, FiCheckCircle, FiStar, FiCoffee, FiGlobe, FiHeart } from 'react-icons/fi';
import Navbars from '../../src/NavBar/Navbars';
import Footer from '../../src/Footer/Footer';


const CareerPage = () => {
  const perks = [
    { title: "Remote Friendly", icon: <FiGlobe />, desc: "Work from anywhere in the world." },
    { title: "Growth Budget", icon: <FiStar />, desc: "Yearly stipend for books and courses." },
    { title: "Health & Wellness", icon: <FiHeart />, desc: "Premium insurance and gym credits." },
    { title: "Flexible Hours", icon: <FiClock />, desc: "We value output over hours clocked." },
  ];

  const jobs = [
    { id: 1, title: "Lead Frontend Engineer", dept: "Engineering", type: "Full-time", loc: "Remote" },
    { id: 2, title: "Community Manager", dept: "Marketing", type: "Full-time", loc: "New York / Remote" },
    { id: 3, title: "Product Designer", dept: "Design", type: "Contract", loc: "Remote" },
    { id: 4, title: "Backend Developer (Node.js)", dept: "Engineering", type: "Full-time", loc: "Remote" },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      <Navbars/>

      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />
        
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-[0.2em]">
              Join the Movement
            </span>
            <h1 className="text-5xl md:text-8xl font-black mt-8 mb-6 tracking-tighter">
              Build the future of <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 via-orange-500 to-rose-500">
                Social Sharing.
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-400 text-lg md:text-xl leading-relaxed">
              We're a team of optimists building tools to ensure no meal ever goes to waste. 
              Help us scale kindness globally.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((perk, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="p-8 rounded-4xl bg-white/3 border border-white/10 hover:border-yellow-400/30 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 text-xl mb-6">
                {perk.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{perk.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-bold mb-4">Open Roles</h2>
            <p className="text-slate-400">Current opportunities to make an impact.</p>
          </div>
          <div className="flex gap-3">
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium">All Departments</span>
            <span className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-medium">Remote Only</span>
          </div>
        </div>

        <div className="space-y-4">
          {jobs.map((job) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ x: 10 }}
              className="group relative p-6 md:p-8 rounded-4xl bg-slate-900/50 border border-white/5 hover:border-white/20 hover:bg-slate-900 transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="flex flex-col gap-2">
                <span className="text-yellow-400 text-[10px] font-black uppercase tracking-widest">{job.dept}</span>
                <h3 className="text-xl md:text-2xl font-bold group-hover:text-yellow-400 transition-colors">{job.title}</h3>
                <div className="flex items-center gap-4 text-slate-500 text-sm">
                  <span className="flex items-center gap-1.5"><FiMapPin size={14}/> {job.loc}</span>
                  <span className="flex items-center gap-1.5"><FiClock size={14}/> {job.type}</span>
                </div>
              </div>
              
              <motion.button className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-yellow-400 group-hover:text-slate-900 flex items-center justify-center transition-all">
                <FiArrowRight size={20} />
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-20">
        <div className="relative p-12 md:p-20 rounded-[3rem] bg-linear-to-br from-blue-600 to-purple-700 overflow-hidden text-center">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          
          <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Don't see a perfect fit?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto relative z-10">
            We're always looking for talented individuals who are passionate about our mission. 
            Send us an open application!
          </p>
          <button className="relative z-10 px-10 py-4 bg-white text-blue-600 font-black rounded-2xl hover:bg-yellow-400 hover:text-slate-900 transition-all shadow-xl">
            Drop your Resume
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareerPage;