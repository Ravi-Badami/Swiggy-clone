import React from "react";

const TypeButton = ({ button, onclick, isSelected }) => {
  return (
    <>
      <div
        className={` rounded-full  px-4 py-2 ${
          isSelected ? " bg-red-500" : "bg-gray-200"
        } `}
        onClick={onclick}
      >
        <span
          className={`${
            isSelected ? "text-white" : "text-black"
          } font-medium drop-shadow-lg`}
        >
          {button}
        </span>
      </div>
    </>
  );
};

export default TypeButton;
