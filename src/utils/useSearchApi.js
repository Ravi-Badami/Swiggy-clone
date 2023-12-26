import { useEffect, useState } from "react";
import { SEARCH_API_D } from "./constants";

const useSearchApi = (input) => {
  const [search, setSearch] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(SEARCH_API_D + input);
      const json = await data.json();
      setSearch(json);
    };
    const timer = setTimeout(() => {
      if (input === undefined) return;
      fetchData();
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  // console.log(search);
  if (search) return { search };
};
export default useSearchApi;
