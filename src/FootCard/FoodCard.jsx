import React from "react";
import { Link } from "react-router";

const FoodCard = ({ data }) => {
  const { FoodImag, Food_name, Food_serve, Location, Date, Donor_img, Donor_name,_id } = data;

  return (
    <div className="relative w-full max-w-sm mx-auto h-auto flex items-center justify-center p-2 sm:p-3">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/40 to-purple-400/40 backdrop-blur-xl border border-white/40 shadow-lg" />
      <div className="relative z-10 w-full p-3 sm:p-4 text-slate-800">
        <img
          src={FoodImag}
          alt={`Food: ${Food_name}`}
          className="w-full h-32 sm:h-40 md:h-44 object-cover rounded-lg mb-2 sm:mb-3"
        />
        <h2 className="text-base sm:text-lg font-bold mb-2 text-slate-900 line-clamp-2 min-h-12">{Food_name}</h2>


        <div className="flex items-center gap-2 mb-2 sm:mb-3">
          <img
            src={Donor_img}
            alt={`Donor: ${Donor_name}`}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-slate-200 shrink-0"
          />
          <p className="text-xs sm:text-sm font-medium text-slate-900 truncate">
            <span className="font-semibold text-slate-900">Donor:</span> {Donor_name}
          </p>
        </div>

        <div className="text-xs sm:text-sm text-slate-900 space-y-1 mb-2 sm:mb-3">
          <p className="truncate"><strong>Quantity:</strong> {Food_serve}</p>
          <p className="truncate"><strong>Pickup:</strong> {Location}</p>
          <p className="truncate"><strong>Expires:</strong> {Date}</p>
        </div>
        <Link to={`/food/${_id}`}>
        <button className="w-full bg-white/80 backdrop-blur-md border-2 border-blue-300 text-slate-800 font-semibold py-2 text-xs sm:text-sm rounded-md hover:bg-cyan-100 hover:scale-105 active:scale-95 transition-all duration-300">
          View Details
        </button>
        </Link>
      </div>
    </div>
  );
};

export default FoodCard;
