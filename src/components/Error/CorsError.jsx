import { MAIN_BUTTON } from "../../utils/color/button";

const CorsError = () => {
  return (
    <div className=" w-screen">
      <div className="    mt-[50%] flex h-screen  md:ml-[27%] md:mt-[10%] md:w-[80%] ">
        <div className="fixed ml-[15%] h-auto w-[70%] rounded-xl  p-10 shadow-xl shadow-gray-300 md:ml-0 md:h-[50%] md:w-[50%]  md:p-10 ">
          <div className="flex flex-col flex-wrap items-center justify-start gap-10 md:gap-24">
            <span className="font-semibold md:text-2xl">
              To resolve cors error click button and press allow
            </span>
            <button>
              <a
                href="https://cors-anywhere.herokuapp.com/corsdemo"
                className={`rounded-full  px-4 py-2 ${MAIN_BUTTON} font-medium text-white md:ml-2`}
              >
                Click here
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorsError;
