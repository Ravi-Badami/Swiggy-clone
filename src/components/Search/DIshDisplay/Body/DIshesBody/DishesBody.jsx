import { useSelector } from "react-redux";
import DishesBodyCards from "./DishesBodyCards";
import ShimmerDish from "./ShimmerDish";
import NoDishFound from "./NoDishFound";
const DishesBody = () => {
  const data = useSelector((store) => store.search.dishData);

  return (
    <div>
      <div className="min-h-screen">
        <div className=" flex flex-wrap justify-center gap-10  md:p-10">
          {data &&
            data.map((card, index) => (
              <DishesBodyCards key={index} data={card} />
            ))}
          {data === "" && <ShimmerDish />}
          {data == undefined && <NoDishFound />}
        </div>
      </div>
    </div>
  );
};

export default DishesBody;
