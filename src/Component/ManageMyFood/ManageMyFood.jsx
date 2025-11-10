/* eslint-disable no-unused-vars */
import React, { useMemo, useState } from "react";
import { FiEdit2, FiRefreshCw, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navbars from "../../NavBar/Navbars";

// Example Food Table Component (TailwindCSS + Framer Motion + React Icons)
// Default export is a single-file React component you can drop into a project.

export default function FoodTable() {
  // sample data
  const initialFoods = useMemo(
    () => [
      {
        id: 1,
        name: "Margherita Pizza",
        img: "https://images.unsplash.com/photo-1601924582975-4d8f6a8c6b9e?w=800&q=80",
        price: "$12",
      },
      {
        id: 2,
        name: "Sushi Platter",
        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80",
        price: "$22",
      },
      {
        id: 3,
        name: "Ramen Bowl",
        img: "https://images.unsplash.com/photo-1543353071-087092ec393d?w=800&q=80",
        price: "$10",
      },
      {
        id: 4,
        name: "Avocado Toast",
        img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80",
        price: "$8",
      },
    ],
    []
  );

  const [foods, setFoods] = useState(initialFoods);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null); // selected row for editing
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  // Filtering
  const filtered = foods.filter((f) =>
    f.name.toLowerCase().includes(query.trim().toLowerCase())
  );

  function openEdit(food) {
    setSelected({ ...food });
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
    setSelected(null);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setSelected((prev) => ({ ...prev, [name]: value }));
  }

  function handleUpdate() {
    if (!selected) return;
    setIsSaving(true);
    // simulate API call
    setTimeout(() => {
      setFoods((prev) => prev.map((p) => (p.id === selected.id ? selected : p)));
      setIsSaving(false);
      closeModal();
    }, 700);
  }

  function handleRefresh() {
    // reset to initial example data
    setFoods(initialFoods);
    setQuery("");
  }

  return (
    <>
    <Navbars></Navbars>
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Delicious Menu</h2>

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
              <th className="px-6 py-3 text-right text-sm font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {filtered.length === 0 ? (
                <tr>
                <td colSpan={4} className="p-6 text-center text-gray-500">
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
                  <td className="px-6 py-4 text-right align-middle">
                    <div className="inline-flex gap-2">
                      <button
                        onClick={() => openEdit(food)}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:opacity-95"
                        >
                        <FiEdit2 /> Edit
                      </button>

                      <button
                        onClick={() => alert(`Pretend updating ${food.name}...`)}
                        className="inline-flex items-center gap-2 px-3 py-2 border rounded-md hover:bg-gray-50"
                        >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Modal for editing */}
      <AnimatePresence>
        {isModalOpen && selected && (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
            >
            <motion.div
              initial={{ y: 20, scale: 0.98 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 20, scale: 0.98 }}
              className="bg-white rounded-2xl shadow-2xl max-w-xl w-full p-6"
              >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold">Edit Food</h3>
                  <p className="text-sm text-gray-500">Change name or image URL, then click Update.</p>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-700"
                  >
                  ✕
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-4">
                <label className="text-sm text-gray-600">Name</label>
                <input
                  name="name"
                  value={selected.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-200"
                  />

                <label className="text-sm text-gray-600">Image URL</label>
                <input
                  name="img"
                  value={selected.img}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-200"
                  />

                <label className="text-sm text-gray-600">Price</label>
                <input
                  name="price"
                  value={selected.price}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-200"
                  />

                <div className="flex items-center gap-4 justify-end mt-2">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 rounded-lg border hover:bg-gray-50"
                    >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdate}
                    disabled={isSaving}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white disabled:opacity-60"
                    >
                    {isSaving ? "Saving..." : "Update"}
                  </button>
                </div>

                <div className="mt-4">
                  <label className="text-sm text-gray-600">Preview</label>
                  <div className="mt-2 flex items-center gap-4">
                    <div className="w-24 h-16 rounded overflow-hidden">
                      <img src={selected.img} alt="preview" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-medium">{selected.name}</div>
                      <div className="text-sm text-gray-600">{selected.price}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
        </>
  );
}
