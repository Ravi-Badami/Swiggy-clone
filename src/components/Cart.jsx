import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/Restaurants/ItemList";
import { clearCart } from "../utils/redux/cartSlice";
import { Link } from "react-router-dom";

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
      <h1 className="m-9 font-bold">CART</h1>
      <div className="fixed z-20 h-16 w-full  bg-white ">
        <button
          className=" rounded-lg bg-black px-3 py-2 text-white"
          onClick={handleClick}
        >
          clear cart
        </button>
      </div>

      <div className="flex flex-wrap items-start justify-center gap-2 border border-black md:min-h-screen ">
        <div className="fixed top-[21%] z-20 h-[30%] w-[100%] bg-white  p-4 md:left-[14%] md:top-[25%] md:h-[55%] md:w-[20%]">
          <div className="mx-auto flex h-full w-[50%] flex-col items-center justify-around border border-black md:w-auto  ">
            <p className="text-2xl md:text-5xl">{sum}</p>
            <div className="rounded-md border border-black px-4 py-2">
              <Link to={"/Checkout"}>Checkout</Link>
            </div>
          </div>
        </div>

        <div className="m-2 mt-72 cursor-pointer p-2 px-3 shadow-2xl md:ml-[30%]  md:mt-20  md:w-6/12 md:overflow-y-clip ">
          {cartItems.length === 0 ? (
            <div className="">
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
export default Cart;
