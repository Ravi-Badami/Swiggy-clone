/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import { addItems, deleteItem } from "../../../../../../utils/redux/cartSlice";
import { useEffect, useState } from "react";

const DishesCardBottom = ({ bestSeller, name, price, card }) => {
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
        cardData: card.card,
        count: 1,
      }),
    );

    // console.log(card);
  };
  const handleMinusOnClick = (id) => {
    console.log(typeof id);
    dispatch(deleteItem(id));
  };
  return (
    <div className="flex justify-between">
      <div className=" flex w-3/5 flex-col border">
        <span>{bestSeller}</span>
        <span>{name}</span>
        <span>{price / 100}</span>
      </div>
      <div className="">
        <img src="" alt="food img" className="border border-black" />

        <button
          // onClick={() => handleOnClick(card)}
          className="border border-black"
        >
          <div className="flex h-8 w-24  items-center justify-between p-2">
            <div
              className="text-xl"
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
