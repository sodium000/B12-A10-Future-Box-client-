/* eslint-disable no-unused-vars */
import { useLoaderData } from 'react-router';
import FoodCard from '../../FootCard/FoodCard';
import Navbars from '../../NavBar/Navbars';
import Footer from '../../Footer/Footer';
import { use, useState } from 'react';
import AuthContext from '../../AuthContext/AuthContext';
import { motion } from 'framer-motion';
import { FiSearch, FiFilter } from 'react-icons/fi';

const AllFoodShow = () => {
    const AllFood = useLoaderData();
    const { loading } = use(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredFood = AllFood.filter(food => 
        food.Food_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className='flex h-screen justify-center items-center bg-slate-950'>
                <span className="loading loading-spinner loading-lg text-yellow-400"></span>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-[#020617] text-white selection:bg-yellow-400/30'>
            <Navbars />

            <div className="relative pt-32 pb-16 px-6 overflow-hidden">

                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent -z-10" />
                
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 text-xs font-bold uppercase tracking-widest">
                            Community Sharing
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">
                            Available <span className="text-transparent bg-clip-text bg-linear-to-r from-yellow-400 to-orange-500">Donations</span>
                        </h1>
                        <p className="max-w-2xl mx-auto text-slate-400 text-lg">
                            Join our mission to reduce waste. Browse fresh food shared by people in your neighborhood.
                        </p>
                    </motion.div>


                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-12 max-w-3xl mx-auto flex flex-col md:flex-row gap-4"
                    >
                        <div className="relative flex-1">
                            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                            <input 
                                type="text" 
                                placeholder="Search by food name..."
                                className="w-full bg-slate-900/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-yellow-400/50 transition-all backdrop-blur-md"
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <button className="flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 border border-white/10 rounded-2xl font-bold hover:bg-slate-800 transition-all">
                            <FiFilter /> Filters
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* 3. Main Content Section */}
            <main className="container mx-auto px-6 pb-32">
                {filteredFood.length > 0 ? (
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredFood.map((data, index) => (
                            <motion.div
                                key={data._id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <FoodCard data={data} />
                            </motion.div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-6xl mb-4">🧊</div>
                        <h3 className="text-2xl font-bold">No food found</h3>
                        <p className="text-slate-500">Try adjusting your search or filters.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default AllFoodShow;