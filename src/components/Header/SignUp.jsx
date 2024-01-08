import { useState } from "react";

const SignUp = () => {
  const [register, setRegister] = useState("login");

  return (
    <div>
      <button
        className="rounded-full  bg-[#F04949] px-4 py-1 font-normal text-white outline-none drop-shadow-xl md:px-6 md:py-2  md:font-medium"
        onClick={() => {
          register === "login" ? setRegister("logout") : setRegister("login");
        }}
      >
        <div className="w-10 ">{register}</div>
      </button>
    </div>
  );
};

export default SignUp;
