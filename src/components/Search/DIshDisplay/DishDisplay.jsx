import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAfterSearchApi from "../../../utils/Hooks/useAfterSearchApi";
import { useDispatch } from "react-redux";
import { updateShowCard } from "../../../utils/redux/searchSlice";

const DishDisplay = () => {
  const dispatch = useDispatch();
  const { dishId } = useParams();

  console.log(dishId);
  const navigate = useNavigate();

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
  useAfterSearchApi();

  return <div className="mt-32">DishDisplay</div>;
};

export default DishDisplay;
