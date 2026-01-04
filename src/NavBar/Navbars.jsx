/* eslint-disable no-unused-vars */

import { Link } from "react-router";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { use } from "react";
import { useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import ThemeToggle from "../ThemToggle/ThemToggle";
import Button from "../Button/LoginButton";
import { FiLogOut, FiPlusCircle, FiList, FiHeart, FiMenu, FiX } from "react-icons/fi";

const Navbars = () => {
  const { user, loading, SignOut } = use(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 10);
  });

  const navLinks = (
    <>
      <li>
        <Link 
          to="/" 
          className="relative px-3 py-2 rounded-lg font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="relative z-10">Home</span>
          <span className="absolute inset-0 bg-linear-to-r from-yellow-400/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </li>
      <li>
        <Link 
          to="/allfood" 
          className="relative px-3 py-2 rounded-lg font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <span className="relative z-10">Available Foods</span>
          <span className="absolute inset-0 bg-linear-to-r from-yellow-400/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </Link>
      </li>
      {!user && (
        <li>
          <Link 
            to="/auth/regiestration" 
            className="relative px-3 py-2 rounded-lg font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 group"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="relative z-10">Registration</span>
            <span className="absolute inset-0 bg-linear-to-r from-yellow-400/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </li>
      )}

      {user && (
        <>
          <li>
            <Link 
              to="/addfood" 
              className="relative px-3 py-2 rounded-lg font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 group flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiPlusCircle className="relative z-10" />
              <span className="relative z-10">Add Food</span>
              <span className="absolute inset-0 bg-linear-to-r from-yellow-400/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/managemyfood" 
              className="relative px-3 py-2 rounded-lg font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 group flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiList className="relative z-10" />
              <span className="relative z-10">Manage My Food</span>
              <span className="absolute inset-0 bg-linear-to-r from-yellow-400/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li>
            <Link 
              to="/myfoodrequest" 
              className="relative px-3 py-2 rounded-lg font-medium text-white/90 hover:text-white transition-all duration-300 hover:bg-white/10 group flex items-center gap-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <FiHeart className="relative z-10" />
              <span className="relative z-10">My Requests</span>
              <span className="absolute inset-0 bg-linear-to-r from-yellow-400/20 to-orange-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                SignOut();
                setIsMobileMenuOpen(false);
              }}
              className="relative px-3 py-2 rounded-lg font-medium text-red-300 hover:text-red-100 transition-all duration-300 hover:bg-red-500/20 group flex items-center gap-2 w-full"
            >
              <FiLogOut className="relative z-10" />
              <span className="relative z-10">Logout</span>
              <span className="absolute inset-0 bg-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </li>
        </>
      )}
    </>
  );

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed top-0 left-0 right-0 w-full z-9999 transition-all duration-300 ${
        isScrolled ? 'shadow-2xl shadow-purple-500/20' : 'shadow-lg'
      }`}
    >
      <div className={`relative w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-linear-to-r from-blue-600/95 via-indigo-600/95 to-purple-700/95 backdrop-blur-xl' 
          : 'bg-linear-to-r from-blue-600/90 via-indigo-600/90 to-purple-700/90 backdrop-blur-lg'
      } border-b border-white/10`}>
        {/* Animated background gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-yellow-400/5 via-orange-500/5 to-pink-500/5 animate-pulse"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="navbar min-h-[70px] py-2">
            {/* Mobile Menu Button */}
            <div className="navbar-start">
              <div className="dropdown lg:hidden">
                <button
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost text-white hover:bg-white/20 transition-all duration-300 rounded-lg p-2"
                  aria-label="Menu"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <FiX className="h-6 w-6" />
                  ) : (
                    <FiMenu className="h-6 w-6" />
                  )}
                </button>
                {isMobileMenuOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    tabIndex={0}
                    className="menu menu-sm dropdown-content mt-3 z-10000 p-4 shadow-2xl bg-linear-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl w-64 border border-white/10 space-y-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {navLinks}
                  </motion.ul>
                )}
              </div>

              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 sm:gap-3">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-1 sm:gap-2 cursor-pointer group"
                >
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg group-hover:text-yellow-300 transition-colors duration-300">
                    Plates
                  </span>
                  <motion.img 
                    src="/Screenshot_4.png" 
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full ring-2 ring-yellow-400/50 ring-offset-2 ring-offset-transparent group-hover:ring-yellow-400 transition-all duration-300"
                    alt="PlateShare Logo"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  />
                  <span className="text-xl sm:text-2xl md:text-3xl font-bold italic text-transparent bg-clip-text bg-linear-to-r from-yellow-300 to-orange-400 drop-shadow-lg group-hover:from-yellow-200 group-hover:to-orange-300 transition-all duration-300">
                    Share
                  </span>
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal gap-1 px-1">
                {navLinks}
              </ul>
            </div>

            {/* Right Side Actions */}
            <div className="navbar-end flex items-center gap-2 sm:gap-3">
              {/* Theme Toggle */}
              <div className="hidden sm:block">
                <div className="p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                  <ThemeToggle />
                </div>
              </div>

              {loading ? (
                <div className="flex items-center justify-center p-2">
                  <span className="loading loading-spinner loading-sm text-yellow-400"></span>
                </div>
              ) : (
                <>
                  {!user && (
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="scale-90 sm:scale-100"
                    >
                      <Button />
                    </motion.div>
                  )}

                  {user && (
                    <div className="dropdown dropdown-end">
                      <motion.div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost avatar p-1 rounded-full hover:ring-2 hover:ring-yellow-400/50 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-yellow-400/50 ring-offset-2 ring-offset-transparent overflow-hidden">
                          <img
                            alt="user avatar"
                            src={user.photoURL || "https://i.ibb.co/2kR7t7t/default-avatar.png"}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </motion.div>

                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-10000 p-4 shadow-2xl bg-linear-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-xl rounded-2xl w-64 border border-white/10 space-y-2"
                      >
                        <li className="text-center mb-3 pb-3 border-b border-white/10">
                          <p className="font-semibold text-base text-white truncate">
                            {user.displayName || "Anonymous"}
                          </p>
                          <p className="text-xs text-gray-400 truncate mt-1">{user.email}</p>
                        </li>
                        <li className="sm:hidden">
                          <div className="p-2">
                            <ThemeToggle />
                          </div>
                        </li>
                        <div className="divider my-2 opacity-20"></div>
                        {navLinks}
                      </motion.ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbars;