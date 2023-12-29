import { useSelector } from "react-redux";

const useDisplaySearchCardsApi = () => {
  const result = useSelector((store) => store.search.type);
  console.log(result);
};
export default useDisplaySearchCardsApi;
