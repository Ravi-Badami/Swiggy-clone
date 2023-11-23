import { MENU_IMAGE } from "../utils/constants";
import { addItems } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ data }) => {
  const dispatch = useDispatch();

  const handleItems = (item) => {
    dispatch(addItems(item));
  };

  console.log(data);
  return (
    <div className="">
      {data.map((e) => (
        <div
          data-testid="foodItems"
          key={e.card.info.id}
          className="m-2 text-left flex  border-b-2  border-black"
        >
          <div className=" w-10/12">
            {" "}
            <div className=" font-bold text-sm mt-1">{e.card.info.name}</div>
            <div className="font-medium text-sm mb-4">
              {e.card.info.price / 100}
            </div>
            <div className="font-light text-sm mb-4 ">
              {e.card.info.description}
            </div>
          </div>
          <div className=" ml-10 ">
            <button
              className="absolute p-2 bg-black text-white font-extrabold rounded-sm text-xs ml-8 "
              onClick={() => handleItems(e)}
            >
              ADD+
            </button>
            <img
              src={MENU_IMAGE + e.card.info.imageId}
              className="w-32 h-24 mb-4 "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
