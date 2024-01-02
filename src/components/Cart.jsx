import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/Restaurants/ItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const arr = [];
  cartItems.map((card) => {
    arr.push((card.card.info.price / 100) * card.count);
  });
  // useEffect(() => {
  //   arr.map((c) => setTotal(total + c));
  // }, []);

  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );

  console.log(cartItems);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center">
      <h1 className="m-10 font-bold">CART</h1>
      <button
        className="rounded-lg bg-black px-3 py-2 text-white"
        onClick={handleClick}
      >
        clear cart
      </button>
      <div className="flex items-center justify-center gap-2 border border-black">
        <div className="m-2 -ml-32 w-[80%]  cursor-pointer overflow-y-clip p-2 px-3   shadow-2xl md:w-6/12">
          {cartItems.length === 0 ? (
            <h1>Nothing in the cart</h1>
          ) : (
            <ItemList data={cartItems}></ItemList>
          )}
        </div>
        <div className="fixed right-32 top-40 border border-black">{sum}</div>
      </div>
    </div>
  );
};
export default Cart;
