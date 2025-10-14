import { useSelector } from "react-redux";
import useMovieTrailer from "../Hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.movieTrailerVideo);
  useMovieTrailer(movieId);

  if (!trailerVideo) return null;

  return (
    <div className="w-screen h-screen aspect-video">
      <iframe
        className="w-full h-full aspect-video object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&playsinline=1&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
