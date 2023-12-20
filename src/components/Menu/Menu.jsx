import { lazy } from "react";
import MenuCards from "./MenuCards";

const MenuFilter = lazy(() => import("./MenuFilter"));
import MenuHead from "./MenuHead";

const Menu = () => {
  return (
    <div>
      <div className="  mt-10 px-4 text-start md:mt-0  md:w-[95vw] md:p-8">
        <MenuHead />

        <MenuFilter />
        <MenuCards />
      </div>
    </div>
  );
};

export default Menu;
