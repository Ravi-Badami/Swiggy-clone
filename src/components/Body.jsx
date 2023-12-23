import RestaurantCard, { PromotedCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { API_DATA, API_DATA2 } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

import {
  addRestaurantData,
  addRestaurantFilterData,
} from "../utils/redux/restaurantSlice";
import Hero from "./Hero/Hero";
import HeroCards from "./Hero/HeroCards";
import AboutUs from "./About/AboutUs";
import Carousel from "./Carousel/Carousel";
import { addAllFoodTypes, addName } from "../utils/redux/foodCatagorySlice";
import Menu from "./Menu/Menu";

import useCuisineData from "../utils/Hooks/useCuisineData";

/** This is the  main body of the project  */
const Body = () => {
  // useWhatsOnMind();

  const dispatch = useDispatch();

  /** this contains the data fetched from the swiggy API */
  // const [restaurantData, setRestaurantData] = useState([]);

  /**
   * * This contains the input value of searching*/
  // const [inputValue, setInputValues] = useState("");

  /** This contains the filtered data  */
  // const [filterData, setFilterData] = useState(restaurantData);

  const result = useSelector((store) => store.restaurant.restaurantData);

  /**
   *  *This useState hook will call the function which is fetching the data from the API  */
  useEffect(() => {
    /** Memoization */
    !result && fetchData();
  }, [result]);

  const objectOfRestaurant = (card) => {
    if (card.card.card.id === "restaurant_grid_listing") {
      // console.log(card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      dispatch(
        addRestaurantData(
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        ),
      );

      dispatch(
        addRestaurantFilterData(
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
        ),
      );
    }

    if (card.card.card.id === "whats_on_your_mind") {
      dispatch(addName(card.card.card.header.title));
      dispatch(
        addAllFoodTypes(card?.card?.card?.gridElements?.infoWithStyle?.info),
      );
    }
  };
  /**
   * *This callback function will fetch the data from API */
  const fetchData = async () => {
    /*
     * - This variable will contain the data fetched from the API
     * - Fetch is the method which will fetch the data
     * - await is used in order to wait until the data is fetched from the API and then only give it to "data" variable
     */
    const response = await fetch(API_DATA);
    /*
      *This is converting the data into json formate using .json() method */
    console.log(response);
    const json = await response.json();
    /*
     * - This is the useState function
     * - It will give the data to restaurantData
     */
    // console.log(json);

    json.data.cards.map((card) => objectOfRestaurant(card));
    // json2.data.cards.map((card) => objectOfRestaurant(card));

    /*
     * - This also gives the data to filterData because of searching feature
     * - We want to search another item  even after searching an item
     */
  };


  /*
   * This hook is used to change the value of LoggedInUser which is in the UserContext file */
  // const { loggedInUser, setUserName } = useContext(UserContext);

  /**
   * * This is used to show a Promoted tag on top of the card */
  // const DisplayPromotedCard = PromotedCard(RestaurantCard);

  /*
   * This is used to show offline message when user get disconnected from the internet */
  // if (useOnlineStatus() === false)
  //   return <h1 className="onlineStatus">you are offline</h1>;

  // if (filterData === null) {
  //   return <Dish />;
  // }
  useCuisineData();
  /*
   * - This is the main return function which will be used to render the main body
   * - It will show the shimmer UI until the data is fetched from the API (length === 0) OR else it will render the body component after the call has been made
   * */
  return (
    /**Input box to take the data from user to search */
    <div className=" text-center ">
      <Hero />

      <HeroCards />
      <AboutUs />
      <Carousel />
      <Menu />
      {/* <Comments /> */}
      {/* <button
        className="rounded-lg border-2 border-black px-4 py-2"
        onClick={() => {
          const filterList = restaurantData.filter(
            (res) => res.info.avgRatingString > 4,
          );
          setFilterData(filterList);
        }}
      >
        Filter 4 star
      </button>
      <input
        type="text "
        className="m-2 border border-black p-2"
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
      /> */}
    </div>
  );
};
export default Body;
