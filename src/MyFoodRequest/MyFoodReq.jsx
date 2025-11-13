/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState, useContext, useMemo } from "react";
import {  FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navbars from "../NavBar/Navbars";
import AuthContext from "../AuthContext/AuthContext";

export default function FoodTableSimple() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/food/request?email=${user.email}`
      );
      const data = await res.json();
      setFoods(data);
    } catch (error) {
      console.error("Error fetching food:", error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (user?.email) {
      fetchFoods();
    }
  }, [user?.email]);

  const filteredFoods = useMemo(() => {
    if (!query) return foods;
    return foods.filter((food) =>
      food.foodName?.toLowerCase().includes(query.toLowerCase())
    );
  }, [foods, query]);

  return (
    <>
      <Navbars />

      <div className="p-6 max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            🍱 Food Inventory
          </h2>
          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <FiSearch />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search foods..."
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            />
          </div>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-indigo-50">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Food Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Donor Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-100">
              <AnimatePresence>
                {loading ? (
                  <tr>
                    <td colSpan={3} className="py-10 text-center text-gray-500">
                      Loading...
                    </td>
                  </tr>
                ) : filteredFoods.length === 0 ? (
                  <tr>
                    <td colSpan={3} className="py-10 text-center text-gray-500">
                      No foods found.
                    </td>
                  </tr>
                ) : (
                  filteredFoods.map((food, index) => (
                    <motion.tr
                      key={food._id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="hover:bg-indigo-50 transition"
                    >
                      <td className="px-6 py-4 text-gray-800 font-medium">
                        {food.foodName}
                      </td>
                      <td className="px-6 py-4 text-gray-700">
                        {food.Donor_name}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            food.statues === "Accepting"
                              ? "bg-green-100 text-green-700"
                              : food.statues=== "Pending"
                              ? "bg-red-100 text-red-700"
                              : ""
                          }`}
                        >
                          {food.statues}
                        </span>
                      </td>
                    </motion.tr>
                  ))
                )}
              </AnimatePresence>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
