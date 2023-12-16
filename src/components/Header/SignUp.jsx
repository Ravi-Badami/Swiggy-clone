import { useState } from "react";

const SignUp = () => {
  const [register, setRegister] = useState("login");

  return (
    <div>
      <button
        className="rounded-full  bg-[#F04949] px-4 py-1 font-normal text-white drop-shadow-xl md:px-6 md:py-2 md:font-medium"
        onClick={() => {
          register === "login" ? setRegister("logout") : setRegister("login");
        }}
      >
        {register}
      </button>
    </div>
  );
};

export default SignUp;
