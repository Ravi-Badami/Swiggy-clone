import { useDispatch } from "react-redux";
import { clearCart } from "../../utils/redux/cartSlice";

const Checkout = () => {
  const dispatch = useDispatch();
  dispatch(clearCart());
  return (
    <div>
      <div className="mt-[10%] flex h-screen  justify-center ">
        <div className="fixed mt-[50%] md:mt-0">Payment successful</div>
      </div>
    </div>
  );
};

export default Checkout;
