import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const { movieNames, movieResult } = useSelector((state) => state.gpt);
  if (!movieNames) return null;

  return (
<div className="bg-black p-4 m-10 z-20 text-white mb-10 rounded-lg w-auto max-h-[80vh] overflow-y-auto">

      {movieNames.map((movieNames, index) => (
        <MovieList
          key={movieNames}
          title={movieNames}
          movies={movieResult[index]}
        />
      ))}
    </div>
  );
};

export default GptMovieSuggestion;
