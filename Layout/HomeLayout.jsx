/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navber from "../src/NavBar/Navbars";
import Banner from "../src/BannerSection/Banner";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";

const images = [
  "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
  "https://images.unsplash.com/photo-1551218808-94e220e084d2",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
];

const HomeLayout = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      5000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 🌅 HERO SECTION */}
      <div className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] w-full">
        {/* Background Slider */}
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/80" />

        <div className="relative z-10">
          <Navber />
          <Banner />
        </div>
      </div>

      <div className="relative bg-base-100   text-center z-20">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default HomeLayout;
