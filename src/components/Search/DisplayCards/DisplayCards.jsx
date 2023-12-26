import { SEARCH_ITEMS_IMAGE } from "../../../utils/constants";

const DisplayCards = ({ text, type, imgId }) => {
  return (
    <>
      <div className="-ml-9  flex  w-2/3 text-start  md:p-4">
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
