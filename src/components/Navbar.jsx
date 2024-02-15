import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [show, setShow] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <div className="navbar w-full text-[#FADA5E] flex justify-between items-center   px-6 ">
      <div className="flex w-full justify-between items-center mt-4 lg:mt-0  pl-4 ">
        <h1 className=" text-[5vw] md:text-[3vw] font-semibold mr-28  ">Your Logo</h1>
        <div>
          <ul className=" hidden lg:flex justify-between gap-x-4 items-center list-none">
            {["Home", "delivery", "recipes", "about", "contact"].map(
              (item, idx) => (
                <li
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={` capitalize font-medium text-xl tracking-wider cursor-pointer ${
                    idx === active &&
                    "bg-[#8A9A5B] text-gray-300 pt-10 p-3 pb-4 rounded-bl-full rounded-br-full"
                  }  ${active === 1 || 2 || 4 ? "pb-5" : ""}`}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <div className="relative hidden lg:flex">
          <input
            placeholder='"search"'
            type="text"
            className={
              "  w-[20vw] bg-transparent  outline-none border-[1px]  border-[#8A9A5B] border-solid pr-4 py-2 px-2  rounded-full"
            }
          />
          <IoIosSearch
            size={30}
            className=" absolute  right-2 top-1 cursor-pointer"
          />
        </div>
      </div>
      <div className="relative flex py-3 pr-4" onClick={() => setShow(!show)}>
        <h1
          className={` absolute right-2 top-2 flex flex-col ${
            show ? "gap-y-2" : "gap-y-1"
          } cursor-pointer`}
        >
          <span
            className={
              show
                ? `w-6 h-[2px] bg-[#FADA5E] rotate-45 `
                : "w-6 h-[2px] bg-[#FADA5E] "
            }
          ></span>
          <span className={show ? "hidden" : "w-6 h-[2px] bg-[#FADA5E] "}></span>
          <span
            className={
              show
                ? "w-6 h-[2px] bg-[#FADA5E] -rotate-45 absolute "
                : "w-6 h-[2px] bg-[#FADA5E]"
            }
          ></span>
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
