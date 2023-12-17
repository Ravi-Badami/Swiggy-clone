const PopFilterButton = ({ button, isSelected, onClick }) => {
  return (
    <button
      className={`rounded-full px-6 py-2 font-medium text-black drop-shadow-xl transition  duration-300 ease-in-out ${
        isSelected && "bg-red-200"
      } `}
      onClick={onClick}
    >
      {button}
    </button>
  );
};

export default PopFilterButton;
