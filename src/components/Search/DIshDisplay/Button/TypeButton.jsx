import React from "react";

const TypeButton = ({ button, onclick, isSelected }) => {
  return (
    <>
      <div
        className={` border  border-black ${isSelected && " bg-red-500"} `}
        onClick={onclick}
      >
        <span>{button}</span>
      </div>
    </>
  );
};

export default TypeButton;
