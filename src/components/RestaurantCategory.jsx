import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowList }) => {
  // console.log("data=", data);
  const handleClick = () => {
    setShowList();
  };

  return (
    <div className=" m-2 p-2 px-3 w-6/12 mx-auto   cursor-pointer shadow-2xl">
      <div className="flex justify-between" onClick={handleClick}>
        <div className="flex">
          <div className="">{data.title}</div>
          <div className="">({data.itemCards.length})</div>
        </div>
        <div className="">{showList ? "☝️" : "👇"}</div>
      </div>
      {showList && <ItemList data={data.itemCards} />}
    </div>
  );
};
export default RestaurantCategory;
