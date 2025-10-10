import { useSelector } from "react-redux";
import lang from "../utils/langaugeConstats";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.language);
  return (
    
    <div className="pt-[10%] flex justify-center ">
      <div className="absolute w-screen h-screen inset-0 bg-black/60"></div>
      <form className="flex w-1/2 max-w-2xl z-10">
        <input
          type="text"
          placeholder={lang[langKey].placeholder}
          className="flex-grow p-3 rounded-l-xl bg-slate-900 text-white placeholder-gray-400 focus:outline-none"
        />
        <button
       
          className="bg-blue-600 px-6 py-3 font-bold rounded-r-xl text-white hover:bg-blue-700 transition"
        >                                       
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
