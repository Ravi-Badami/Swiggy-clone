import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useSearchApi from "../../utils/useSearchApi";
import { CLOSE_SVG } from "../../utils/svg/svg";
import useAfterSearchApi from "../../utils/Hooks/useAfterSearchApi";
import { useNavigate } from "react-router-dom";
import Suggestion from "./Display/Suggestion";
import {
  addDishData,
  addRestaurantData,
  updateDisplayCategory,
  updateSearchType,
  updateShowCard,
} from "../../utils/redux/searchSlice";
import SearchDisplayResults from "./DIshDisplay/SearchDisplayResults";

const Search = () => {
  const [inputValue, setInputValues] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const displayCard = useSelector((store) => store.search.showCard);
  const data = useSearchApi(inputValue);

  // data &&
  //   data?.search.statusCode === 0 &&
  //   dispatch(
  //     updateDisplayCategory(data?.search?.data?.suggestions[0].subCategory),
  //   );

  useAfterSearchApi();

  const handleClick = () => {
    setInputValues("");
    dispatch(updateShowCard(false));
    navigate("/search");
    dispatch(addRestaurantData(""));
    dispatch(addDishData(""));
  };

  const handleClick2 = () => {
    setInputValues("");
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();
    dispatch(updateShowCard(true));
    dispatch(updateSearchType("keyboard"));
    navigate(`/search/${inputValue}`);

    // data &&
    //   data?.search.statusCode === 0 &&
    //   dispatch(
    //     updateDisplayCategory(data?.search?.data?.suggestions[0].subCategory),
    //   );
  };

  return (
    <div className="  text-center">
      <div className="fixed -mt-20 w-full  bg-white">
        {displayCard && (
          <button
            className="  absolute  -ml-56 mt-6 border"
            onClick={handleClick}
          >
            {/* <img src={CLOSE_SVG} className="h-5 " alt="" /> */}X
          </button>
        )}
        <form action="" onSubmit={onSubmitHandle}>
          <input
            /**This is the css using tailwind */
            className="m-4 rounded-sm 
             border-2 p-2 pl-7 pr-6 md:w-2/3"
            data-testid="searchInput"
            placeholder=" What do want to eat"
            /**This is used to display the data take from the input */
            value={inputValue}
            /** This is used to set the data inorder to display furthur */
            onChange={(e) => {
              setInputValues(e.target.value);
              dispatch(updateShowCard(false));
            }}
          ></input>
        </form>
        {inputValue && (
          <button className="  absolute -mt-12 ml-48   " onClick={handleClick2}>
            <img src={CLOSE_SVG} className="h-5 " alt="" />
          </button>
        )}
      </div>
      <div className="  mt-44 flex flex-col  items-center gap-7   ">
        {displayCard ? <SearchDisplayResults /> : <Suggestion data={data} />}
      </div>
    </div>
  );
};

export default Search;
