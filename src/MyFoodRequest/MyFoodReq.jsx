/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { FiTrash2, FiRefreshCw, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navbars from "../NavBar/Navbars";

export default function FoodTableSimple() {
  const initialFoods = useMemo(
    () => [
      {
        id: 1,
        name: "Margherita Pizza",
        img: "https://images.unsplash.com/photo-1601924582975-4d8f6a8c6b9e?w=800&q=80",
        price: "$12",
        status: "Available",
      },
      {
        id: 2,
        name: "Sushi Platter",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        price: "$22",
        status: "Out of Stock",
      },
      {
        id: 3,
        name: "Ramen Bowl",
        img: "https://images.unsplash.com/photo-1543353071-087092ec393d?w=800&q=80",
        price: "$10",
        status: "Available",
      },
      {
        id: 4,
        name: "Avocado Toast",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
        price: "$8",
        status: "Available",
      },
    ],
    []
  );

  const [foods, setFoods] = useState(initialFoods);
  const [query, setQuery] = useState("");

  const filtered = foods.filter((f) =>
    f.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  function handleDelete(id) {
    setFoods((prev) => prev.filter((f) => f.id !== id));
  }

  function handleRefresh() {
    setFoods(initialFoods);
    setQuery("");
  }

  return (<>
  <Navbars></Navbars>
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Food Inventory</h2>

        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
              <FiSearch />
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search foods..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none w-64"
              />
          </div>

          <button
            onClick={handleRefresh}
            className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
            title="Reset / Refresh"
            >
            <FiRefreshCw /> Refresh
          </button>
        </div>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Food</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Price</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Status</th>
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {filtered.length === 0 ? (
                <tr>
                <td colSpan={5} className="p-6 text-center text-gray-500">
                  No foods found.
                </td>
              </tr>
            ) : (
                filtered.map((food) => (
                    <tr key={food.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="w-20 h-14 rounded overflow-hidden shadow-sm">
                      <img
                        src={food.img}
                        alt={food.name}
                        className="object-cover w-full h-full"
                        />
                    </div>
                  </td>
                  <td className="px-6 py-4 align-middle">
                    <div className="font-medium text-gray-800">{food.name}</div>
                  </td>
                  <td className="px-6 py-4 align-middle text-gray-700">{food.price}</td>
                  <td className="px-6 py-4 align-middle">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                          food.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                        }`}
                        >
                      {food.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right align-middle">
                    <button
                      onClick={() => handleDelete(food.id)}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md shadow-sm hover:opacity-90"
                      >
                      <FiTrash2 /> Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
</>
  );
}
