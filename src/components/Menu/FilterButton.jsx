const FilterButton = ({ button }) => {
  return (
    <button className="  rounded-full  bg-[#F04949] px-3 pb-[0.15rem] font-medium text-white drop-shadow-xl md:px-6 md:py-2">
      <span className="text-sm">{button}</span>
    </button>
  );
};

export default FilterButton;
