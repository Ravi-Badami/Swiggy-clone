import { useEffect } from "react";
import { SEARCH_BY_CLICK } from "../constants";

const useAfterSearchApi = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SEARCH_BY_CLICK);

    const json = await data.json();
    console.log(json);
  };
};

export default useAfterSearchApi;
