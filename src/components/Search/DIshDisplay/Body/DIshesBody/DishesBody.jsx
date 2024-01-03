import { useSelector } from "react-redux";
import DishesBodyCards from "./DishesBodyCards";

const DishesBody = () => {
  const data = useSelector((store) => store.search.dishData);

  return (
    <div>
      <div className="min-h-screen">
        <div className="flex   flex-wrap gap-10 border md:p-4">
          {data &&
            data.map((card, index) => (
              <DishesBodyCards key={index} data={card} />
            ))}
          {data === "" && <>Loading....</>}
          {data == undefined && <>no dish found</>}
        </div>
      </div>
    </div>
  );
};

export default DishesBody;
