import { useState } from "react";

const SignUp = () => {
  const [register, setRegister] = useState("login");

  return (
    <div>
      <button
        className="  rounded-full  bg-[#F04949] px-6 py-2 font-medium text-white drop-shadow-xl"
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
