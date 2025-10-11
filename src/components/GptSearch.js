import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <div  className="h-screen">
      <div className=" absolute -z-20">
       <img
        className="w-screen h-screen object-cover"
        src={NETFLIX_BG}
        alt="LoginImage"
      />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
