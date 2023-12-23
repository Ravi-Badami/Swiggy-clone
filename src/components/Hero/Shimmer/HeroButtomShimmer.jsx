const HeroButtonShimmer = ({ h, w, mh, mw }) => {
  return (
    <button className={` h-${h} w-${w} ml-5 md:h-${mh} md:w-${mw}  `}>
      <div className="shimmer-icon   "></div>
    </button>
  );
};

export default HeroButtonShimmer;
