import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import About from "./components/About";
import PointsPage from "./components/PointsPage";
import Timer from "./components/Timer";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import CTA from "./components/CTA";
function App() {
  const [hideForm, setHideForm] = useState(false);

 

 
  return (
    <div className="relative text-[#FADA5E] h-full w-full bg-gray-700">
      <Navbar />
      <HeroSection />
      <About />
      <PointsPage />
      <Timer />
      <CTA />
      <motion.form
        initial={{ x: "-150%" }}
        animate={{ x: 0 }}
        transition={{ delay: 15, duration: 1.6, ease: [0.68, -0.6, 0.32, 1.6] }}
        className={
          hideForm
            ? "hidden h-0"
            : " flex justify-center items-center flex-col  text-center fixed bg-gray-700 overflow-hidden  bottom-12 left-12 shadow-2xl z-50  p-8 rounded-lg"
        }
      >
        <IoClose
          className={
            hideForm
              ? " hidden"
              : " visible absolute top-1 right-1 cursor-pointer"
          }
          onClick={() => setHideForm(true)}
          size={40}
        />
        <h1 className="capitalize text-[4vw] leading-none mt-4">
          Flat 15% off
        </h1>
        <span className="text-xl text-gray-200 capitalize text-center ">
          enter your details and win a coupon <br />{" "}
          <span className="text-[#9A8A5B]">worth 15% off</span>{" "}
        </span>
        <div className="flex justify-center items-center flex-col">
          <input
            type="text"
            className="w-[20vw] rounded-md border-none h-12 mt-8 pl-4 outline-none text-gray-600"
            placeholder="mobile number"
          />
          <input
            type="email"
            className="w-[20vw] rounded-md border-none h-12 mt-8 pl-4 outline-none text-gray-600"
            placeholder="email "
          />
        </div>
        <button
          type="button"
          className="capitalize px-32 text-xl py-4 bg-[#FADA5E] text-gray-600 font-medium rounded-md mt-10"
        >
          win coupon
        </button>
      </motion.form>
    </div>
  );
}

export default App;
