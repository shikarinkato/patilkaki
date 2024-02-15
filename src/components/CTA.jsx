import React from "react";

function CTA() {
  return (
    <div className="flex justify-center items-center h-[70vh] w-full bg-[#9A8A5B] py-8 px-12">
      <div className="h-full w-2/3 bg-gray-600 rounded-lg p-6 ">
        <div className="flex justify-center  items-center w-full text-center">
          {["Your Health", "Our Wealth"].map((item, idx) => (
            <div
              className="text-[3vw] whitespace-nowrap flex gap-x-3"
              key={idx}
            >
              {item.split(" ").map((item, idx) => (
                <h1
                  key={idx}
                  className={` font-semibold ${idx === 0 && "text-gray-200"}`}
                >
                  {item}
                </h1>
              ))}
              {idx === 0 && ","}
            </div>
          ))}
        </div>
        <div className="flex justify-evenly items-center w-full h-[80%]">
          <div className="w-1/2 h-full flex flex-col justify-center items-start gap-y-8 px-20">
            <h3 className="text-[2vw] font-semibold tracking-wide">
              Something for every{" "}
              <span className="py-1 px-3 rounded-full bg-gray-200 text-gray-700">
                #Ghar
              </span>
            </h3>
            {[
              "Cash on Delivery",
              "We provide you Premium Quality",
              "Hand Made",
            ].map((item, idx) => (
              <h1
                className="flex items-center text-[1.2vw] -gap-y-4 gap-x-3"
                key={idx}
              >
                <span className=" h-4 w-4 bg-[#FADA5B] rounded-full"></span>
                <span className=" capitalize  text-gray-200 font-medium">
                  {item}
                </span>
              </h1>
            ))}
          </div>
          <div className="w-1/2 h-full flex justify-center items-center flex-col gap-y-2">
            <div className="h-[250px] w-[250px] overflow-hidden rounded-lg">
              <img
                src="https://flexy-mobile.s3.amazonaws.com/photos/1705815326483Sabudana%20Fry%20CM.jpg"
                alt="sabudana_fry_img"
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-[1.7vw] font-semibold leading-none mt-3">
              Snacks Start From{" "}
            </h3>
            <h4 className="text-gray-200 text-[1.4vw] font-semibold leading-none">
              Rs 99{" "}
            </h4>
            <button className="text-[1.1vw] text-gray-700 font-medium bg-[#FADA5E] py-1 px-16 rounded-md">
              Get Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;
