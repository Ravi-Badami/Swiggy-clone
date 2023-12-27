import { useEffect } from "react";
import { AFTER_SEARCH } from "../constants";

const useAfterSearchApi = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(AFTER_SEARCH);

    const json = await data.json();
    console.log(json);
  };
};

export default useAfterSearchApi;
