


const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute top-1/4 left-10 text-white z-10 max-w-xl">
      <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">{title}</h1>
      <p className="text-lg mb-6 line-clamp-3 drop-shadow-md">{overview}</p>
      <div className="flex gap-4">
        <button className="bg-white text-black font-semibold px-8 py-3 rounded hover:bg-gray-300 transition duration-300">
          ▶️ Play
        </button>
        <button className="bg-gray-700 bg-opacity-70 text-white font-semibold px-8 py-3 rounded hover:bg-gray-600 transition duration-300">
         More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
