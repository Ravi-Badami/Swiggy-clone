import { MENU_IMAGE } from "../utils/constants";
import { addItems } from "../utils/redux/cartSlice";
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
          className="m-2 flex border-b-2  border-black  text-left"
        >
          <div className=" w-10/12">
            {" "}
            <div className=" mt-1 text-sm font-bold">{e.card.info.name}</div>
            <div className="mb-4 text-sm font-medium">
              {e.card.info.price / 100}
            </div>
            <div className="mb-4 text-sm font-light ">
              {e.card.info.description}
            </div>
          </div>
          <div className=" ml-10 ">
            <button
              className="absolute ml-8 rounded-sm bg-black p-2 text-xs font-extrabold text-white "
              onClick={() => handleItems(e)}
            >
              ADD+
            </button>
            <img
              src={MENU_IMAGE + e.card.info.imageId}
              className="mb-4 h-24 w-32 "
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
