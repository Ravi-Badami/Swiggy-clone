/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAfterSearchApi from "../../../utils/Hooks/useAfterSearchApi";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDisplayCategory,
  updateShowCard,
} from "../../../utils/redux/searchSlice";
import CardDishDisplay from "./CardDishDisplay";
import TypeButton from "./Button/TypeButton";
import SearchBody from "./Body/SearchBody";

const DishDisplayMain = () => {
  const dispatch = useDispatch();
  const category = useSelector((store) => store.search.displayCategory);

  const { dishId } = useParams();

  // console.log(dishId);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(category);

  useEffect(() => {
    // TODO:Remove the data of getMovieNames and getMovie from the redux store if you go back to the browse page
    const handlePopState = () => {
      // This function will be called when the user clicks the browser's back button
      // You can add your custom logic for handling the back button here
      dispatch(updateShowCard(false));
      navigate("/");
    };

    // Add the event listener for the popstate event
    window.addEventListener("popstate", handlePopState);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);
  const data = useAfterSearchApi(dishId);

  const handleOnClick = (click) => {
    setSelected(click);
    dispatch(updateDisplayCategory(click));
    console.log("clicked");
  };

  if (!data) return;

  return (
    <div className=" w-2/3  ">
      <div className="fixed flex gap-2  ">
        <TypeButton
          button="Restaurant"
          onclick={() => handleOnClick("Restaurant")}
          isSelected={selected === "Restaurant"}
        />
        <TypeButton
          button="Dish"
          onclick={() => handleOnClick("Dish")}
          isSelected={selected === "Dish"}
        />
      </div>
      <div
        className="
      "
      >
        <SearchBody />
      </div>
      {/* <div className="relative">{data && <CardDishDisplay data={data} />}</div> */}
    </div>
  );
};

export default DishDisplayMain;
