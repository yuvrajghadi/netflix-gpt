import MovieCards from "./MovieCards";

const MovieList = ({ title, movies }) => {


  if (!movies || movies.length === 0) {
    return <p>Loading...</p>; // or return null
  }

  return (
    <div className=" gap-4 my-2  ">
      <div className="flex flex-col">
      <div className="font-bold text-2xl mx-14"><h1>{title}</h1></div>
      <div className=" gap-4 mx-11 flex flex-row overflow-x-scroll p-4 scrollbar-hide">
        {movies.map((movie) => (
          <MovieCards key={movie.id} posterpath={movie.poster_path} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default MovieList;
