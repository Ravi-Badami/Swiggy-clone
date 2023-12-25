import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantFilterData } from "../../utils/redux/restaurantSlice";
import useSearchApi from "../../utils/useSearchApi";

const Search = () => {
  const [inputValue, setInputValues] = useState("");
  const dispatch = useDispatch();

  const restaurantData = useSelector(
    (store) => store.restaurant.restaurantData,
  );
  const data = useSearchApi(inputValue);
  data?.search.statusCode === 0 && console.log(data);

  // const filterRestaurantData = useSelector(
  //   (store) => store.restaurant.restaurantFilterData,
  // );
  // console.log(filterRestaurantData);

  return (
    <div className=" mt-24 text-center">
      <div className="border  border-black ">
        <input
          /**This is the css using tailwind */
          className="m-4 rounded-md border-2 border-black
             p-2 pr-6"
          data-testid="searchInput"
          placeholder=" What do want to eat"
          /**This is used to display the data take from the input */
          value={inputValue}
          /** This is used to set the data inorder to display furthur */
          onChange={(e) => {
            setInputValues(e.target.value);
          }}
        ></input>
        {/** THis is button to search*/}
        <button
          className="my-4 mr-32 rounded-lg bg-sky-300 px-4 py-2 drop-shadow-lg"
          /**- The eventHandler will used to filter the data from "restaurantData"
             - It will take the input from the user and match to each restaurant name present and it will also search if the only few words of the name is given as input [.includes() is responsible for that feature].
             - It will also convert all the input to lowercase and also the name of restaurant from the API data to lowercase and then compares it
          */
          onClick={() => {
            const filteredList = restaurantData.filter((res) =>
              res.info.name.toLowerCase().includes(inputValue.toLowerCase()),
            );
            if (filteredList.length === 0) {
              dispatch(addRestaurantFilterData(null));
            } else {
              /** This is used to set the data  */
              dispatch(addRestaurantFilterData(filteredList));
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="">{}</div>
    </div>
  );
};

export default Search;
