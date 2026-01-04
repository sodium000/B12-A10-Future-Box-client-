/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiHeart, FiShield, FiUsers, FiAward, FiArrowRight, FiTarget, FiZap } from 'react-icons/fi';
import Navbars from '../../src/NavBar/Navbars';
import Footer from '../../src/Footer/Footer';

const AboutPage = () => {
    const stats = [
        { label: 'Meals Shared', value: '12K+', icon: <FiHeart className="text-rose-500" /> },
        { label: 'Active Donors', value: '850+', icon: <FiUsers className="text-blue-500" /> },
        { label: 'Communities', value: '45+', icon: <FiTarget className="text-emerald-500" /> },
        { label: 'Waste Reduced', value: '8 Tons', icon: <FiZap className="text-yellow-500" /> },
    ];

    const values = [
        {
            title: "Community First",
            desc: "We believe that a stronger neighborhood starts with a shared meal and open hearts.",
            icon: <FiUsers size={24} />,
            color: "from-blue-500 to-cyan-400"
        },
        {
            title: "Zero Waste",
            desc: "Our mission is to bridge the gap between food surplus and those who need it most.",
            icon: <FiShield size={24} />,
            color: "from-emerald-500 to-teal-400"
        },
        {
            title: "Trusted Platform",
            desc: "Safety and hygiene are our priorities. We verify donors to ensure quality sharing.",
            icon: <FiAward size={24} />,
            color: "from-orange-500 to-yellow-400"
        }
    ];

    return (
        <div className="bg-[#020617] text-white min-h-screen">
            <Navbars />

            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

                <div className="container mx-auto text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-xs font-bold uppercase tracking-widest"
                    >
                        Our Story
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black mt-6 mb-8 tracking-tight"
                    >
                        Sharing Food, <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">
                            Spreading Kindness.
                        </span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
                    >
                        PlatesShare was born from a simple idea: No good food should ever go to waste while
                        someone goes hungry. We are a community-driven platform connecting surplus to need.
                    </motion.p>
                </div>
            </section>

            <section className="container mx-auto px-6 py-24">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2 relative"
                    >
                        <div className="absolute -inset-4 bg-linear-to-tr from-yellow-400 to-orange-500 rounded-[3rem] blur-2xl opacity-20" />
                        <img
                            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070&auto=format&fit=crop"
                            alt="People sharing food"
                            className="relative rounded-[2.5rem] border border-white/10 shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/2"
                    >
                        <h2 className="text-4xl font-bold mb-6">Our Mission to <span className="text-yellow-400">End Hunger</span></h2>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Every day, tons of perfectly edible food are discarded by restaurants, events, and households.
                            At the same time, millions struggle to find their next meal. PlatesShare is the digital bridge
                            that makes sharing as easy as clicking a button.
                        </p>
                        <ul className="space-y-4">
                            {['Reducing CO2 emissions by cutting food waste', 'Promoting community bonding', 'Ensuring food safety through verification'].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-200">
                                    <div className="w-6 h-6 rounded-full bg-yellow-400/20 flex items-center justify-center">
                                        <FiArrowRight size={14} className="text-yellow-400" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </section>

            {/* 4. Core Values */}
            <section className="bg-white/2 py-24 px-6 border-y border-white/5">
                <div className="container mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-slate-500">The principles that guide our community every day.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((val, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[3rem] bg-slate-900/50 border border-white/10 relative overflow-hidden group"
                            >
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br ${val.color} opacity-10 blur-3xl group-hover:opacity-20 transition-all`} />
                                <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${val.color} flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20`}>
                                    {val.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4">{val.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{val.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default AboutPage;