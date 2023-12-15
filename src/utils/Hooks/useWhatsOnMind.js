// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { addAllFoodTypes, addName } from "../redux/foodCatagorySlice";

// const useWhatsOnMind = () => {
//   const dispatch = useDispatch();
//   useEffect(() => {
//     getDishes();
//   }, []);
//   const getDishes = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/mapi/restaurants/list/v5?lat=15.3803485&lng=73.8349952",
//     );
//     console.log(data);
//     const json = await data.json();
//     console.log(json);
//     // console.log(json?.data?.cards[1].card.card.gridElements.infoWithStyle.info);
//     // console.log(json?.data?.cards[1].card.card.header.title);

//     // dispatch(addName(json?.data?.cards[1].card?.card?.header?.title));
//     // dispatch(
//     //   addAllFoodTypes(
//     //     json?.data?.cards[1].card.card.gridElements.infoWithStyle.info,
//     //   ),
//     // );

//     dispatch(addName("ravi"));
//   };
// };
// export default useWhatsOnMind;
