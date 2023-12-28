import { useDispatch } from "react-redux";
import { SEARCH_ITEMS_IMAGE } from "../../../utils/constants";
import { updateShowCard } from "../../../utils/redux/searchSlice";

const DisplayCards = ({ text, type, imgId }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="  flex  w-2/3 text-start  hover:bg-gray-200 md:p-4 "
        onClick={() => dispatch(updateShowCard(true))}
      >
        <div className="  ">
          <img
            src={SEARCH_ITEMS_IMAGE + imgId}
            alt="img"
            className="h-12 rounded-lg md:h-20"
          />
        </div>
        <div className="p-2 md:p-4">
          <span className="text-base">{text}</span>
          <div className="">
            <span className="font-light text-gray-500">{type}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayCards;
