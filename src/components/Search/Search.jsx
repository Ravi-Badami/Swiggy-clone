import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRestaurantFilterData } from "../../utils/redux/restaurantSlice";
import useSearchApi from "../../utils/useSearchApi";
import DisplayCards from "./DisplayCards/DisplayCards";
import { CLOSE_SVG } from "../../utils/svg/svg";

const Search = () => {
  const [inputValue, setInputValues] = useState("");
  const dispatch = useDispatch();

  const restaurantData = useSelector(
    (store) => store.restaurant.restaurantData,
  );
  const data = useSearchApi(inputValue);
  data &&
    data?.search.statusCode === 0 &&
    console.log(data?.search?.data?.suggestions);

  const handleClick = () => {
    setInputValues("");
  };
  // cardsArray && console.log(cardsArray);

  // const filterRestaurantData = useSelector(
  //   (store) => store.restaurant.restaurantFilterData,
  // );
  // console.log(filterRestaurantData);

  return (
    <div className=" mt-24 text-center">
      <div className="fixed -mt-20 w-full  bg-white">
        <input
          /**This is the css using tailwind */
          className="m-4 rounded-sm 
             border-2 p-2 pr-6 md:w-1/3"
          data-testid="searchInput"
          placeholder=" What do want to eat"
          /**This is used to display the data take from the input */
          value={inputValue}
          /** This is used to set the data inorder to display furthur */
          onChange={(e) => {
            setInputValues(e.target.value);
          }}
        ></input>
        <button className="absolute -ml-12 mt-7  " onClick={handleClick}>
          <img src={CLOSE_SVG} className="h-5 " alt="" />
        </button>
        {/** THis is button to search*/}
      </div>
      <div className=" mt-44 flex flex-col items-center gap-7 ">

          {data &&
            data?.search.statusCode === 0 &&
            data?.search?.data?.suggestions.map((card, index) => (
              <DisplayCards
                key={index}
                text={card.text}
                type={card.type}
                imgId={card.cloudinaryId}
              />
            ))}
     
      </div>
    </div>
  );
};

export default Search;
