import AboutLeft from "./AboutLeft";
import AboutRight from "./AboutRight";

const AboutUs = () => {
  return (
    <div>
      <div className=" flex h-[25vh] select-none items-center justify-around gap-3 pl-6 md:mt-0 md:h-[90vh] md:p-5 md:px-16 md:pl-10">
        <AboutLeft />
        <AboutRight />
      </div>
    </div>
  );
};

export default AboutUs;
