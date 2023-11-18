import { MENU_IMAGE } from "../utils/constants";

const ItemList = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      {data.map((e) => (
        <div
          key={e.card.info.id}
          className="m-2 text-left flex  border-b-2  border-black"
        >
          <div className=" w-10/12">
            {" "}
            <div className=" font-bold text-sm mt-1">{e.card.info.name}</div>
            <div className="font-medium text-sm mb-4">
              {e.card.info.price / 100}
            </div>
            <div className="font-light text-sm mb-4 ">
              {e.card.info.description}
            </div>
          </div>
          <img
            src={MENU_IMAGE + e.card.info.imageId}
            className="w-32 h-auto mb-4"
          />
        </div>
      ))}
    </div>
  );
};
export default ItemList;
