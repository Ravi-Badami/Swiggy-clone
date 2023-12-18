import { useDispatch, useSelector } from "react-redux";
import { addCuisines } from "../redux/filterSlice";
import { useEffect, useState } from "react";

const useCuisineData = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.restaurant.restaurantData);
  const [hasEffectRun, setHasEffectRun] = useState(false);

  // TODO: Remove this useState function before production
  useEffect(() => {
    /** This is the execution of if statement below
     * First time =  T, F [ Because data will not be there so its true statement and default
     *              of hasEffectRun is false... Since one case is true there will be an early return]
     * Second time= F , F [ Because this time there will data so its false statement and default
     *              of hasEffectRun is false... Since both cases are not true the execution
     *              will continue]
     * Third time= F,T [since data is there its false statement but this time the hasEffectRun is true
     *              and Will be true everytime so ]
     *
     *
     */

    if (!data || hasEffectRun) return;

    setHasEffectRun(true);

    data.map((c) =>
      dispatch(
        addCuisines({
          id: c.info.id,
          name: c.info.cuisines[0],
          checked: false,
        }),
      ),
    );
  }, [data]);
};

export default useCuisineData;
