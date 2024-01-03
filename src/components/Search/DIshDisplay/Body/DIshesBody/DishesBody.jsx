import { useSelector } from "react-redux";
import DishesBodyCards from "./DishesBodyCards";
import ShimmerDish from "./ShimmerDish";
import NoDishFound from "./NoDishFound";

const DishesBody = () => {
  const data = useSelector((store) => store.search.dishData);

  return (
    <div>
      <div className="min-h-screen">
        <div className="mt-20  flex flex-wrap justify-center gap-10 border md:p-10">
          {!data &&
            data.map((card, index) => (
              <DishesBodyCards key={index} data={card} />
            ))}
          {data === "" && <ShimmerDish />}
          {data && <NoDishFound />}
        </div>
      </div>
    </div>
  );
};

export default DishesBody;
