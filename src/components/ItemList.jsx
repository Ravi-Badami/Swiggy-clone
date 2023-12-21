/* eslint-disable react/prop-types */
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
    <>
      {data.map((e) => (
        <div
          data-testid="foodItems"
          key={e.card.info.id}
          className="m-2 flex border-b-2  border-black  text-left"
        >
          <div className=" w-10/12">
            <div className=" mt-1 select-none text-sm  font-bold subpixel-antialiased">
              {e.card.info.name}
            </div>
            <div className="mb-3  flex select-none text-sm font-medium">
              {" "}
              <img
                src="https://www.svgrepo.com/show/502817/rupee-coin.svg "
                className="mr-1 h-4 select-none "
                alt=""
              />
              {e.card.info.price / 100 || e.card.info.defaultPrice / 100}
            </div>
            <div className="mb-4 select-none text-sm font-light subpixel-antialiased">
              {e.card.info.description}
            </div>
          </div>
          <div className=" ml-10 ">
            <button
              className="absolute ml-8 select-none rounded-md  bg-black p-2 text-xs font-extrabold text-white hover:p-3 "
              onClick={() => handleItems(e)}
            >
              ADD+
            </button>
            <img
              src={MENU_IMAGE + e.card.info.imageId}
              alt="foodImage"
              className="mb-4 h-24 w-32 select-none "
            />
          </div>
        </div>
      ))}
    </>
  );
};
export default ItemList;
