/* eslint-disable no-unused-vars */
import React from "react";
import { use } from "react";
import { motion } from "framer-motion";
import Navbars from "../../NavBar/Navbars";
import AuthContext from "../../AuthContext/AuthContext";
import { FiUser, FiMail, FiCheckCircle, FiCalendar, FiShield } from "react-icons/fi";

export default function Profile() {
  const { user } = use(AuthContext);

  if (!user) {
    return (
      <>
        <Navbars />
        <div className="min-h-screen flex items-center justify-center pt-24">
          <div className="text-center text-gray-500">
            <p>Please log in to view your profile.</p>
          </div>
        </div>
      </>
    );
  }

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A";
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      <Navbars />
      <div className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2">
              My Profile
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              View and manage your account information
            </p>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
          >
            {/* Profile Header */}
            <div className="bg-linear-to-r from-indigo-600 to-purple-600 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="relative">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white dark:border-gray-800 shadow-lg overflow-hidden">
                    <img
                      src={user.photoURL || "https://i.ibb.co/2kR7t7t/default-avatar.png"}
                      alt={user.displayName || "User"}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {user.emailVerified && (
                    <div className="absolute bottom-0 right-0 bg-green-500 rounded-full p-1.5 border-2 border-white dark:border-gray-800">
                      <FiCheckCircle className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {user.displayName || "User"}
                  </h2>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-indigo-100">
                    <FiShield className="w-4 h-4" />
                    <span className="text-sm font-medium">Verified Donor</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Details */}
            <div className="p-6 sm:p-8">
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FiMail className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Email Address
                    </p>
                    <p className="text-base font-semibold text-gray-900 dark:text-white break-all">
                      {user.email || "N/A"}
                    </p>
                    {user.emailVerified && (
                      <div className="flex items-center gap-1 mt-2">
                        <FiCheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* User ID */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                    <FiUser className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                      User ID
                    </p>
                    <p className="text-sm font-mono text-gray-900 dark:text-white break-all">
                      {user.uid}
                    </p>
                  </div>
                </div>

                {/* Account Created */}
                {user.metadata?.creationTime && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <FiCalendar className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Member Since
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {formatDate(user.metadata.creationTime)}
                      </p>
                    </div>
                  </div>
                )}

                {/* Last Sign In */}
                {user.metadata?.lastSignInTime && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <FiCalendar className="w-5 h-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Last Sign In
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white">
                        {formatDate(user.metadata.lastSignInTime)}
                      </p>
                    </div>
                  </div>
                )}

                {/* Provider Info */}
                {user.providerData && user.providerData.length > 0 && (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <FiShield className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">
                        Sign In Method
                      </p>
                      <p className="text-base font-semibold text-gray-900 dark:text-white capitalize">
                        {user.providerData[0].providerId === "google.com"
                          ? "Google"
                          : user.providerData[0].providerId === "password"
                          ? "Email & Password"
                          : user.providerData[0].providerId}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Additional Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
              Account Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                <p className="text-sm text-gray-500 dark:text-gray-400">Account Status</p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400 mt-1">
                  Active
                </p>
              </div>
              <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                <p className="text-sm text-gray-500 dark:text-gray-400">Email Status</p>
                <p className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                  {user.emailVerified ? "Verified" : "Not Verified"}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

