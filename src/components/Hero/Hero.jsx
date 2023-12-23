import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <>
      <div className=" mt-20 flex h-[30vh] w-screen  select-none justify-between  border-b border-gray-400 px-5 py-[10%]  md:mt-10 md:h-[90vh]  md:items-center md:px-28 md:py-0 ">
        {/** Left */}
        <div className=" borde   w-[43%] border-black pl-5 text-start md:h-[70%]">
          <p className="text-2xl font-bold md:text-7xl">
            Culinary artistry in every bite – welcome to TajByte
          </p>
          <div className="mt-4  w-[120%] md:mt-8 ">
            <HeroButton button={"Menu"} />
            <HeroButton button={"Book A Table"} />
          </div>
        </div>
        {/** Right */}

        <div className="rounded-[67px w-[40%] overflow-hidden object-cover drop-shadow-lg md:h-[78%]">
          <div className=" h-full w-full overflow-hidden  rounded-[67px]">
            {/* <img
              className="  w-full rounded-[67px] object-cover  md:h-full "
              src=" https://i.postimg.cc/nh2zFMsL/pixlr-image-generator-91feb445-215c-459d-acee-731ae3316aa9.png"
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
