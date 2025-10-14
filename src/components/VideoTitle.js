const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen pt-56 px-10 absolute bg-gradient-to-r from-black to-transparent">
      <div
        className=" md:h-1/4 top-28 p-10  px-1 w-[90%]  md:w-5/12 absolute 
    "
      >
        <h1 className="text-3xl md:text-5xl font-bold md:px-4 ">{title}</h1>
        <p className="hidden md:inline-block  text-lg  p-4">{overview}</p>
        <div className="flex gap-4 pt-5 md:pt-0 md:px-4">
          <button className="bg-white hover:opacity-75 text-black p-2 w-24 md:p-4 md:w-40 font-bold text-lg rounded-md">
            ▶ Play
          </button>
          <button className="hidden md:inline-block bg-gray-700 opacity-95 p-4 w-40 font-bold text-lg rounded-md hover:opacity-75">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
