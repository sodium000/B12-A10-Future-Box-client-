/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { use, useEffect, useState } from "react";
import { FiEdit2, FiRefreshCw, FiSearch } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Navbars from "../../NavBar/Navbars";
import AuthContext from "../../AuthContext/AuthContext";
import { MdDelete } from "react-icons/md";

export default function FoodTable() {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchFoods = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:3000/food/myfood?email=${user?.email}`
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

  const filtered = foods.filter((f) =>
    f.Food_name?.toLowerCase().includes(query.trim().toLowerCase())
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

  async function handleUpdate() {
    if (!selected) return;
    setIsSaving(true);
    try {
      const res = await fetch(`http://localhost:3000/food/update/${selected._id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Food_name: selected.Food_name,
          FoodImag: selected.FoodImag,
          Food_serve: selected.Food_serve,
        }),
      });
      const updated = await res.json();
      fetchFoods()
      setFoods((prev) =>
        prev.map((f) => (f._id === selected._id ? { ...f, ...updated } : f))
      );
      closeModal();
    } catch (error) {
      alert("Update failed.");
    } finally {
      setIsSaving(false);
    }
  }

  async function handleDelete(id) {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food item?"
    );
    if (!confirmDelete) return;

    setIsDeleting(true);
    try {
      const res = await fetch(`http://localhost:3000/food/${id}`, {
        method: "DELETE",
      });
      const result = await res.json();

      if (result.deletedCount > 0 || result.success) {
        fetchFoods()
        setFoods((prev) => prev.filter((food) => food._id !== id));
      } else {
        alert("Failed to delete the item.");
      }
    } catch (error) {
      console.error("Error deleting food:", error);
      alert("Error deleting item.");
    } finally {
      setIsDeleting(false);
    }
  }

  return (
    <>
      <Navbars />
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">My Added Foods</h2>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
                <FiSearch />
              </span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search foods..."
                className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-300 outline-none w-full"
              />
            </div>

            <button
              onClick={fetchFoods}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-100 bg-white shadow-sm text-gray-700 transition duration-150 ease-in-out w-full sm:w-auto"
              title="Refresh"
            >
              <FiRefreshCw className="w-4 h-4" />{" "}
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-500 py-10">Loading foods...</p>
        ) : filtered.length === 0 ? (
          <p className="text-center text-gray-500 py-10">No foods found.</p>
        ) : (
          <div className="bg-white shadow-xl rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Image
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Food Name
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider hidden md:table-cell">
                      Donor
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Serve
                    </th>
                    <th className="px-4 sm:px-6 py-3 text-center text-xs font-medium text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filtered.map((food) => (
                    <tr
                      key={food._id}
                      className="hover:bg-indigo-50/20 transition duration-150 ease-in-out"
                    >
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                        <div className="w-16 h-12 rounded overflow-hidden shadow-md">
                          <img
                            src={food.FoodImag}
                            alt={food.Food_name}
                            className="object-cover w-full h-full"
                          />
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap align-middle">
                        <div className="text-sm font-medium text-gray-900">
                          {food.Food_name}
                        </div>
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap align-middle text-sm text-gray-600 hidden md:table-cell">
                        {food.Donor_name}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap align-middle text-sm text-gray-600">
                        {food.Food_serve}
                      </td>
                      <td className="px-4 sm:px-6 py-4 whitespace-nowrap justify-items-center">
                        <div className="flex flex-col sm:flex-row justify-end items-stretch sm:items-center gap-2">
                          <button
                            onClick={() => openEdit(food)}
                            className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs sm:text-sm bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition duration-150 ease-in-out"
                            title="Edit Food"
                          >
                            <FiEdit2 className="w-4 h-4" />{" "}
                            <span className="hidden sm:inline">Edit</span>
                          </button>
                          <button
                            onClick={() => handleDelete(food._id)}
                            disabled={isDeleting}
                            className="inline-flex items-center justify-center gap-1 px-3 py-1.5 text-xs sm:text-sm bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition duration-150 ease-in-out disabled:opacity-50"
                            title="Delete Food"
                          >
                            <MdDelete className="w-4 h-4" />{" "}
                            <span className="hidden sm:inline">
                              {isDeleting ? "Deleting..." : "Delete"}
                            </span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ✅ Edit Modal */}
        <AnimatePresence>
          {isModalOpen && selected && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            >
              <motion.div
                initial={{ y: 20, scale: 0.95 }}
                animate={{ y: 0, scale: 1 }}
                exit={{ y: 20, scale: 0.95 }}
                className="bg-white rounded-xl shadow-2xl max-w-lg w-full p-4 sm:p-6 mx-auto overflow-y-auto max-h-[90vh]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">
                      Edit Food
                    </h3>
                    <p className="text-sm text-gray-500">
                      Update your food details below.
                    </p>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-700 p-1"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Food Name
                    </label>
                    <input
                      name="Food_name"
                      value={selected.Food_name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Food Image URL
                    </label>
                    <input
                      name="FoodImag"
                      value={selected.FoodImag}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Serve
                    </label>
                    <input
                      name="Food_serve"
                      value={selected.Food_serve}
                      onChange={handleChange}
                      type="number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>

                  <div className="flex items-center gap-4 justify-end mt-2 pt-4 border-t border-gray-100">
                    <button
                      onClick={closeModal}
                      className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition duration-150"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdate}
                      disabled={isSaving}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white shadow-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition duration-150"
                    >
                      {isSaving ? "Saving..." : "Update"}
                    </button>
                  </div>

                  <div className="mt-4 p-3 border rounded-lg bg-gray-50">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preview
                    </label>
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-14 rounded-md overflow-hidden ring-1 ring-indigo-200">
                        <img
                          src={selected.FoodImag}
                          alt="preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 text-sm">
                          {selected.Food_name}
                        </div>
                        <div className="text-xs text-gray-600">
                          Serve: {selected.Food_serve}
                        </div>
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
