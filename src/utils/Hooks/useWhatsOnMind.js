import { useEffect } from "react";

const useWhatsOnMind = () => {
  useEffect(() => {
    getDishes();
  }, []);
  const getDishes = async () => {
    const data = await fetch(
      "/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=15.3803485&lng=73.8349952&carousel=true&third_party_vendor=1",
    );
    const json = await data.json();
    console.log(json?.data?.cards[1].card.card.header.title);
  };
};
export default useWhatsOnMind;
