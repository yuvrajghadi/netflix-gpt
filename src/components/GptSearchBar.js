import { useSelector } from "react-redux";
import lang from "../utils/langaugeConstats";
import { useRef } from "react";
import ai from "../utils/googleAi";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  const searchtext = useRef();

  const handleGptSearchClick = async () => {
    const query =
      "act as a movie recommendation engine and suggest me some from the query: " +
      searchtext.current.value +
      ". only give me the name of 5 movies, comma separated like the example result given ahead: Inception, The Dark Knight, Interstellar, The Matrix, Fight Club. Do not give any extra information other than the movie names";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: query,
    });
    console.log(response.text);
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <div className="absolute w-screen h-screen inset-0 bg-black/60"></div>
      <form
        className="flex w-1/2 max-w-2xl z-10"
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
    </div>
  );
};

export default GptSearchBar;
