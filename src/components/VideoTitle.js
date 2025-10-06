const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen pt-72 px-10 absolute bg-gradient-to-r from-black to-transparent">
      <h1 className="text-5xl font-bold px-4 w-8/12">{title}</h1>
      <p className="text-lg w-1/3 p-4">
        {overview}
      </p>
      <div className="flex gap-4 px-4">
        <button className="bg-white hover:opacity-75 text-black p-4 w-36 font-bold text-lg rounded-md">
         ▶️ Play
        </button>
        <button className="bg-gray-700 p-4 w-36 font-bold text-lg rounded-md">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
