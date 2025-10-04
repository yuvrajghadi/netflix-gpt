const VideoTitle = () => {
  return (
    <div className="w-screen h-screen pt-96 px-10 absolute bg-gradient-to-r from-black to-transparent">
      <h1 className="text-6xl font-bold">Demon Slayer</h1>
      <p className="text-xl w-1/3 p-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit jhdbeiudwe
        wjhdnewdj j weuidnwi ndn hjjdjk jdni wisin jsnismn sijnd djdo3n .
      </p>
      <div className="flex gap-4">
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
