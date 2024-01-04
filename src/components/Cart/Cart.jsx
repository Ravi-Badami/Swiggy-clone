import { useSelector } from "react-redux";
import ItemList from "../Restaurants/ItemList";
import TopCart from "./TopCart";
import BottomCart from "./BottomCart";

const Cart = () => {
  // const cartItems = useSelector((store) => store.cart.items);
  // const arr = [];

  // cartItems.map((card) => {
  //   arr.push((card.card.info.price / 100) * card.count);
  // });

  return (
    <div className="flex flex-col overflow-clip   md:flex-row">
      <TopCart />
      <div className="mt-[80%]  md:mt-0">
        <BottomCart />
      </div>
    </div>
  );
};
export default Cart;
