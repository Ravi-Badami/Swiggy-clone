import { useDispatch } from "react-redux";
import { updateDisplay } from "../../../utils/redux/filterSlice";
import { CLOSE_SVG } from "../../../utils/svg/svg";

const FilterHead = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-4">
      <div className=" font-extrabold md:text-2xl">FilterHead</div>
      <div
        className="cursor-pointer"
        onClick={() => dispatch(updateDisplay("hidden"))}
      >
        <img src={CLOSE_SVG} className=" h-6 md:h-7 " alt="" />
      </div>
    </div>
  );
};

export default FilterHead;
