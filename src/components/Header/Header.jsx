import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";
// import useWhatsOnMind from "../../utils/Hooks/useWhatsOnMind";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);

  // console.log(cartItems);

  return (
    <div className="fixed z-10 flex w-full   items-center justify-center gap-x-48  bg-white py-2">
      <div className=" ">
        <Link to="/">
          <button className=" h-20 w-20  text-center">
            <img
              className="h-16 rounded-full shadow-inner drop-shadow-xl hover:h-[4.3rem]  "
              src="https://i.postimg.cc/XJf0MN9Q/logo-3.png"
              alt="logo"
            />
          </button>
        </Link>
      </div>
      <div className=" flex w-4/12 justify-between gap-3  p-5">
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
      <div className="flex  w-36 items-center justify-between ">
        <div className="header">
          <h1 className="   font-bold">
            {/* <Link to="/Cart">Cart({cartItems.length} items)</Link> */}
            <span className="absolute -mt-2 ml-5 select-none ">
              {cartItems.length}
            </span>
            <Link to="/Cart" className="">
              <img
                className=" h-11 "
                src="https://i.postimg.cc/wjBFRDQD/cart.png"
                alt=""
              />
            </Link>
          </h1>
        </div>
        {/* <div className="header">
        <Link>{loggedInUser}</Link>
      </div> */}

        <SignUp />
      </div>
    </div>
  );
};
export default Header;
