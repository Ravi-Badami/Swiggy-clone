const PopFilterButton = ({ button, isSelected, onClick }) => {
  return (
    <button
      className={`rounded-full px-2 py-1 text-xs text-black drop-shadow-xl transition duration-300 ease-in-out md:px-6 md:py-2 md:text-base md:font-medium ${
        isSelected && "bg-red-200"
      } `}
      onClick={onClick}
    >
      {button}
    </button>
  );
};

export default PopFilterButton;
