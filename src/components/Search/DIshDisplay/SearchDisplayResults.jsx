/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAfterSearchApi from "../../../utils/Hooks/useAfterSearchApi";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCurrentButton,
  updateShowCard,
} from "../../../utils/redux/searchSlice";

import TypeButton from "./Button/TypeButton";
import SearchBody from "./Body/SearchBody";

const SearchDisplayResults = () => {
  const dispatch = useDispatch();
  // const category = useSelector((store) => store.search.cardCategory);
  // const keyboardCat = useSelector((store) => store.search.keyboardCategory);
  const currentButton = useSelector((store) => store.search.currentButton);

  const { dishId } = useParams();

  // console.log(dishId);
  const navigate = useNavigate();
  const [selected, setSelected] = useState(currentButton);

  useEffect(() => {
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

  useEffect(() => {
    setSelected(currentButton);
  }, [currentButton]);
  const data = useAfterSearchApi(dishId);

  const handleOnClick = (click) => {
    console.log("click");
    setSelected(click);
    dispatch(updateCurrentButton(click));
    // dispatch(updateDisplayCategory(click));
    // if (keyboardCat) {
    //   dispatch(updateKeyboardCategory(click));
    // }
  };

  if (!data) return;
  // console.log(data);
  // selected && console.log(selected);

  return (
    <div className="   w-2/3 ">
      <div className="fixed z-10 -ml-8  -mt-3 flex w-full gap-2  bg-white md:ml-0 md:w-[67%] md:p-4 ">
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
      <div className="">
        <SearchBody />
      </div>
      {/* <div className="relative">{data && <CardDishDisplay data={data} />}</div> */}
    </div>
  );
};

export default SearchDisplayResults;
