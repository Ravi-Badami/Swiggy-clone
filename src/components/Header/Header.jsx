import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
import { HAMBURGER, SHOPPING_CART } from "../../utils/svg/svg";
import { useState } from "react";

const Header = () => {
  const [display, setDisplay] = useState(true);
  const [count, setCount] = useState(0);
  // const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  const ravi = cartItems.map((card) => card.count);
  const sum = ravi.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);

  console.log(sum); // Output: 15
  const handleDisplay = () => {
    setDisplay(!display);
  };

  return (
    <div className="fixed z-20   flex  w-full items-center justify-between gap-24 bg-white px-4  py-2 md:justify-center md:gap-x-48 ">
      <div className="ml-5 md:ml-0 ">
        <Link to="/">
          <button className="  h-20 w-20 text-center  md:mr-0">
            <img
              className=" h-14 rounded-full shadow-inner drop-shadow-xl hover:h-[4.3rem] md:h-20 "
              src="https://i.postimg.cc/XJf0MN9Q/logo-3.png"
              alt="logo"
            />
          </button>
        </Link>
      </div>
      <div
        className={`  ${
          display ? "hidden" : "block"
        }  absolute mt-[50%] flex   w-[93%]  flex-col items-end border border-black  bg-white p-5 md:relative md:ml-0 md:mt-0 md:flex md:w-4/12 md:flex-row md:justify-between md:gap-1 md:border-none`}
      >
        <div className="w-4/12 md:relative md:ml-0 md:mt-0 md:flex md:flex-row md:justify-between md:gap-20 md:border-none">
          <div className="mt-2 md:mt-0 ">
            <Link to="/">Home</Link>
          </div>
          <div className="header mt-2 md:mt-0">
            <Link to="/about">About</Link>
          </div>
          <div className="header mt-2 md:mt-0">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="header mt-2 md:mt-0">
            <Link to="/search" className="flex items-center gap-1 ">
              <img
                className="mt-[0.10rem] h-4 "
                src="https://i.postimg.cc/m2yKWnMb/magnifier.png"
                alt=""
              />
              <span>Search</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:first-letter borde  flex w-40 items-center  justify-between border-black md:w-36">
        <div className="">
          <h1 className="   mt-2 font-bold">
            {/* <Link to="/Cart">Cart({cartItems.length} items)</Link> */}
            <span className="absolute -mt-2 ml-[0.69rem] cursor-pointer select-none text-sm md:-mt-3 md:ml-4 md:text-base ">
              {sum}
            </span>
            <Link to="/Cart" className="">
              <img className=" h-7 md:h-9 " src={SHOPPING_CART} alt="" />
            </Link>
          </h1>
        </div>

        <SignUp />
        <div className="-ml-2 p-2 md:hidden">
          <img className="h-8" src={HAMBURGER} alt="" onClick={handleDisplay} />
        </div>
      </div>
    </div>
  );
};
export default Header;
