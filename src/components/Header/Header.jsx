import { useContext, useState } from "react";
import { Link } from "react-router-dom";
// import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";
import SignUp from "./SignUp";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex items-center justify-center gap-x-48   py-6">
      <div className=" ">
        <div className=" ">
          <img
            className="h-16 rounded-full shadow-inner drop-shadow-xl "
            src="https://i.postimg.cc/XJf0MN9Q/logo-3.png"
            alt="logo"
          />
        </div>
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
          <Link to="/Search" className="flex items-center ">
            <img
              className="h-5"
              src="https://i.postimg.cc/m2yKWnMb/magnifier.png"
              alt=""
            />
            <span>Search</span>
          </Link>
        </div>
      </div>
      <div className="flex  w-36 items-center justify-between ">
        <div className="header">
          <h1 className="font-bold">
            {/* <Link to="/Cart">Cart({cartItems.length} items)</Link> */}
            {/* <Link to="/Cart">Cart({cartItems.length} items)</Link> */}
            <Link to="/Cart">
              <img
                className="h-9"
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
