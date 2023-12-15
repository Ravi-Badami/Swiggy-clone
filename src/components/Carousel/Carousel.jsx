import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

const Carousel = () => {
  return (
    <div>
      <div className=" bg-gray-300 p-10 ">
        <div className=" bg mb-10 flex justify-between text-start">
          <div className="">
            <p className="text-4xl font-extrabold">Whats on you Mind</p>
          </div>
          <div className=" flex text-3xl text-sky-400 ">
            <FaArrowLeft className="mr-3 rounded-full bg-black p-1" />

            <FaArrowRight className="mr-3 rounded-full bg-black p-1" />
          </div>
        </div>

        <div className=" flex  overflow-x-auto">
          <div className="flex">
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
            <div className=" mr-16 h-36 w-36 rounded-full border border-black bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
