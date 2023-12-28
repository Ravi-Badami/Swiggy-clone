import { Link } from "react-router-dom";
import DisplayCards from "../DisplayCards/DisplayCards";
import { useSelector } from "react-redux";

const Suggestion = ({ data }) => {
  // const data = useSelector((store) => store.search.recommendation);
  // console.log(data);
  // console.log("suggestions");
  return (
    <div className="">
      {data &&
        data?.search.statusCode === 0 &&
        data?.search?.data?.suggestions.map((card) => (
          <Link key={card.text} to={`/search?queru=` + card.text}>
            <DisplayCards
              text={card.text}
              type={card.type}
              imgId={card.cloudinaryId}
              cta={card?.cta.link.replace("swiggy://explore?", "")}
            />
          </Link>
        ))}
    </div>
  );
};

export default Suggestion;
