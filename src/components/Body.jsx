import RestaurantCard, { PromotedCard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_DATA, API_DATA2 } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import Dish from "./dishNotFound";
import { useDispatch } from "react-redux";
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
// import { addName } from "../utils/redux/foodCatagorySlice";
// import useWhatsOnMind from "../utils/Hooks/useWhatsOnMind";
// import { addName } from "../utils/redux/foodCatagorySlice";

/** This is the  main body of the project  */
const Body = () => {
  // useWhatsOnMind();

  const dispatch = useDispatch();

  /** this contains the data fetched from the swiggy API */
  const [restaurantData, setRestaurantData] = useState([]);

  /** This contains the input value of searching*/
  const [inputValue, setInputValues] = useState("");

  /** This contains the filtered data  */
  const [filterData, setFilterData] = useState(restaurantData);
  // const [searchData, setSearchData] = useState(restaurantData);

  // console.log(restaurantData);

  /** This useState hook will call the function which is fetching the data from the API  */
  useEffect(() => {
    fetchData();
    // getDishes();
  }, []);

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

      // useWhatsOnMind();

      setRestaurantData(
        card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
      );
      setFilterData(card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    // console.log(card);

    if (card.card.card.id === "whats_on_your_mind") {
      dispatch(addName(card.card.card.header.title));
      dispatch(
        addAllFoodTypes(card?.card?.card?.gridElements?.infoWithStyle?.info),
      );
      // console.log();
    }

    // setFilterData(card?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  /** This callback function will fetch the data from API */
  const fetchData = async () => {
    /**
     * - This variable will contain the data fetched from the API
     * - Fetch is the method which will fetch the data
     * - await is used in order to wait until the data is fetched from the API and then only give it to "data" variable
     */
    const data = await fetch(API_DATA);
    // const data2 = await fetch(API_DATA2);
    // console.log(data);

    /** This is converting the data into json formate using .json() method */
    const json = await data.json();
    // const json2 = await data2.json();

    /**
     * - This is the useState function
     * - It will give the data to restaurantData
     */
    // console.log(json);

    json.data.cards.map((card) => objectOfRestaurant(card));
    // json2.data.cards.map((card) => objectOfRestaurant(card));

    /**
     * - This also gives the data to filterData because of searching feature
     * - We want to search another item  even after searching an item
     */
  };
  // console.log(restaurantData);

  // const getDishes = async () => {
  //   const data = await fetch(FOODS_API);
  //   // console.log(data);
  //   const json = await data.json();
  //   console.log(json);
  //   console.log(json?.data?.cards[1].card.card.gridElements.infoWithStyle.info);
  //   const headName = json?.data?.cards[1].card.card.header.title;

  //   dispatch(addName("ravi"));

  //   // dispatch(
  //   //   addAllFoodTypes(
  //   //     json?.data?.cards[1].card.card.gridElements.infoWithStyle.info,
  //   //   ),
  //   // );
  // };

  /** This hook is used to change the value of LoggedInUser which is in the UserContext file */
  const { loggedInUser, setUserName } = useContext(UserContext);

  /** This is used to show a Promoted tag on top of the card */
  const DisplayPromotedCard = PromotedCard(RestaurantCard);

  /** This is used to show offline message when user get disconnected from the internet */
  // if (useOnlineStatus() === false)
  //   return <h1 className="onlineStatus">you are offline</h1>;

  // if (filterData === null) {
  //   return <Dish />;
  // }
  /**
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
      {/* <div className="flex w-screen items-center border border-black bg-red-200 ">
        <div className=" mx-[9%] flex w-[80%]  flex-wrap  gap-14 border border-black bg-blue-100 p-8">
          {filterData.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/restaurants/" + resturant.info.id}
            >
              {resturant.info.isOpen ? (
                <DisplayPromotedCard resData={resturant} />
              ) : (
                <RestaurantCard resData={resturant} />
              )}
            </Link>
          ))}
        </div>
      </div> */}
    </div>
  );
};
export default Body;
