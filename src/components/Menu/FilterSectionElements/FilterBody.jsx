//Component import
import FilterBodyLeft from "./LeftFilterBody";
import RightFilterBody from "./RightFilterBody";

const FilterBody = () => {
  return (
    <div className="flex">
      <FilterBodyLeft />

      <RightFilterBody />
    </div>
  );
};

export default FilterBody;
