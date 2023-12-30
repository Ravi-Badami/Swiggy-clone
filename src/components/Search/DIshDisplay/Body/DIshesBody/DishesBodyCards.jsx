const DishesBodyCards = () => {
  return (
    <div>
      <div className="   w-96 rounded-2xl border border-black p-4 text-start">
        <div className="flex justify-between">
          <div className="">
            <h6>By TAJBITE</h6>
            <span>stars</span>
          </div>
          <div>{"->"}</div>
        </div>
        {"----------------------------------------------"}
        <div className="flex justify-between">
          <div className=" w-2/5 border">
            <span>Promoted Dish lorem</span>
            <span>Name</span>
            <span>Price</span>
          </div>
          <div className="">
            <img src="" alt="food img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishesBodyCards;
