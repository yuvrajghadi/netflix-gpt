import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  if (!movies || movies.length === 0) {
    return <p>Loading...</p>; // or return null
  }

  return (
    <div className="flex flex-col gap-4 my-2">
      <div>{title}</div>
      <div className="flex gap-4 overflow-x-scroll p-4 ">
        {movies.map((movie) => (
          <MovieCards key={movie.id} posterpath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
