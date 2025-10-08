const MovieCards = ({ posterpath }) => {
  return (
    <div className=" w-36 md:w-36 flex-shrink-0 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-auto rounded-lg object-cover"
        src={`https://image.tmdb.org/t/p/w500${posterpath}`}
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCards;
