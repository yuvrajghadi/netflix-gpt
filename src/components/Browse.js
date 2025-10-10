import Header from "./Header";

import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../Hooks/usePopularMovies";
import { useTopRatedMovies } from "../Hooks/useTopRatedMovied";
import { useUpcomingMovies } from "../Hooks/useUpComingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="text-white">
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
