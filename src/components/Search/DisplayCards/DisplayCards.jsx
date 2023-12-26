import { SEARCH_ITEMS_IMAGE } from "../../../utils/constants";

const DisplayCards = ({ text, type, imgId }) => {
  return (
    <>
      <div className="flex w-2/3  p-4 text-start ">
        <div className="  ">
          <img
            src={SEARCH_ITEMS_IMAGE + imgId}
            alt="img"
            className="h-24 rounded-lg"
          />
        </div>
        <div className="p-4">
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
