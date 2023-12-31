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
  updateDisplayCategory,
  updateKeyboardCategory,
} from "../redux/searchSlice";
const useAfterSearchApi = (inputValue) => {
  const dispatch = useDispatch();
  const typeOfSearch = useSelector((store) => store.search.type);
  const card = useSelector((store) => store.search.showCard);
  const CTA = useSelector((store) => store.search.cta);
  const categoryCard = useSelector((store) => store.search.cardCategory);
  const keyboardCat = useSelector((store) => store.search.keyboardCategory);
  const currentBtn = useSelector((store) => store.search.currentButton);
  const searchRestaurantData = useSelector(
    (store) => store.search.restaurantData,
  );
  const searchDishData = useSelector((store) => store.search.dishData);
  const finalCta = CTA.replace("swiggy://explore?query=", "");
  const searchParams = new URLSearchParams(finalCta.split("&")[1]);
  const metadata = searchParams.get("metadata");
  const [jsonData, setJsonData] = useState("");
  const [count, setCount] = useState(0);

  // console.log(searchDishData);
  useEffect(() => {
    if (card) {
      if (typeOfSearch === "card") {
        fetchDataClick();
      }
      if (typeOfSearch === "keyboard") {
        fetchDataKeyboard();
      }
    }
  }, [typeOfSearch]);

  useEffect(() => {
    if (typeOfSearch === "keyboard") {
      fetchKeyboardSwitch();
    }
    if (typeOfSearch === "card") {
      fetchCardSwitch();
    }
  }, [currentBtn]);

  const fetchDataClick = async () => {
    // console.log("Search by card");
    const data = await fetch(
      SEARCH_BY_CLICK + inputValue + SEARCH_BY_CLICK_2 + metadata,
    );

    const json = await data.json();
    setJsonData(json);

    if (
      json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT === undefined
    ) {
      dispatch(addRestaurantData(""));
    }
    if (json?.data?.cards[1]?.groupedCard?.cardGroupMap.DISH === undefined) {
      dispatch(addDishData(""));
    }

    // console.log(json.data.cards[1].groupedCard.cardGroupMap.RESTAURANT);
    if (json?.data?.cards[1]?.groupedCard?.cardGroupMap.DISH) {
      // console.log("clicked on card search Dish");
      dispatch(updateCurrentButton("Dish"));
      dispatch(updateDisplayCategory("Dish"));
      dispatch(
        addDishData(json?.data?.cards[1]?.groupedCard?.cardGroupMap.DISH.cards),
      );
    } else if (json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT) {
      // console.log("clicked on card search Restaurant");
      dispatch(updateCurrentButton("Restaurant"));
      dispatch(updateDisplayCategory("Restaurant"));
      dispatch(
        addRestaurantData(
          json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT,
        ),
      );
    }
  };
  const fetchCardSwitch = async () => {
    if (!searchRestaurantData) {
      if (categoryCard === "Dish" && currentBtn === "Restaurant") {
        const data = await fetch(
          SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2_RESTAURANT,
        );
        const json = await data.json();

        dispatch(
          addRestaurantData(
            json?.data?.cards[0]?.groupedCard?.cardGroupMap.RESTAURANT,
          ),
        );
        // console.log("when switched to restaurant", json);
      }
    }

    //memoization
    if (!searchDishData) {
      if (categoryCard === "Restaurant" && currentBtn === "Dish") {
        const data = await fetch(
          SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2_DISH,
        );
        const json = await data.json();
        dispatch(
          addDishData(
            json?.data?.cards[0]?.groupedCard?.cardGroupMap.DISH.cards,
          ),
        );
        // console.log("when switched to dish", json);
      }
    }
  };

  const fetchDataKeyboard = async () => {
    // console.log("Search by keyboard");
    const data = await fetch(SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2);

    const json = await data.json();
    setJsonData(json);
    // console.log(json);
    // if (
    //   json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT === undefined
    // ) {
    //   dispatch(addRestaurantData(""));
    // }
    //
    if (
      json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT === undefined
    ) {
      dispatch(addRestaurantData(null));
    }
    // console.log(json);
    if (keyboardCat === "Dish") {
      if (json?.data?.cards[0]?.groupedCard?.cardGroupMap.DISH === undefined) {
        dispatch(addDishData(null));
      }
    }

    if (json?.data?.cards[1]?.groupedCard?.cardGroupMap.DISH) {
      dispatch(updateCurrentButton("Dish"));
      dispatch(updateKeyboardCategory("Dish"));
      dispatch(
        addDishData(json?.data?.cards[1]?.groupedCard?.cardGroupMap.DISH.cards),
      );
    }
    if (json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT) {
      dispatch(updateCurrentButton("Restaurant"));
      dispatch(updateKeyboardCategory("Restaurant"));
      if (
        json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT === undefined
      ) {
        dispatch(addRestaurantData(null));
      }
      dispatch(
        addRestaurantData(
          json?.data?.cards[1]?.groupedCard?.cardGroupMap.RESTAURANT,
        ),
      );
    }
  };

  const fetchKeyboardSwitch = async () => {
    //memoization
    if (!searchRestaurantData) {
      if (keyboardCat === "Dish" && currentBtn === "Restaurant") {
        const data = await fetch(
          SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2_RESTAURANT,
        );
        const json = await data.json();
        dispatch(
          addRestaurantData(
            json?.data?.cards[0]?.groupedCard?.cardGroupMap.RESTAURANT,
          ),
        );
        // console.log("when switched to restaurant", json);
      }
    }

    //memoization
    if (!searchDishData) {
      if (keyboardCat === "Restaurant" && currentBtn === "Dish") {
        const data = await fetch(
          SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2_DISH,
        );
        const json = await data.json();
        const finalData =
          await json?.data?.cards[0]?.groupedCard?.cardGroupMap.DISH.cards;

        if (finalData) {
          dispatch(addDishData(finalData));
        }
        // else if (finalData === undefined) {
        //   dispatch(addDishData(""));

        //   console.log("first count", count);
        // }
        if (searchDishData === undefined) {
          // console.log("data null");
          dispatch(addDishData("No result"));
        }
        // finalData === undefined && dispatch(addDishData(null));
        // console.log(
        //   "when switched to dish",
        //   json?.data?.cards[0]?.groupedCard?.cardGroupMap.DISH.cards,
        // );
        dispatch(addDishData(finalData));
      }
    }
  };

  return jsonData;
};

export default useAfterSearchApi;
