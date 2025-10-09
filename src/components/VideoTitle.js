const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen h-screen pt-56 px-10 absolute bg-gradient-to-r from-black to-transparent">
    <div className=" h-1/4 top-20 p-7  px-1 w-5/12 absolute">
      
      <h1 className="text-5xl font-bold px-4 ">{title}</h1>
      <p className="text-lg  p-4">
        {overview}
      </p>
      <div className="flex gap-4 px-4">
        <button className="bg-white hover:opacity-75 text-black p-4 w-40 font-bold text-lg rounded-md">
         ▶ Play
        </button>
        <button className="bg-gray-700 opacity-95 p-4 w-40 font-bold text-lg rounded-md hover:opacity-75">
          More Info
        </button>
      </div>
      </div>
    </div>
  );
};

export default VideoTitle;
