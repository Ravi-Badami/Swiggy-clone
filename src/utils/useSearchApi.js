import { useEffect, useState } from "react";
import { SEARCH_API_D } from "./constants";

const useSearchApi = (input) => {
  const [search, setSearch] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (input === undefined) return;
      fetchData(input);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  const fetchData = async (input) => {
    const data = await fetch(SEARCH_API_D + input);
    const json = await data.json();
    setSearch(json);
  };
  // console.log(search);
  if (search) return { search };
};
export default useSearchApi;
