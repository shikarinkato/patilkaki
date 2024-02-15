import React from "react";
import Video from "../assets/video/Tea.mp4";
import { MdOutlineEventNote } from "react-icons/md";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function PointsPage() {
  const swiper = useSwiper();
  return (
    <div className="h-screen w-full relative">
      <video
        src={Video}
        className="h-full w-full absolute object-fill"
        autoPlay
        muted
        loop
      />
      <div className="flex justify-center items-center flex-col relative z-50 h-full w-full bg-[rgba(32,27,27,0.1)] text-center  py-8">
        <h1 className="text-[4vw] font-semibold text-[#9A8A5B]">But,</h1>
        <h1 className="text-[4vw] font-semibold text-gray-200">
          Why should you order from us ?
        </h1>
        <div className="w-full flex justify-center items-center mt-16 px-32">
          <Swiper
            modules={[Navigation, A11y]}
            slidesPerView={1}
            navigation
            className="flex  justify-center items-center "
            autoplay
            loop
          >
            {[
              {
                icon: (
                  <MdOutlineEventNote
                    className="text-gray-200 font-normal"
                    size={150}
                  />
                ),
                name: "quality_1",
              },
              {
                icon: (
                  <MdOutlineEventNote
                    className="text-gray-200 font-normal"
                    size={150}
                  />
                ),
                name: "quality_2",
              },
              {
                icon: (
                  <MdOutlineEventNote
                    className="text-gray-200 font-normal"
                    size={150}
                  />
                ),
                name: "quality_3",
              },
              {
                icon: (
                  <MdOutlineEventNote
                    className="text-gray-200 font-normal"
                    size={150}
                  />
                ),
                name: "quality_4",
              },
              {
                icon: (
                  <MdOutlineEventNote
                    className="text-gray-200 font-normal"
                    size={150}
                  />
                ),
                name: "quality_5",
              },
            ].map((item, idx) => (
              <SwiperSlide
                className="flex justify-center items-center "
                key={idx}
              >
                <div
                  key={idx}
                  className="bg-[#9A8A5B]    text-gray-200 w-[25rem] h-[20rem] gap-4 shadow-lg text-center flex justify-center items-center flex-col p-4 rounded-xl"
                >
                  {item.icon}
                  <span className="text-3xl  font-semibold capitalize">
                    {item.name}
                  </span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default PointsPage;
