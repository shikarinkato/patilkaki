import React from "react";
import { motion, useAnimation } from "framer-motion";

function HeroSection() {
  const btn1 = useAnimation();
  const handleHoverStart = () => {
    btn1.start({
      backgroundColor: "rgb(213,187,86)",
      transformOrigin: "bottom",
    });
  };
  const handleHoverEnd = () => {
    btn1.start({ backgroundColor: "#FADA5E", transformOrigin: "bottom" });
  };

  return (
    <div className="h-[30vh] md:h-[40vh] xl:h-screen w-full flex overflow-hidden">
      <div className="lg:pt-28 pt-12 md:pt-20 w-1/2 pl-8 md:pl-16 lg:pl-20  ">
        <div className="flex justify-between items-start flex-col gap-y-5 md:gap-0">
          <h1 className="capitalize text-[6vw]  font-semibold leading-[6vw]">
            Maa ke haath
          </h1>
          <h1 className="capitalize   text-[5vw] whitespace-nowrap   font-semibold leading-[6vw]">
            ka khana
          </h1>
          <h1 className=" border-b-2 border-b-white uppercase   text-[8vw] whitespace-nowrap font-semibold leading-none text-gray-200 tracking-wider">
            Patilkaki
          </h1>
        </div>
        <div className="pt-8 hidden  md:flex">
          <p className="text-[2vw] font-medium capitalize">
            Your one stop snacks shop for all your snacking need
          </p>
          <p className=" text-[1.6vw] font-medium text-gray-200 capitalize tracking-wide">
            Have you ever taste our{" "}
            <motion.button
              initial={{ backgroundColor: "#FADA5E" }}
              animate={btn1}
              transition={{ duration: 0.3 }}
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              className="text-gray-700 bg-[#FADA5E] hover:text-gray-200  mx-1 py-1 px-6 rounded-full hover:bg-[#9A8A5B]"
            >
              kanaji/gujiya
            </motion.button>{" "}
            ?
          </p>
        </div>
      </div>
      <div className="w-1/2 h-full  flex justify-start lg:justify-end items-start relative ">
        <motion.div
          initial={{ x: "75%" }}
          animate={{ x: 0 }}
          transition={{ duration: 2, delay: 1, ease: [0.76, 0, 0.24, 1] }}
          className=" lg:rounded-tl-full lg:rounded-bl-full  absolute lg:shadow-lg right-6   lg:top-20 md:p-6 lg:p-8 xl:p-12 md:w-[20rem] lg:w-[30rem] xl:w-[40rem]  2xl:w-[50rem] ml-24  lg:bg-[#9A8A5B] h-full"
        >
          <div className=" bg-[#9A8A5B] p-4 sm:p-12 md:p-6 lg:bg-none h-[160px] w-[160px] md:h-[200px] md:w-[200px] lg:h-[250px] lg:w-[250px] xl:h-[300px]  xl:w-[300px] 2xl:h-[350px]  2xl:w-[350px] rounded-full  overflow-hidden ">
            <img
              src="https://flexy-mobile.s3.amazonaws.com/photos/1697224071140Karanji.jpg"
              alt="gujiya/kanaji"
              className="object-contain h-full w-full rounded-full  shadow-lg"
            />
          </div>
          <div className="absolute right-28 bottom-0 lg:right-8  lg:top-20 md:top-44 xl:top-28 lg:w-1/3 text-center  z-10 ml-8 flex justify-center items-center flex-col gap-y-6">
            <h1 className=" absolute bottom-12 left-0 whitespace-nowrap text-[4vw] sm:text-[3vw] text-gray-200 font-semibold uppercase">
              15% off
            </h1>
            <h2 className="hidden md:flex text-[1.8vw] lg:text-[1.5vw] font-medium capitalize">
              on your favourite snacks
            </h2>
            <button className="absolute bottom-5  -left-[20rem]  sm:relative  orderBtn overflow-hidden bg-gray-200 text-gray-700 px-6 py-2 md:px-2 lg:py-1 lg:px-2 xl:py-2 xl:px-4   rounded-md text-[3vw] sm:text-[2vw] lg:text-[1.5vw] font-semibold">
              Order Now
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default HeroSection;
