import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [register, setRegister] = useState("login");

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex border-solid border-2 border-black  p-4 justify-around">
      <div className="header">
        online status{useOnlineStatus() ? " 🟢" : " 🔴"}
      </div>
      <div className="header">
        <Link to="/">Home</Link>
      </div>
      <div className="header">
        <Link to="/about">About</Link>
      </div>
      <div className="header">
        <Link to="/contact">Contact</Link>
      </div>
      <div className="header">
        <h1 className="font-bold">
          <Link to="/Cart">Cart({cartItems.length} items)</Link>
        </h1>
      </div>
      <div className="header">
        <Link>{loggedInUser}</Link>
      </div>
      <button
        onClick={() => {
          register === "login" ? setRegister("logout") : setRegister("login");
        }}
      >
        {register}
      </button>
    </div>
  );
};
export default Header;
