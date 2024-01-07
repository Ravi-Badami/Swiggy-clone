import TopCart from "./TopCart";
import BottomCart from "./BottomCart";

const Cart = () => {
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
