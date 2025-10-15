import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="   bg-black pb-1">
      <div className="-mt-52  z-10 relative">
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
      <MovieList title="Popular" movies={movies.popularMovies} />
      <MovieList title="Top Rated" movies={movies.topRatedMovies} />
      <MovieList title="Upcoming" movies={movies.upcomingMovies} />
      <MovieList title="Trending" movies={movies.nowPlayingMovies} />
    </div>
    </div>
  );
};
 
export default SecondaryContainer;
