const AboutUs = () => {
  return (
    <div>
      <div className="flex h-[90vh] items-center justify-around  p-5 px-16 pl-10">
        {/** Left */}
        <div className="h-[80%] w-1/2 ">
          <img
            className="h-[100%] w-11/12 rounded-[60px]"
            src=" https://i.postimg.cc/DyYQd6J9/pixlr-image-generator-56ecd33b-1e1f-4d1a-9805-e41153bb03d7.png"
            alt=""
          />
        </div>

        {/** Right */}
        <div className=" flex h-[80%] w-1/2   flex-col items-start justify-center gap-8 ">
          <div className="w-7/12  text-start">
            <span className=" text-7xl font-bold">
              About us <span className=" text-red-600">TAJ</span>BITE
            </span>
          </div>
          <div className=" text-start">
            <span className="text-2xl font-semibold">
              At TajByte, indulge in a culinary journey where ancient Indian
              flavors meet modern delights – a perfect fusion of Vedic cuisine,
              pizza, and sweet treats.
            </span>
          </div>
          <div className="">
            <button className="  rounded-full  bg-[#F04949] px-7 py-3 font-medium text-white drop-shadow-xl">
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
