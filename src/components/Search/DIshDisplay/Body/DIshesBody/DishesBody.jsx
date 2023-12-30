import DishesBodyCards from "./DishesBodyCards";

const DishesBody = () => {
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex   flex-wrap gap-10 border p-4">
          <DishesBodyCards />
          <DishesBodyCards />
          <DishesBodyCards />
          <DishesBodyCards />
        </div>
      </div>
    </div>
  );
};

export default DishesBody;
