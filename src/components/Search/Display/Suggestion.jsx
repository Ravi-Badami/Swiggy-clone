import { Link } from "react-router-dom";
import DisplayCards from "../DisplayCards/DisplayCards";

const Suggestion = ({ data }) => {
  return (
    <div className=" -ml-[8%] w-2/3 ">
      {data &&
        data?.search.statusCode === 0 &&
        data?.search?.data?.suggestions.map((card) => (
          <Link key={card.text} to={`/search/` + card.text}>
            <DisplayCards
              text={card.text}
              type={card.type}
              imgId={card.cloudinaryId}
              cta={card?.cta.link}
              subCategory={card?.subCategory}
            />
          </Link>
        ))}
    </div>
  );
};

export default Suggestion;
