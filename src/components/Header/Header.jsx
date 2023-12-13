import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [register, setRegister] = useState("login");

  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);

  return (
    <div className="flex border-solid border border-black  py-8 justify-around items-center">
      <div className="">
        <img
          className="h-16 drop-shadow-xl shadow-inner rounded-full "
          src="https://i.postimg.cc/XJf0MN9Q/logo-3.png"
          alt="logo"
        />
      </div>
      <div className="border border-black">
        <Link to="/">Home</Link>
      </div>
      <div className="header">
        <Link to="/about">About</Link>
      </div>
      <div className="header">
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex ">
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
        <button
          onClick={() => {
            register === "login" ? setRegister("logout") : setRegister("login");
          }}
        >
          {register}
        </button>
      </div>
    </div>
  );
};
export default Header;
