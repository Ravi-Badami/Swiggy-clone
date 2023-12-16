const HeroButton = ({ button }) => {
  return (
    <button className="mr-2 rounded-full bg-[#F04949] p-1 px-4 pb-2 font-semibold text-white drop-shadow-lg md:p-4 md:px-7">
      <span className="text-xs md:text-base">{button}</span>
    </button>
  );
};

export default HeroButton;
