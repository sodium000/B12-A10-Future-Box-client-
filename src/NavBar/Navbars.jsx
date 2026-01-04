/* eslint-disable no-unused-vars */
import { NavLink } from "react-router";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { use, useState } from "react";
import AuthContext from "../AuthContext/AuthContext";
import ThemeToggle from "../ThemToggle/ThemToggle";
import Button from "../Button/LoginButton";
import { FiLogOut, FiPlusCircle, FiList, FiHeart, FiMenu, FiX, FiHome, FiGrid, FiInfo, FiMapPin, FiBriefcase, FiUser } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";


const Navbars = () => {
  const { user, loading,Logout } = use(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();


  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const linkStyles = ({ isActive }) =>
    `relative flex items-center gap-2 px-3 py-2 rounded-full font-medium transition-all duration-300 text-sm ${isActive
      ? "text-yellow-400 bg-white/10 shadow-[inset_0_0_10px_rgba(250,204,21,0.1)]"
      : "text-white/70 hover:text-white hover:bg-white/5"
    }`;

  const publicLinks = (
    <>
      <li>
        <NavLink to="/" className={linkStyles} onClick={() => setIsMobileMenuOpen(false)}>
          {({ isActive }) => (
            <>
              <FiHome /> <span>Home</span>
              {isActive && <motion.div layoutId="activeNav" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_8px_#facc15]" />}
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/allfood" className={linkStyles} onClick={() => setIsMobileMenuOpen(false)}>
          {({ isActive }) => (
            <>
              <FiGrid /> <span>Available Foods</span>
              {isActive && <motion.div layoutId="activeNav" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_8px_#facc15]" />}
            </>
          )}
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={linkStyles} onClick={() => setIsMobileMenuOpen(false)}>
          {({ isActive }) => (
            <>
              <FiInfo /> <span>About</span>
              {isActive && <motion.div layoutId="activeNav" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-yellow-400 shadow-[0_0_8px_#facc15]" />}
            </>
          )}
        </NavLink>
      </li>
    </>
  );
  const extraLinks = (
    <>
      <li>
        <NavLink to="/location" className={linkStyles} onClick={() => setIsMobileMenuOpen(false)}>
          <FiMapPin /> <span>Office</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/career" className={linkStyles} onClick={() => setIsMobileMenuOpen(false)}>
          <FiBriefcase /> <span>Career</span>
        </NavLink>
      </li>
    </>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 w-full z-9999 transition-all duration-500 ${isScrolled ? 'py-2' : 'py-4'}`}
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className={`relative flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300 border border-white/10 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-xl shadow-2xl' : 'bg-black/50 backdrop-blur-md shadow-lg'
          }`}>

          <NavLink to="/" className="flex items-center gap-2 group shrink-0">
            <motion.div whileHover={{ rotate: 15 }} className="w-9 h-9 bg-linear-to-tr from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg shadow-orange-500/20">
              <img src="/Screenshot_4.png" className="w-7 h-7 rounded-md object-cover" alt="L" />
            </motion.div>
            <span className="text-lg font-bold text-white tracking-tight hidden md:block">
              Plates<span className="text-yellow-400">Share</span>
            </span>
          </NavLink>

          <ul className="hidden xl:flex items-center gap-1 list-none">
            {publicLinks}
            {extraLinks}
          </ul>

          <div className="flex items-center gap-3">
            {loading ? (
              <span className="loading loading-spinner loading-sm text-yellow-400"></span>
            ) : user ? (
              <div className="flex items-center gap-2 sm:gap-4">
                <NavLink to="/dashboard">
                  {({ isActive }) => (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs transition-all shadow-lg ${isActive ? "bg-white text-orange-600" : "bg-linear-to-r from-yellow-400 to-orange-500 text-slate-900"
                        }`}
                    >
                      <MdDashboard  className="text-sm" />
                      <span className="hidden sm:inline">Dashboard</span>
                    </motion.button>
                  )}
                </NavLink>

                <NavLink to="/addfood">
                  {({ isActive }) => (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-bold text-xs transition-all shadow-lg ${isActive ? "bg-white text-orange-600" : "bg-linear-to-r from-yellow-400 to-orange-500 text-slate-900"
                        }`}
                    >
                      <FiPlusCircle className="text-sm" />
                      <span className="hidden sm:inline">Add Food</span>
                    </motion.button>
                  )}
                </NavLink>

                <div className="dropdown dropdown-end">
                  <div tabIndex={0} role="button" className="p-0.5 rounded-full bg-linear-to-tr from-yellow-400 to-orange-500 hover:scale-105 transition-transform">
                    <div className="w-9 h-9 rounded-full border-2 border-slate-900 overflow-hidden">
                      <img src={user.photoURL || "https://i.ibb.co/2kR7t7t/default-avatar.png"} alt="User" />
                    </div>
                  </div>
                  <ul tabIndex={0} className="dropdown-content mt-4 z-100 p-2 shadow-2xl bg-slate-900 border border-white/10 rounded-2xl w-64 backdrop-blur-2xl">
                    <div className="px-4 py-3 border-b border-white/5 mb-2">
                      <p className="text-sm font-bold text-white truncate">{user.displayName}</p>
                      <p className="text-[10px] text-yellow-400/70 uppercase tracking-widest font-black mt-0.5">Verified Donor</p>
                    </div>

                    <li>
                      <NavLink to="/profile" className={({ isActive }) => `flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all ${isActive ? "bg-yellow-400/10 text-yellow-400" : "text-white/70 hover:bg-white/5"}`}>
                        <FiUser /> My Profile
                      </NavLink>
                    </li>

                    <div className="xl:hidden">
                      <div className="divider my-1 opacity-5"></div>
                      {extraLinks}
                    </div>

                    <div className="divider my-1 opacity-5"></div>
                    <li className="px-4 py-2 flex justify-between items-center text-xs text-white/50">
                      <span>Dark Mode</span>
                      <ThemeToggle />
                    </li>
                    <li>
                      <button onClick={Logout} className="flex items-center gap-3 w-full px-4 py-2.5 text-red-400 hover:bg-red-500/10 rounded-lg text-sm mt-1 transition-colors">
                        <FiLogOut /> Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <div className="hidden md:block"><ThemeToggle /></div>
                <Button />
              </div>
            )}

            <button className="xl:hidden p-2 text-white bg-white/5 rounded-lg hover:bg-white/10" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden px-4 mt-2"
          >
            <div className="bg-slate-900/95 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-xl">
              <ul className="flex flex-col gap-2 list-none">
                {publicLinks}
                {extraLinks}
                {!user && (
                  <li className="pt-2 border-t border-white/5">
                    <NavLink to="/auth/regiestration" className={linkStyles}>Registration</NavLink>
                  </li>
                )}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbars;