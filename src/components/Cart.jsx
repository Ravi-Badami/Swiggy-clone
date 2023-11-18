import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="font-bold m-10">CART</h1>
      <button
        className="py-2 px-3 bg-black text-white rounded-lg"
        onClick={handleClick}
      >
        clear cart
      </button>
      <div className="m-2 p-2 px-3 w-6/12 mx-auto   cursor-pointer shadow-2xl">
        <ItemList data={cartItems}></ItemList>
      </div>
    </div>
  );
};
export default Cart;
