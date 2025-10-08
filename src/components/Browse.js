import Header from "./Header";

import { useNowPlayingMovies } from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { usePopularMovies } from "../Hooks/usePopularMovies";
import { useTopRatedMovies } from "../Hooks/useTopRatedMovied";
import { useUpcomingMovies } from "../Hooks/useUpComingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="text-white bg-black">
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
