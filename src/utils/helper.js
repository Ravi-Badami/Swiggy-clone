import { CALL_SVG, CLOCK_SVG, LOCATION_SVG } from "./svg/svg";

export const HERO_CARD_DATA = [
  {
    id: 1,
    content: "Mon-Fri 9am to 10pm",
    icon: (
      <img
        src={CLOCK_SVG}
        alt="clock"
        className=" h-[1.25rem]  md:h-[2.25rem] "
      />
    ),
  },
  {
    id: 2,
    content: "Zuari Nagar-Birla,Goa",
    icon: (
      <img
        src={LOCATION_SVG}
        alt="location"
        className=" h-[1.25rem]  md:h-[2.25rem] "
      />
    ),
  },
  {
    id: 3,
    content: "9834828746",
    icon: (
      <img
        src={CALL_SVG}
        alt="call"
        className=" h-[1.25rem]  md:h-[2.25rem] "
      />
    ),
  },
];
