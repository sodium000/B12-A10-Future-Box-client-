/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbars from "../src/NavBar/Navbars";
import ManageMyFood from "../src/Component/ManageMyFood/ManageMyFood";
import MyFoodReq from "../src/MyFoodRequest/MyFoodReq";
import FoodRequestApproval from "../src/Component/FoodRequestApproval/FoodRequestApproval";
import { FiList, FiHeart, FiPlusCircle, FiCheckCircle } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router";

const DashboardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("manage");

  useEffect(() => {
    // Set active tab based on current route
    if (location.pathname === "/myfoodrequest") {
      setActiveTab("requests");
    } else if (location.pathname === "/approvals") {
      setActiveTab("approvals");
    } else {
      setActiveTab("manage");
    }
  }, [location.pathname]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === "manage") {
      navigate("/managemyfood");
    } else if (tab === "requests") {
      navigate("/myfoodrequest");
    } else if (tab === "approvals") {
      navigate("/approvals");
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <Navbars />
      
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Manage your food donations and requests
            </p>
          </motion.div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <NavLink
              to="/addfood"
              className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              <FiPlusCircle className="w-5 h-5" />
              <span>Add New Food</span>
            </NavLink>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-1 inline-flex gap-2 flex-wrap">
              <button
                onClick={() => handleTabChange("manage")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === "manage"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FiList className="w-5 h-5" />
                <span className="hidden sm:inline">Manage My Foods</span>
                <span className="sm:hidden">Manage</span>
              </button>
              <button
                onClick={() => handleTabChange("requests")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === "requests"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FiHeart className="w-5 h-5" />
                <span className="hidden sm:inline">My Food Requests</span>
                <span className="sm:hidden">Requests</span>
              </button>
              <button
                onClick={() => handleTabChange("approvals")}
                className={`flex items-center gap-2 px-4 sm:px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  activeTab === "approvals"
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <FiCheckCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Approval Queue</span>
                <span className="sm:hidden">Approvals</span>
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "manage" ? (
                <div>
                  <ManageMyFood />
                </div>
              ) : activeTab === "requests" ? (
                <div>
                  <MyFoodReq />
                </div>
              ) : (
                <div>
                  <FoodRequestApproval />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

