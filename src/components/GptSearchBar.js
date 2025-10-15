import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/langaugeConstats";
import { useRef, useState } from "react"; // ⬅️ added useState for error message
import ai from "../utils/googleAi";
import { API_OPTIONS } from "../utils/constants";
import { addGptSearchResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.language);
  const searchtext = useRef();
  const [error, setError] = useState(""); // ⬅️ local state for showing errors

  const movieSearchTMDB = async (name) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json(); 
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const queryText = searchtext.current.value.trim();

    // ✅ Error handling for empty input
    if (!queryText) {
      setError("Please enter keywords before searching.");
      return;
    }

    // Clear previous error if user now enters something
    setError("");

    const query =
      "act as a movie recommendation engine and suggest me some from the query: " +
      queryText +
      ". only give me the name of 5 movies, comma separated like the example result given ahead: Inception, The Dark Knight, Interstellar, The Matrix, Fight Club. Do not give any extra information other than the movie names";

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: query,
      });

      const movieNames = response.text.split(",").map((m) => m.trim()); 
      const movieDetailsPromises = movieNames.map((name) =>
        movieSearchTMDB(name)
      );
      const tmdbResult = await Promise.all(movieDetailsPromises);

      dispatch(
        addGptSearchResult({ movieNames: movieNames, movieResults: tmdbResult })
      );
    } catch (error) {
      console.error("Error fetching movie suggestions:", error);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-[35%] md:pt-[10%] flex flex-col items-center w-full justify-center">
      <div className="fixed w-screen h-screen inset-0 bg-black/60"></div>

      <form
        className="flex md:w-1/2  z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchtext}
          type="text"
          placeholder={lang[langKey].placeholder}
          className="flex-grow p-3 rounded-l-xl bg-slate-900 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={handleGptSearchClick}
          className="bg-blue-600 px-6 py-3 font-bold rounded-r-xl text-white hover:bg-blue-700 transition"
        >
          {lang[langKey].search}
        </button>
      </form>

      {/* ✅ Show error message if any */}
      {error && (
        <p className="text-red-500 mt-3 font-semibold z-10">{error}</p>
      )}
    </div>
  );
};

export default GptSearchBar;
