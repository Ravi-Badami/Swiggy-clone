import { useEffect, useState } from "react";
import {
  SEARCH_BY_CLICK,
  SEARCH_BY_CLICK_2,
  SEARCH_BY_ENTER,
  SEARCH_BY_ENTER_2,
  SEARCH_BY_ENTER_2_DISH,
  SEARCH_BY_ENTER_2_RESTAURANT,
} from "../constants";
import { useDispatch, useSelector } from "react-redux";
import {
  addDishData,
  addRestaurantData,
  updateCurrentButton,
  updateKeyboardCategory,
} from "../redux/searchSlice";

const useAfterSearchApi = (inputValue) => {
  const dispatch = useDispatch();
  const typeOfSearch = useSelector((store) => store.search.type);
  const card = useSelector((store) => store.search.showCard);
  const CTA = useSelector((store) => store.search.cta);
  const category = useSelector((store) => store.search.cardCategory);
  const keyboardCat = useSelector((store) => store.search.keyboardCategory);
  const currentBtn = useSelector((store) => store.search.currentButton);
  const searchRestaurantData = useSelector(
    (store) => store.search.restaurantData,
  );
  const searchDishData = useSelector((store) => store.search.dishData);

  const finalCta = CTA.replace("swiggy://explore?query=", "");

  const searchParams = new URLSearchParams(finalCta.split("&")[1]);

  const metadata = searchParams.get("metadata");
  // console.log(metadata);

  const [jsonData, setJsonData] = useState("");

  useEffect(() => {
    if (card) {
      if (typeOfSearch === "card") {
        fetchDataClick();
      }
      if (typeOfSearch === "keyboard") {
        fetchDataKeyboard();
      }
    }
  }, [category]);

  useEffect(() => {
    fetchKeyboardSwitch();
  }, [currentBtn]);

  const fetchDataClick = async () => {
    console.log("Search by card");

    if (category === "Restaurant") {
      console.log("display restaurants");
      // console.log(SEARCH_BY_CLICK);
      console.log(inputValue);
      console.log(SEARCH_BY_CLICK_2);
      console.log(metadata);
      const data = await fetch(
        SEARCH_BY_CLICK +
          inputValue +
          SEARCH_BY_CLICK_2 +
          metadata +
          "Restaurant",
      );

      const json = await data.json();
      setJsonData(json);
      dispatch(
        addRestaurantData(json?.data?.cards[1]?.groupedCard?.cardGroupMap),
      );

      console.log("restaurant", json);
    }
    if (category === "Dish") {
      console.log("display dishes");

      const data = await fetch(
        SEARCH_BY_CLICK +
          inputValue +
          SEARCH_BY_CLICK_2 +
          metadata +
          "&selectedPLTab=DISH",
      );

      const json = await data.json();
      setJsonData(json);
      dispatch(
        addDishData(json.data.cards[0].groupedCard.cardGroupMap.DISH.cards),
      );
      console.log("Dish", json);
    }

    // console.log(json.data.cards[0].groupedCard.cardGroupMap.DISH);
  };
  const fetchDataKeyboard = async () => {
    console.log("Search by keyboard");
    const data = await fetch(SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2);

    const json = await data.json();
    setJsonData(json);
    console.log(json);
    if (json?.data?.cards[1]?.groupedCard?.cardGroupMap.DISH) {
      dispatch(updateCurrentButton("Dish"));
      dispatch(updateKeyboardCategory("Dish"));
      dispatch(addDishData(json.data));
    } else if (json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT) {
      dispatch(updateCurrentButton("Restaurant"));
      dispatch(updateKeyboardCategory("Restaurant"));
      dispatch(addRestaurantData(json.data));
    }
  };

  const fetchKeyboardSwitch = async () => {
    if (!searchRestaurantData) {
      if (keyboardCat === "Dish" && currentBtn === "Restaurant") {
        const data = await fetch(
          SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2_RESTAURANT,
        );
        const json = await data.json();
        dispatch(addRestaurantData(json.data));
        console.log("when switched to restaurant", json);
      }
    }
    if (!searchDishData) {
      if (keyboardCat === "Restaurant" && currentBtn === "Dish") {
        const data = await fetch(
          SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2_DISH,
        );
        const json = await data.json();
        dispatch(addDishData(json.data));
        console.log("when switched to dish", json);
      }
    }
  };
  return jsonData;
};

export default useAfterSearchApi;
