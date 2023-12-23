//Components import
import MenuCards from "./MenuCards";
import MenuFilter from "./MenuFilter";
import MenuHead from "./MenuHead";

const Menu = () => {
  return (
    <>
      <div className="  mt-5 px-4 text-start md:mt-0  md:w-[95vw] md:p-8">
        <MenuHead />
        <MenuFilter />
        <MenuCards />
      </div>
    </>
  );
};

export default Menu;
