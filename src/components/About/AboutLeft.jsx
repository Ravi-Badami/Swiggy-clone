import RESTAURANT_IMAGE from "../../utils/svg/about1.png";

const AboutLeft = () => {
  return (
    <div className="  w-1/2 ">
      <img
        className=" ml-[5%] h-44 w-48 rounded-3xl md:h-auto md:w-9/12 md:rounded-[60px]"
        src={RESTAURANT_IMAGE}
        alt="restaurant image"
      />
    </div>
  );
};

export default AboutLeft;
