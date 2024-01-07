import { useSelector } from "react-redux";

const useCalculateSum = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const arr = [];

  cartItems.map((card) => {
    arr.push((card.card.info.price / 100) * card.count);
  });
  const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
  );
  return sum;
};

export default useCalculateSum;
