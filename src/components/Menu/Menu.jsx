import MenuCards from "./MenuCards";
import MenuFilter from "./MenuFilter";
import MenuHead from "./MenuHead";

const Menu = () => {
  return (
    <div>
      <div className="  w-[95vw]  p-8 text-start">
        <MenuHead />

        <MenuFilter />
        <MenuCards />
      </div>
    </div>
  );
};

export default Menu;
