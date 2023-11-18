import RestaurantCard, { PromotedCard } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { API_DATA } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [inputValue, setInputValues] = useState("");
  const [filterData, setFilterData] = useState(restaurantData);
  // const [inputValue2, setInputValues2] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(API_DATA);
    const json = await data.json();
    setRestaurantData(json.data);
    // setRestaurantData(
    //   json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    // );

    setFilterData(
      json.data.cards[5].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  // console.log(inputValue2);
  const { loggedInUser, setUserName } = useContext(UserContext);

  const DisplayPromotedCard = PromotedCard(RestaurantCard);
  if (useOnlineStatus() === false)
    return <h1 className="onlineStatus">you are offline</h1>;
  return filterData.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="">
      <input
        className="border-2 border-black rounded-lg p-2
           m-4"
        value={inputValue}
        onChange={(e) => {
          setInputValues(e.target.value);
        }}
      ></input>
      <button
        className="border-2 border-black rounded-lg px-4 py-2 my-4 mr-32 bg-sky-300"
        onClick={() => {
          const filteredList = restaurantData.filter((res) =>
            res.info.name.toLowerCase().includes(inputValue.toLowerCase())
          );
          setFilterData(filteredList);
        }}
      >
        Search
      </button>
      <button
        className="border-2 border-black rounded-lg px-4 py-2"
        onClick={() => {
          const filterList = restaurantData.filter(
            (res) => res.info.avgRatingString > 4
          );
          setFilterData(filterList);
        }}
      >
        Filter 4 star
      </button>
      <input
        type="text "
        className="border border-black m-2 p-2"
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div className="flex flex-wrap  gap-14  mt-28">
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
    </div>
  );
};
export default Body;
