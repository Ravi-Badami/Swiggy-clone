// import { useContext } from "react";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";
// import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
// import { RxHamburgerMenu } from "react-icons/rx";
import SignUp from "./SignUp";
import { SHOPPING_CART } from "../../utils/svg/svg";
// import useWhatsOnMind from "../../utils/Hooks/useWhatsOnMind";

const Header = () => {
  // const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="fixed z-20   flex  w-full items-center justify-center gap-24  bg-white py-2 md:gap-x-48">
      <div className=" ">
        <Link to="/">
          <button className="  h-20 w-20 text-center  md:mr-0">
            <img
              className=" h-12 rounded-full shadow-inner drop-shadow-xl hover:h-[4.3rem] md:h-16 "
              src="https://i.postimg.cc/XJf0MN9Q/logo-3.png"
              alt="logo"
            />
          </button>
        </Link>
      </div>
      <div className="  hidden w-4/12 justify-between gap-1 p-5  md:flex ">
        <div className="">
          <Link to="/">Home</Link>
        </div>
        <div className="header">
          <Link to="/about">About</Link>
        </div>
        <div className="header">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="header">
          <Link to="/Search" className="flex items-center gap-1 ">
            <img
              className="mt-[0.10rem] h-4 "
              src="https://i.postimg.cc/m2yKWnMb/magnifier.png"
              alt=""
            />
            <span>Search</span>
          </Link>
        </div>
      </div>
      <div className="md:first-letter borde  flex w-40 items-center  justify-between border-black md:w-36">
        <div className="">
          <h1 className="   mt-2 font-bold">
            {/* <Link to="/Cart">Cart({cartItems.length} items)</Link> */}
            <span className="absolute -mt-2 ml-[0.69rem] cursor-pointer select-none text-sm md:-mt-3 md:ml-4 md:text-base ">
              {cartItems.length}
            </span>
            <Link to="/Cart" className="">
              <img className=" h-7 md:h-9 " src={SHOPPING_CART} alt="" />
            </Link>
          </h1>
        </div>

        <SignUp />
        <div className="-ml-2 p-2 md:hidden">
          <img className="h-8" src="https://svgshare.com/i/10vB.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
export default Header;
