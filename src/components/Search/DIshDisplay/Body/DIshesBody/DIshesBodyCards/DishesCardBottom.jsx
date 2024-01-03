/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteItem } from "../../../../../../utils/redux/cartSlice";
import { useEffect, useState } from "react";
import { RUPPEE, STAR_YELLOW } from "../../../../../../utils/svg/svg";
import { ADD_MINUS, MAIN_BUTTON } from "../../../../../../utils/color/button";

const DishesCardBottom = ({ bestSeller, name, price, card, isVeg }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count);
  }, [count, cartItem]);
  const ravi = cartItem.filter((cards) => cards.id === card.card.info.id);
  const handleAddOnClick = async (card) => {
    dispatch(
      addItems({
        id: card.card.info.id,
        card: card.card,
        count: 1,
      }),
    );
  };
  const handleMinusOnClick = (id) => {
    console.log(typeof id);
    dispatch(deleteItem(id));
  };
  return (
    <div className="flex justify-between">
      <div className=" flex w-3/5 flex-col gap-4 ">
        <span className="flex gap-1">
          <span className="borde h-5 rounded-full border-black">
            {isVeg === 1 ? "🟢" : "🔴"}
          </span>

          {bestSeller && <img src={STAR_YELLOW} className="w-4" alt="" />}
          <span className="font-extrabold text-yellow-500">{bestSeller}</span>
        </span>
        <span>{name}</span>
        <span className="flex items-center">
          <span>
            <img src={RUPPEE} className="h-4" alt="" />
          </span>
          <span className="font-medium">{price / 100}</span>
        </span>
      </div>
      <div className="">
        <img src="" alt="food img" className="borde h-20 border-black " />

        <button
          // onClick={() => handleOnClick(card)}
          className={`borde -mt-32 rounded-full border-black ${MAIN_BUTTON}  shadow-inne w-20 font-bold shadow-black md:w-auto`}
        >
          <div className="flex h-8 items-center  justify-between p-2 text-white md:w-24">
            <div
              className="text-xl "
              onClick={() => handleMinusOnClick(card.card.info.id)}
            >
              -
            </div>
            <div>
              {ravi[0] ? <span>{ravi[0].count}</span> : <span>{0}</span>}
            </div>
            <div className="text-xl" onClick={() => handleAddOnClick(card)}>
              +
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DishesCardBottom;
