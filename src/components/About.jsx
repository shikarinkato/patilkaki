import React from "react";

function About() {
  return (
    <div className="h-screen w-full bg-[#9A8A5B] rounded-tl-3xl rounded-tr-3xl">
      <div className="h-full w-full flex justify-center items-center">
        <div className="bg-gray-600 h-3/4 w-3/4 rounded-2xl shadow-xl shadow-[#FADA5E]">
          <div className="h-full w-full text-center p-4">
            <h1 className="text-[4vw] font-semibold text-gray-200">
              About{" "}
              <span className="text-[#FADA5E] uppercase border-b-2 border-b-[#FADA5E]">
                Patilkaki
              </span>
            </h1>
            <span className="text-[1.2vw] font-medium w-2/3 text-gray-200 inline-block">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
              quis voluptates adipisci optio fuga asperiores.
            </span>

            <div className="px-6 py-6 h-2/3 flex justify-between items-center gap-x-4">
              <div className="w-1/3 h-full flex gap-y-4 flex-col items-center justify-center bg-gray-400 rounded-xl">
                <div className="h-auto w-[200px] rounded-full overflow-hidden mb-4">
                  <img
                    src="https://patilkaki.com/assets/logo-small-7d516641.jpeg"
                    alt="logo"
                  />
                </div>
                <h1 className="leading-none text-[2vw] font-semibold">
                  Founder_Name
                </h1>
              </div>
              <div className="w-2/3 h-full flex flex-col text-gray-700 justify-between items-start gap-y-3 bg-[#FADA5E] p-4 rounded-xl">
                <p className="w-full text-xl text-left font-medium ">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
                  odit perferendis ratione facilis laborum. Animi facilis
                  reiciendis dicta quibusdam at. Quibusdam qui dolorem harum
                  voluptates voluptatum natus repellat id, officia voluptatem
                  aliquid tenetur, saepe molestiae assumenda cupiditate dolor
                  itaque nisi quasi sed vel incidunt libero cum ullam modi
                  voluptate! Aliquid recusandae soluta labore tempora numquam
                  dolores similique iusto. Et, aut.
                </p>
                <h1 className="text-[2vw] font-semibold uppercase ">
                  Chef_Name
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
