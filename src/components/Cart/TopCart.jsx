/*Redux import */
import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/redux/cartSlice";

/** React-router-imports */
import { Link } from "react-router-dom";

//Custom hook import
import useCalculateSum from "../../utils/Hooks/useCalculateSum";

const TopCart = () => {
  const dispatch = useDispatch();
  const sum = useCalculateSum();

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <div className=" text-center ">
        <h1 className="m-9 font-bold">CART</h1>

        {/** clear cart button */}
        <div className="fixed z-10 h-16 w-full  bg-white  ">
          <button
            className=" rounded-lg bg-black px-3 py-2 text-white "
            onClick={handleClick}
          >
            clear cart
          </button>
        </div>

        {/**Checkout box */}
        <div className="flex flex-wrap  items-start justify-center gap-2  md:min-h-screen ">
          <div className="fixed top-[20%] z-10 h-[30%] w-[100%] bg-white  p-4 md:left-[14%] md:top-[25%] md:h-[55%] md:w-[20%]">
            <div className="mx-auto flex h-full w-[50%] flex-col items-center justify-around border border-black md:w-auto  ">
              <p className="text-2xl md:text-5xl">{sum}</p>
              <div className="rounded-md border border-black px-4 py-2">
                <Link to={"/Checkout"}>Checkout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCart;
