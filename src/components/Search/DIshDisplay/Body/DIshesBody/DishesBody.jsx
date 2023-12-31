import { useSelector } from "react-redux";
import DishesBodyCards from "./DishesBodyCards";

const DishesBody = () => {
  const data = useSelector((store) => store.search.dishData);
  data && console.log(data);

  return (
    <div>
      <div className="min-h-screen">
        <div className="flex   flex-wrap gap-10 border p-4">
          {data && data.map((card) => <DishesBodyCards key={card} />)}
        </div>
      </div>
    </div>
  );
};

export default DishesBody;
