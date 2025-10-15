import { API_OPTIONS } from "../utils/constants";


const movieSearchTMDB = async (name) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json(); 
    return json.results;
  };