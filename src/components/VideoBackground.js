import { useEffect, useSyncExternalStore } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailerVideo } from "../utils/moviesSlice";

const VideoBackground = () => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/
1311031/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();

    const filterdata = json.results.filter((video) => video.type === "Trailer");
    console.log(filterdata);
    const trailer = filterdata.length ? filterdata[0] : json.results[0];
    console.log(trailer);
    dispatch(addMovieTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-full"
        src={
          "https://www.youtube.com/embed/11iy5Hyl0fs?autoplay=1&mute=1&si=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
