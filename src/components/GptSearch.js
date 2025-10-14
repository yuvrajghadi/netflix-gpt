import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { NETFLIX_BG } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <img
        className="fixed w-screen h-screen object-cover"
        src={NETFLIX_BG}
        alt="LoginImage"

      />
      <div className=" relative flex flex-col items-center text-white z-10">
      <div className=" absolute -z-20">
       
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
    
  );
};

export default GptSearch;
