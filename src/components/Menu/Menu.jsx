import MenuCards from "./MenuCards";
import MenuFilter from "./MenuFilter";
import MenuHead from "./MenuHead";

const Menu = () => {
  return (
    <div>
      <div className="  px-4 text-start  md:w-[95vw] md:p-8">
        <MenuHead />

        <MenuFilter />
        <MenuCards />
      </div>
    </div>
  );
};

export default Menu;
