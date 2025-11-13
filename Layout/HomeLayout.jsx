/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Navber from "../src/NavBar/Navbars";
import Banner from "../src/BannerSection/Banner";
import { motion, AnimatePresence } from "framer-motion";
import { Outlet } from "react-router";

const images = [
  "https://i.ibb.co/cckQX6z8/hunger-1.png",
  "https://i.ibb.co/7tJYhJmm/a-child-with-a-cracked-cup-waiting-in-line-at-a-water-distribution-point-in-a-rural-village-photo.jpg",
  "https://i.ibb.co/DgWF0CwB/ai-generated-poor-kids-standing-in-line-holding-empty-pots-free-photo.jpg",
  "https://i.ibb.co/B29TntWg/Getty-Images-1952235268.webp",
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
      <div className="relative min-h-[70vh] sm:min-h-[80vh] lg:min-h-[90vh] w-full">
        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-full object-fill"
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
