/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AuthContext from "../../AuthContext/AuthContext";

export default function FoodRequestApproval() {
  const { user } = use(AuthContext);
  const [loading, setLoading] = useState(true);
  const [FoodList, setFoodList] = useState([]);
  const [notification, setNotification] = useState(null);

  const getClasses = (statues) => {
    if (statues === "Accepted")
      return { text: "text-green-700", bg: "bg-green-100", badgeBg: "bg-green-100", badgeText: "text-green-800" };
    if (statues === "Rejected")
      return { text: "text-red-700", bg: "bg-red-100", badgeBg: "bg-red-100", badgeText: "text-red-800" };
    return { text: "text-gray-500", bg: "bg-white", badgeBg: "bg-yellow-100", badgeText: "text-yellow-800" };
  };

  const fetchAllFoodRequests = async () => {
    try {
      setLoading(true);
      // First, fetch all foods where the user is the donor
      const foodsRes = await fetch(`https://b12-a10-future-box-server-eight.vercel.app/food/myfood?email=${user?.email}`, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        }
      });
      const foods = await foodsRes.json();
      
      if (!Array.isArray(foods) || foods.length === 0) {
        setFoodList([]);
        return;
      }

      // Then fetch requests for each food item
      const allRequests = [];
      for (const food of foods) {
        try {
          const reqRes = await fetch(`https://b12-a10-future-box-server-eight.vercel.app/food/reqlist/${food._id}`);
          const requests = await reqRes.json();
          if (Array.isArray(requests)) {
            allRequests.push(...requests);
          }
        } catch (error) {
          console.error(`Error fetching requests for food ${food._id}:`, error);
        }
      }
      
      setFoodList(allRequests);
    } catch (error) {
      console.error("Error fetching food requests:", error);
      setFoodList([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchAllFoodRequests();
    }
  }, [user?.email]);

  const handleAction = async (id, action) => {
    try {
      const res = await fetch(`https://b12-a10-future-box-server-eight.vercel.app/food/requpdate/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          statues: action
        }),
      });
      const updated = await res.json();
      console.log(updated);
      setNotification(`Request ${action.toLowerCase()} successfully!`);
      setTimeout(() => setNotification(null), 3000);
      fetchAllFoodRequests();
    } catch (error) {
      alert("Update failed.");
    }
  };

  if (!user?.email) {
    return (
      <div className="text-center py-10 text-gray-500">
        Please log in to view food requests.
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 px-6 py-3 rounded-xl shadow-2xl bg-white dark:bg-gray-800 text-gray-800 dark:text-white font-semibold z-50"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white dark:text-white mb-2">
          Food Request Approval Queue
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Review and manage food requests for your donations
        </p>
      </div>

      {loading ? (
        <div className="text-center py-10 text-gray-100 dark:text-gray-100">
          Loading food requests...
        </div>
      ) : FoodList.length === 0 ? (
        <div className="text-center py-10">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No food requests yet. Requests will appear here when users request your donated foods.
            </p>
          </div>
        </div>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead className="bg-indigo-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Requester
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Item
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Location
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Donor Name
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-center text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {FoodList.map(({ _id, Req_Name, foodName, Donor_name, statues, ReqLoaction }) => {
                  const c = getClasses(statues);
                  const disabled = statues !== "Pending";
                  return (
                    <motion.tr
                      key={_id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={!disabled ? "hover:bg-gray-50 dark:hover:bg-gray-700 transition" : ""}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {Req_Name}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {foodName}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {ReqLoaction}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {Donor_name}
                      </td>
                      <td className={`py-4 px-6 text-sm text-center font-medium ${c.text} ${c.bg}`}>
                        {statues}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col sm:flex-row justify-center items-stretch sm:items-center gap-2">
                          <button
                            onClick={() => handleAction(_id, "Accepted")}
                            disabled={disabled}
                            className={`bg-green-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 text-sm ${
                              disabled
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-green-600 hover:shadow-lg"
                            }`}
                          >
                            Accept
                          </button>
                          <button
                            onClick={() => handleAction(_id, "Rejected")}
                            disabled={disabled}
                            className={`bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 text-sm ${
                              disabled
                                ? "opacity-50 cursor-not-allowed"
                                : "hover:bg-red-600 hover:shadow-lg"
                            }`}
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {FoodList.map(({ _id, Req_Name, foodName, statues, Donor_name, ReqLoaction }) => {
              const c = getClasses(statues);
              const disabled = statues !== "Pending";
              return (
                <motion.div
                  key={_id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white dark:bg-gray-800 shadow-xl rounded-xl p-4 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-lg font-bold text-gray-900 dark:text-white">
                      Requester: <span className="font-normal">{Req_Name}</span>
                    </div>
                    <div className={`px-3 py-1 text-sm font-semibold rounded-full ${c.badgeBg} ${c.badgeText}`}>
                      {statues}
                    </div>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">Food Name:</span> {foodName}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-2">
                    <span className="font-medium">Donor Name:</span> {Donor_name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mb-4">
                    <span className="font-medium">Location:</span> {ReqLoaction}
                  </div>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => handleAction(_id, "Accepted")}
                      disabled={disabled}
                      className={`flex-1 text-white font-bold py-2 rounded-lg shadow-md transition duration-300 ${
                        disabled
                          ? "bg-gray-400 opacity-80 cursor-not-allowed"
                          : "bg-green-500 hover:bg-green-600 hover:shadow-lg"
                      }`}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleAction(_id, "Rejected")}
                      disabled={disabled}
                      className={`flex-1 text-white font-bold py-2 rounded-lg shadow-md transition duration-300 ${
                        disabled
                          ? "bg-gray-400 opacity-80 cursor-not-allowed"
                          : "bg-red-500 hover:bg-red-600 hover:shadow-lg"
                      }`}
                    >
                      Reject
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

