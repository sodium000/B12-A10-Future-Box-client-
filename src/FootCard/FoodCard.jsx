import React from "react";

const FoodCard = ({ data }) => {
  const { FoodImag, Food_name, Food_serve, Location, Date, Donor_img, Donor_name } = data;

  return (
    <div className="relative w-75 h-110 flex items-center justify-center">
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-cyan-500/40 to-purple-400/40 backdrop-blur-xl border border-white/40 shadow-lg" />
      {/* <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-purple-700/70 rounded-full blur-2xl " /> */}
      <div className="relative z-10 w-11/12 text-slate-800">
        <img
          src={FoodImag}
          alt={`Food: ${Food_name}`}
          className="w-full h-36 object-cover rounded-lg mb-3"
        />
        <h2 className="text-lg font-bold mb-2 text-slate-900">{Food_name}</h2>


        <div className="flex items-center gap-2 mb-3">
          <img
            src={Donor_img}
            alt={`Donor: ${Donor_name}`}
            className="w-10 h-10 rounded-full object-cover border border-slate-200"
          />
          <p className="text-sm font-medium text-slate-900">
            <span className="font-semibold text-slate-900">Donor:</span> {Donor_name}
          </p>
        </div>

        <div className="text-sm text-slate-900 space-y-1 mb-3">
          <p><strong>Quantity:</strong> {Food_serve}</p>
          <p><strong>Pickup:</strong> {Location}</p>
          <p><strong>Expires:</strong> {Date}</p>
        </div>

        <button className="w-full bg-white/80 backdrop-blur-md border-2 border-blue-300 text-slate-800 font-semibold py-2 rounded-md hover:bg-cyan-100 hover:scale-105 active:scale-95 transition-all duration-300">
          View Details
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
