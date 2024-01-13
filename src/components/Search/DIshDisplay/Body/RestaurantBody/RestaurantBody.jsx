import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CardOfRestaurant from "./CardOfRestaurant/CardOfRestaurant";
import { Link } from "react-router-dom";
import ShimmerDish from "../DIshesBody/ShimmerDish";

const RestaurantBody = () => {
  const restaurantData = useSelector((store) => store.search.restaurantData);
  const [displayedCards, setDisplayedCards] = useState([]);
  const cardsPerPage = 10;

  useEffect(() => {
    if (restaurantData && restaurantData.cards) {
      setDisplayedCards(restaurantData.cards.slice(0, cardsPerPage));
    } else {
      // setShowNoRestaurantFound(true);
      // setDisplayShimmer(false);
    }
  }, [restaurantData]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (
      scrollY + windowHeight >= documentHeight - 200 &&
      displayedCards.length < restaurantData.cards.length
    ) {
      const remainingCards = restaurantData.cards.slice(
        displayedCards.length,
        displayedCards.length + cardsPerPage,
      );
      setDisplayedCards((prevCards) => [...prevCards, ...remainingCards]);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [displayedCards, restaurantData]);
  if (restaurantData === null || restaurantData === undefined)
    return (
      <div className="h-screen">
        <ShimmerDish />
      </div>
    );

  return (
    <div>
      <div className="min-h-screen">
        <div className="flex flex-wrap gap-10 p-4 md:mt-10">
          {displayedCards.map((card) => (
            <h1 key={card?.card?.card?.info?.id}>
              <Link to={"/restaurants/" + card?.card?.card?.info?.id}>
                <CardOfRestaurant data={card.card.card} />
              </Link>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantBody;
