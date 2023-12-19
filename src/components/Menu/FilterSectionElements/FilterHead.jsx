import { useDispatch } from "react-redux";
import { updateDisplay } from "../../../utils/redux/filterSlice";

const FilterHead = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-6">
      <div className="border  text-2xl font-extrabold">FilterHead</div>
      <div
        className="cursor-pointer"
        onClick={() => dispatch(updateDisplay("hidden"))}
      >
        <img
          src="https://www.svgrepo.com/show/514098/cross-round.svg"
          className="h-7 "
          alt=""
        />
      </div>
    </div>
  );
};

export default FilterHead;
