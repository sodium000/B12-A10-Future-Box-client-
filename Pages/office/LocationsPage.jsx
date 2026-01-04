/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiArrowUpRight, FiNavigation } from 'react-icons/fi';
import Navbars from '../../src/NavBar/Navbars';
import Footer from '../../src/Footer/Footer';

const LocationsPage = () => {
    const offices = [
        {
            city: "Dhaka",
            country: "Bangladesh",
            address: "123 Skyline Tower, Gulshan-2",
            phone: "+880 1234-567890",
            email: "dhaka@platesshare.com",
            hours: "9:00 AM - 6:00 PM",
            coordinates: "https://maps.google.com",
            image: "https://i.ibb.co.com/j9LzZQGS/istockphoto-1762104307-612x612.jpg"
        },
        {
            city: "New York",
            country: "USA",
            address: "88 Manhattan Plaza, NY 10001",
            phone: "+1 212-555-0199",
            email: "nyc@platesshare.com",
            hours: "10:00 AM - 7:00 PM",
            coordinates: "https://maps.google.com",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop"
        },
        {
            city: "London",
            country: "UK",
            address: "12 Canary Wharf, E14 5AB",
            phone: "+44 20 7946 0000",
            email: "uk@platesshare.com",
            hours: "8:00 AM - 5:00 PM",
            coordinates: "https://maps.google.com",
            image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    return (
        <div className="bg-[#020617] text-white min-h-screen">
            <Navbars />

            <section className="relative pt-32 pb-20 px-6 text-center">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-blue-600/10 blur-[100px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="container mx-auto"
                >
                    <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-yellow-400 text-xs font-bold uppercase tracking-widest">
                        Our Presence
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black mt-6 mb-6 tracking-tight">
                        Global <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">Offices</span>
                    </h1>
                    <p className="max-w-xl mx-auto text-slate-400 text-lg">
                        Whether you want to drop by for a coffee or discuss a partnership, we are available in the world's major hubs.
                    </p>
                </motion.div>
            </section>

            <section className="container mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offices.map((office, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-slate-900/50 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-md"
                        >
                            {/* Image Header */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={office.image}
                                    alt={office.city}
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-6">
                                    <h3 className="text-2xl font-bold">{office.city}</h3>
                                    <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest">{office.country}</p>
                                </div>
                            </div>

                            {/* Contact Content */}
                            <div className="p-8 space-y-6">
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <FiMapPin className="text-yellow-400" />
                                        </div>
                                        <p className="text-sm text-slate-400 leading-relaxed">{office.address}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <FiPhone className="text-yellow-400" />
                                        </div>
                                        <p className="text-sm text-slate-400">{office.phone}</p>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                            <FiClock className="text-yellow-400" />
                                        </div>
                                        <p className="text-sm text-slate-400">{office.hours}</p>
                                    </div>
                                </div>

                                <div className="pt-6 border-t border-white/5 flex gap-3">
                                    <a
                                        href={office.coordinates}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold py-3 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95"
                                    >
                                        <FiNavigation /> Directions
                                    </a>
                                    <a
                                        href={`mailto:${office.email}`}
                                        className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-white/10 transition-all"
                                    >
                                        <FiMail className="text-white" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <section className="container mx-auto px-6 py-24">
                <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/10 p-12 text-center">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] pointer-events-none" />

                    <h2 className="text-3xl md:text-5xl font-black mb-6 relative z-10">Don't see your city?</h2>
                    <p className="text-slate-400 max-w-xl mx-auto mb-10 relative z-10">
                        We are rapidly expanding our volunteer networks. If you want to open a branch
                        in your neighborhood, we'd love to talk.
                    </p>
                    <button className="relative z-10 bg-white text-slate-900 px-10 py-4 rounded-2xl font-black hover:bg-yellow-400 transition-all flex items-center gap-2 mx-auto">
                        Inquire for Partnership <FiArrowUpRight />
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LocationsPage;