import { useDispatch } from "react-redux";
import { updateDisplay } from "../../../utils/redux/filterSlice";
import { CLOSE_SVG } from "../../../utils/svg/svg";

const FilterHead = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between p-6">
      <div className="border  text-2xl font-extrabold">FilterHead</div>
      <div
        className="cursor-pointer"
        onClick={() => dispatch(updateDisplay("hidden"))}
      >
        <img src={CLOSE_SVG} className="h-7 " alt="" />
      </div>
    </div>
  );
};

export default FilterHead;
