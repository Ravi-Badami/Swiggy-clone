const ShimmerCards = () => {
  const heroCardsData = [
    {
      id: 1,
      content: "Mon-Fri 9am to 10pm",
      icon: <div className=" h-20 w-20 "></div>, // Assuming CLOCK_SVG is an SVG component
    },
    {
      id: 2,
      content: "Zuari Nagar-Birla,Goa",
      icon: <div className="h-20 w-20 "></div>, // Assuming LOCATION_SVG is an SVG component
    },
    {
      id: 3,
      content: "9834828746",
      icon: <div className="h-20 w-20 "></div>, // Assuming CALL_SVG is an SVG component
    },
  ];

  return (
    <div className="flex justify-end">
      <div className="-mt-2 flex gap-5 px-6 md:-mt-10 md:w-1/2 md:pr-8">
        {heroCardsData.map((card) => (
          <div
            key={card.id}
            className="flex h-20 animate-pulse flex-col justify-center rounded-3xl bg-white shadow-xl md:h-32 md:w-1/3 md:px-0 "
          >
            <div className="shimmer-icon   mx-auto">{card.icon}</div>
            <span className="text-[0.7em] font-bold text-gray-300 md:text-base"></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerCards;
