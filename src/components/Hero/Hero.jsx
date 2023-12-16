import React from "react";

const Hero = () => {
  return (
    <div>
      <div className="mt-10 flex h-[50vh]  w-screen items-center justify-between border-b  border-gray-400 px-5 md:h-[90vh] md:px-28 ">
        {/** Left */}
        <div className="borde h-[50%]  w-[58%] border-black  text-start md:h-[70%]">
          <p className="text-2xl font-bold md:text-7xl">
            Culinary artistry in every bite – welcome to TajByte
          </p>
          <div className="mt-4  w-[120%] md:mt-8 ">
            <button className="rounded-full bg-[#F04949] p-1 px-4 pb-2 font-semibold text-white drop-shadow-lg md:p-4 md:px-7">
              <span className="text-xs md:text-base">Menu</span>
            </button>

            <button className=" ml-2 rounded-full bg-[#F04949] p-1 px-4 pb-2  font-semibold text-white drop-shadow-lg md:p-4 md:px-7">
              <span className=" text-xs md:text-base">Book a Table</span>
            </button>
          </div>
        </div>
        {/** Right */}

        <div className="rounded-[67px w-[40%] overflow-hidden object-cover drop-shadow-lg md:h-[78%]">
          <div className=" h-full w-full overflow-hidden  rounded-[67px]">
            <img
              className="  w-full rounded-[67px] object-cover  md:h-full "
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
