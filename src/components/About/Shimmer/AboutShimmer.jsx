import LeftShimmerAbout from "./LeftShimmerAbout";
import RightShimmerAbout from "./RightShimmerAbout";

const AboutUsShimmer = () => {
  return (
    <div>
      <div className=" mt-[10%] flex  select-none items-center justify-around gap-3 pl-3 md:mt-0 md:h-[90vh] md:p-5 md:px-16 md:pl-10">
        <LeftShimmerAbout />
        <RightShimmerAbout />
      </div>
    </div>
  );
};

export default AboutUsShimmer;
