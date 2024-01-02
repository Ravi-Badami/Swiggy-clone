/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { MENU_IMAGE } from "../../utils/constants";
import {
  addItems,
  deleteFromCart,
  deleteItem,
} from "../../utils/redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ItemList = ({ data, cart }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  const [count, setCount] = useState(0);
  const [cardId, setCardId] = useState();
  const [countMap, setCountMap] = useState({});

  // console.log(cartItem);
  useEffect(() => {
    setCount(count);
  }, [count, cartItem]);
  useEffect(() => {
    const newCountMap = {};
    cartItem.forEach((item) => {
      newCountMap[item.id] = item.count;
    });
    setCountMap(newCountMap);
  }, [cartItem]);

  useEffect(() => {
    setCardId(cardId);
  }, [cartItem]);

  const ravi = cartItem.filter((cards) => cards.id === cardId);
  // ravi[0] && console.log(ravi[0].count);

  const handleMinusOnClick = (id) => {
    console.log(typeof id);
    dispatch(deleteItem(id));
  };
  const handleAddOnClick = async (card) => {
    dispatch(
      addItems({
        id: card.card.info.id,
        card: card.card,
        count: 1,
        cart: cart,
      }),
    );

    setCardId(card.card.info.id);
  };

  const handleDeleteItemFromTheCart = (id) => {
    dispatch(deleteFromCart(id));
  };
  return (
    <>
      {data.map((e) => (
        <div
          data-testid="foodItems "
          key={e.card.info.id}
          className="m-2 flex border-b-2  border-black text-left text-[0.72rem]  md:text-base"
        >
          <div className=" w-10/12">
            <div className=" mt-1 select-none text-[0.72rem]  text-sm font-bold subpixel-antialiased md:text-base">
              {e.card.info.name}
            </div>
            <div className="mb-3  flex select-none text-[0.72rem] text-sm font-medium md:text-base">
              {" "}
              <img
                src="https://www.svgrepo.com/show/502817/rupee-coin.svg "
                className="mr-1 h-4 select-none  "
                alt=""
              />
              {e.card.info.price / 100 || e.card.info.defaultPrice / 100}
            </div>
            <div className="md:text-basesubpixel-antialiased mb-4 select-none text-[0.69rem]  text-sm font-light">
              {e.card.info.description}
            </div>
          </div>
          <div className=" ml-10 ">
            <button
              className={`absolute ml-4 flex w-20 select-none items-center justify-around rounded-md bg-black  p-1 text-xs font-extrabold text-white ${
                cart === "true" ? "md:ml-2 " : "md:ml-5"
              } `}
            >
              <div
                className="text-xl"
                onClick={() => handleMinusOnClick(e.card.info.id)}
              >
                -
              </div>
              <div className="text-md">
                {countMap[e.card.info.id] !== undefined ? (
                  <span>{countMap[e.card.info.id]}</span>
                ) : (
                  <span className="text-lg">{0}</span>
                )}
              </div>
              <div className="text-xl" onClick={() => handleAddOnClick(e)}>
                +
              </div>
            </button>
            <img
              src={MENU_IMAGE + e.card.info.imageId}
              alt="foodImage"
              className="mb-4 h-20 w-32 select-none md:h-24 "
            />
          </div>
          {cart === "true" && (
            <div className=" -mr-5  mt-5 flex h-10  w-36  p-4">
              <p className="h-7 w-14 ">
                {countMap[e.card.info.id] !== undefined ? (
                  <span>
                    {(e.card.info.price / 100) * countMap[e.card.info.id]}
                  </span>
                ) : (
                  <span className="text-lg">{0}</span>
                )}
              </p>
              {/* <div
                onClick={() => handleDeleteItemFromTheCart(e.card.info.id)}
                className="ml-5"
              >
                <p>X</p>
              </div> */}
            </div>
          )}
        </div>
      ))}
    </>
  );
};
export default ItemList;
