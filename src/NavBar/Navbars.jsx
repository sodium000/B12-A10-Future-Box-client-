/* eslint-disable no-unused-vars */

import { Link } from "react-router";
import { motion } from "framer-motion";
import { use } from "react";
import AuthContext from "../AuthContext/AuthContext";
import ThemeToggle from "../ThemToggle/ThemToggle";
import Button from "../Button/LoginButton";
import { FiLogOut, FiPlusCircle, FiList, FiHeart } from "react-icons/fi";

const Navbars = () => {
  const { user, loading, SignOut } = use(AuthContext);

  const navLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-blue-500 transition-colors">Home</Link>
      </li>
      <li>
        <Link to="/allfood" className="hover:text-blue-500 transition-colors">Available Foods</Link>
      </li>
      {
        user ? "": <li>
        <Link to="/auth/regiestration" className="hover:text-blue-500 transition-colors">Regiestration</Link>
      </li>
      }

      {user && (
        <>
          <li>
            <Link to="/addfood" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <FiPlusCircle /> Add Food
            </Link>
          </li>
          <li>
            <Link to="/managemyfood" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <FiList /> Manage My Food
            </Link>
          </li>
          <li>
            <Link to="/myfoodrequest" className="flex items-center gap-2 hover:text-blue-500 transition-colors">
              <FiHeart /> My Requests
            </Link>
          </li>
          <li>
            <button
              onClick={SignOut}
              className="flex items-center gap-2 text-red-500 hover:text-red-600 transition-colors"
            >
              <FiLogOut /> Logout
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="  container mx-auto rounded-xl backdrop-blur-xl bg-base-100/80 shadow-md sticky top-0 z-50 border-b border-base-200 bg-linear-to-r from-blue-600/80 via-indigo-600/80 to-purple-700/80"
    >
      <div className="navbar max-h-px  px-10 sm:px-4 md:px-6">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-2"
              aria-label="Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-100 p-4 shadow-xl bg-base-100/90 backdrop-blur-md rounded-box w-56 max-h-[80vh] overflow-y-auto"
            >
              {navLinks}
            </ul>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 sm:gap-2 cursor-pointer"
          >
            <span className="text-lg sm:text-xl md:text-2xl font-bold underline">
             Plates
            </span>
              <img src="/Screenshot_4.png" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring ring-primary ring-offset-base-300 ring-offset-1 sm:ring-offset-2" alt="" />
              <span className=" italic text-fuchsia-800 text-lg sm:text-xl md:text-2xl font-bold">Share</span>
          </motion.div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 sm:gap-4 font-medium text-sm sm:text-base">
            {navLinks}
          </ul>
        </div>

        <div className="navbar-end flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>

          {loading ? (
            <span className="loading loading-spinner loading-sm sm:loading-md text-info"></span>
          ) : (
            <>
              {!user && (
                <div className="scale-90 sm:scale-100">
                  <Button />
                </div>
              )}

              {user && (
                <div className="dropdown dropdown-end">
                  <div
                    tabIndex={0}
                    role="button"
                    className="btn btn-ghost avatar p-1"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring ring-primary ring-offset-base-300 ring-offset-1 sm:ring-offset-2">
                      <img
                        alt="user avatar"
                        src={user.photoURL || "https://i.ibb.co/2kR7t7t/default-avatar.png"}
                      />
                    </div>
                  </div>

                  <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-100 p-4 shadow-xl bg-base-100/90 backdrop-blur-md rounded-box w-56 max-h-[80vh] overflow-y-auto"
                  >
                    <li className="text-center mb-2">
                      <p className="font-semibold text-sm sm:text-base truncate">
                        {user.displayName || "Anonymous"}
                      </p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                    </li>
                    <div className="divider my-1"></div>
                    <li className="sm:hidden">
                      <ThemeToggle />
                    </li>
                    {navLinks}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbars;
