import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="mt-10 flex  h-[90vh] w-screen items-center justify-between  border-b border-gray-400 px-28 ">
        {/** Left */}
        <div className="borde h-[70%]  w-[58%] border-black text-start">
          <p className="text-7xl font-bold">
            Culinary artistry in every bite – welcome to TajByte
          </p>
          <div className="mt-8">
            <button className="rounded-full bg-[#F04949] p-4 px-7 font-semibold text-white drop-shadow-lg">
              Menu
            </button>

            <button className=" ml-2 rounded-full bg-[#F04949] p-4 px-7 font-semibold text-white drop-shadow-lg">
              Book a Table
            </button>
          </div>
        </div>
        {/** Right */}

        <div className="rounded-[67px h-[78%] w-[40%] overflow-hidden object-cover drop-shadow-lg">
          <div className=" h-full w-full overflow-hidden  rounded-[67px]">
            <img
              className="  h-full w-full rounded-[67px]  object-cover "
              src=" https://i.postimg.cc/nh2zFMsL/pixlr-image-generator-91feb445-215c-459d-acee-731ae3316aa9.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
