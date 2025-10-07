import { IMG_CDN_URL } from "../utils/constants";

const MovieCards = ({ posterpath }) => {
  return (
    <div>
      <img
        className=""
     src={`https://image.tmdb.org/t/p/w500${posterpath}`} // use just posterpath
        alt="movie poster"
      />
    </div>
  );
};

export default MovieCards;
