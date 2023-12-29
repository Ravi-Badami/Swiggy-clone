import { useDispatch } from "react-redux";
import { SEARCH_ITEMS_IMAGE } from "../../../utils/constants";
import {
  updateCta,
  updateDisplayCategory,
  updateSearchType,
  updateShowCard,
} from "../../../utils/redux/searchSlice";
import { clearConfigCache } from "prettier";

const DisplayCards = ({ text, type, imgId, cta, subCategory }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div
        className="  flex   text-start  hover:bg-gray-200 md:p-4 "
        onClick={() => {
          dispatch(updateShowCard(true));
          dispatch(updateSearchType("card"));
          console.log(cta);
          dispatch(updateCta(cta));
          dispatch(updateDisplayCategory(subCategory));
        }}
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
