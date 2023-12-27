import React from "react";
import { useParams } from "react-router-dom";
import useAfterSearchApi from "../../../utils/Hooks/useAfterSearchApi";

const DishDisplay = () => {
  const { dishId } = useParams();
  console.log(dishId);
  useAfterSearchApi();

  return <div className="mt-32">DishDisplay</div>;
};

export default DishDisplay;
