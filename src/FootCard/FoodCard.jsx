/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { FiMapPin, FiCalendar, FiArrowRight, FiUsers } from "react-icons/fi";

const FoodCard = ({ data }) => {
  const { FoodImag, Food_name, Food_serve, Location, Date, Donor_img, Donor_name, _id } = data;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col w-full  mx-auto bg-slate-800 border border-white/8 rounded-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500"
    >
      <div className="relative h-48 w-full p-4 pb-0">
        <div className="relative h-full w-full overflow-hidden rounded-4xl shadow-2xl">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            src={FoodImag}
            alt={Food_name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent" />

          {/* Servings Badge - Glass Style */}
          <div className="absolute bottom-3 left-3 px-3 py-1.5 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl flex items-center gap-2">
            <FiUsers className="text-yellow-400 size-3" />
            <span className="text-white text-[10px] font-black uppercase tracking-widest">{Food_serve} Left</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 pt-1">
        <div className="flex justify-between items-start mb-3">
          <h2 className="text-lg font-semibold text-white tracking-tight leading-tight line-clamp-1 group-hover:text-yellow-400 transition-colors duration-300">
            {Food_name}
          </h2>
        </div>

        <div className="space-y-2.5 mb-6">
          <div className="flex items-center gap-3 text-white/50">
            <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
              <FiMapPin className="text-yellow-400 size-3" />
            </div>
            <span className="text-xs font-medium tracking-wide truncate">{Location}</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3 text-white/50">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                <FiUsers className="text-yellow-400 size-3" />
              </div>
              <span className="text-xs font-medium">{Food_serve} Servings</span>
            </div>
            <div className="flex items-center gap-3 text-white/50">
              <div className="p-1.5 rounded-lg bg-white/5 border border-white/5">
                <FiCalendar className="text-yellow-400 size-3" />
              </div>
              <span className="text-xs font-medium">{Date}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/6">
          <div className="flex items-center gap-2.5">
            <img
              src={Donor_img}
              alt={Donor_name}
              className="w-7 h-7 rounded-full object-cover grayscale group-hover:grayscale-0 transition-all border border-white/10"
            />
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-tighter text-white/30 font-bold">Shared by</span>
              <span className="text-[11px] font-medium text-white/70 leading-none">{Donor_name.split(' ')[0]}</span>
            </div>
          </div>

          {/* Action Link */}
          <Link to={`/food/${_id}`}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-400 hover:bg-yellow-300 p-2.5 rounded-xl transition-colors shadow-lg shadow-yellow-400/10"
            >
              <FiArrowRight className="text-slate-900 size-4" />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default FoodCard;