import { useSelector } from "react-redux";
import ItemList from "../Restaurants/ItemList";

const BottomCart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="fixed ml-[5%] h-screen w-[90%] overflow-y-auto md:mb-0 md:ml-[40%] md:mt-44 md:w-[60%] lg:w-[40%] ">
      <div className="max-h-96 overflow-y-scroll scroll-smooth rounded-xl border border-gray-300 shadow-lg shadow-gray-300 md:max-h-[30rem]">
        <div className="flex flex-col items-center overflow-x-hidden">
          {cartItems.length === 0 ? (
            <div className="text-center">
              <h1>Nothing in the cart</h1>
            </div>
          ) : (
            <ItemList data={cartItems} cart="true"></ItemList>
          )}
        </div>
      </div>
    </div>
  );
};

export default BottomCart;
