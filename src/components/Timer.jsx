import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Timer() {
  const [sec, setSec] = useState(60);

  const Ref = useRef(null);

  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    console.log(seconds);
    return {
      total,
      hours,
      minutes,
      seconds,
    };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    if (total >= 0) {
      // update the timer
      // check if less than 10 then we need to
      // add '0' at the beginning of the variable
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    // If you adjust it you should also need to
    // adjust the Endtime formula we are about
    // to code next
    setTimer("12:00:00");

    // If you try to remove this line the
    // updating of timer Variable will be
    // after 1000ms or 1sec
    if (Ref.current) clearInterval(Ref.current);
    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();

    // This is where you need to adjust if
    // you entend to add more time
    deadline.setHours(deadline.getHours() + 12);
    console.log(deadline.getHours());
    return deadline;
  };

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    clearTimer(getDeadTime());
  }, []);

  // Another way to call the clearTimer() to start
  // the countdown is via action event from the
  // button first we create function to be called
  // by the button
  const onClickReset = () => {
    clearTimer(getDeadTime());
  };

  return (
    <div className="h-screen w-full">
      <div className="h-full w-full flex items-center flex-col p-8">
        <h1 className="text-[6vw] font-semibold uppercase">Hurry up,</h1>
        <div className="w-1/2 h-[17vh]">
          <Swiper
            modules={[Autoplay, A11y]}
            slidesPerView={1}
            className="flex justify-center items-center w-2/3 h-full"
            autoplay={true}
            loop
          >
            {[
              " Lorem ipsum dolor sit amet consectetur  TAGLINE_01",
              " Lorem ipsum dolor sit amet consectetur  TAGLINE_02",
              " Lorem ipsum dolor sit amet consectetur  TAGLINE_03",
              " Lorem ipsum dolor sit amet consectetur  TAGLINE_04",
            ].map((item, idx) => (
              <SwiperSlide className=" w-full h-2/3 flex justify-center items-center p-4">
                <h1
                  key={idx}
                  className="text-[1.3vw] font-medium text-center cursor-pointer"
                >
                  {item}
                </h1>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="py-8 flex justify-center items-center flex-col  bg-gray-200 rounded-md px-6">
          <span className="text-xl font-semibold text-gray-700 capitalize">
            Don't you like our{" "}
            <span className="text-gray-200 bg-[#9A8A5B] py-1 rounded-full px-2">
              delicious
            </span>{" "}
            handmade modak
          </span>
          <span className="text-[1.5vw] text-[#9A8A5B] capitalize font-semibold ">
            if yes
          </span>
          <div className="  bg-gray-600  rounded-lg mt-12">
            <div className="flex justify-center items-center w-full text-[5vw] font-medium">
              {timer.split(":").map((item, idx) => (
                <>
                  <h1 className=" font-medium bg mx-4" key={idx}>
                    {item}
                  </h1>
                  {idx !== 2 && (
                    <span key={idx} className="mb-2">
                      :
                    </span>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <button className="text-[1.5vw]  bg-[#FADA5E] py-1  px-28 rounded-md font-medium text-gray-600">
            Hurry Up
          </button>
        </div>
        <div className="absolute bottom-2 "></div>
      </div>
    </div>
  );
}

export default Timer;
