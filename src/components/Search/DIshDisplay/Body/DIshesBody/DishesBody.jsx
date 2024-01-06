import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import DishesBodyCards from "./DishesBodyCards";
import ShimmerDish from "./ShimmerDish";
import NoDishFound from "./NoDishFound";

const DishesBody = () => {
  const dishData = useSelector((store) => store.search.dishData);
  const [displayedData, setDisplayedData] = useState([]);
  // const [displayShimmer, setDisplayShimmer] = useState(true);
  // const [showNoDishFound, setShowNoDishFound] = useState(false);
  const itemsPerPage = 10;

  useEffect(() => {
    if (dishData.length > 0) {
      setDisplayedData(dishData.slice(0, itemsPerPage));
      // setDisplayShimmer(false);
    }
    // else {
    //   setShowNoDishFound(true);
    //   setDisplayShimmer(false);
    // }
  }, [dishData]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (
      scrollY + windowHeight >= documentHeight - 200 &&
      displayedData.length < dishData.length
    ) {
      const remainingData = dishData.slice(
        displayedData.length,
        displayedData.length + itemsPerPage,
      );
      setDisplayedData((prevData) => [...prevData, ...remainingData]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayedData, dishData]);

  return (
    <div>
      <div className="min-h-screen md:-ml-0">
        <div className="flex flex-wrap justify-center gap-10 md:p-10">
          {displayedData.map((card, index) => (
            <DishesBodyCards key={index} data={card} />
          ))}
          {dishData === "" && <ShimmerDish />}
          {dishData == undefined && <NoDishFound />}
        </div>
      </div>
    </div>
  );
};

export default DishesBody;
