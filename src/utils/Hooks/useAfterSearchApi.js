import { useEffect, useState } from "react";
import {
  SEARCH_BY_CLICK,
  SEARCH_BY_CLICK_2,
  SEARCH_BY_ENTER,
  SEARCH_BY_ENTER_2,
} from "../constants";
import { useSelector } from "react-redux";

const useAfterSearchApi = (inputValue) => {
  const result = useSelector((store) => store.search.type);
  const card = useSelector((store) => store.search.showCard);
  const CTA = useSelector((store) => store.search.cta);
  const finalCta = CTA.replace("swiggy://explore?query=", "");
  const searchParams = new URLSearchParams(finalCta.split("&")[1]);
  const metadata = searchParams.get("metadata");
  const [jsonData, setJsonData] = useState("");

  useEffect(() => {
    if (card) {
      if (result === "card") {
        fetchDataClick();
      }
      if (result === "keyboard") {
        fetchDataKeyboard();
      }
    }
  }, []);

  const fetchDataClick = async () => {
    console.log("Search by click");

    const data = await fetch(
      SEARCH_BY_CLICK +
        inputValue +
        SEARCH_BY_CLICK_2 +
        metadata +
        "&selectedPLTab=DISH",
    );

    const json = await data.json();
    setJsonData(json);
    // console.log(json.data.cards[0].groupedCard.cardGroupMap.DISH);
  };
  const fetchDataKeyboard = async () => {
    console.log("Search by keyboard");
    const data = await fetch(SEARCH_BY_ENTER + inputValue + SEARCH_BY_ENTER_2);

    const json = await data.json();
    setJsonData(json);
    // console.log(json);
  };
  return jsonData;
};

export default useAfterSearchApi;
