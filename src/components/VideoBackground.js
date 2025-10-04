
const VideoBackground = () => {
  return (
    <div className="w-screen h-screen">
      <iframe
        className="w-full h-screen"
        src="https://www.youtube.com/embed/x7uLutVRBfI?si=3omjkeGH3qUeAurk&autoplay=1&mute=1&loop=1&playlist=x7uLutVRBfI&controls=0&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
