import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  if (!trailerVideo) return <div>Loading trailer...</div>;

  return (
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden">
      <iframe
        className="w-full h-full object-cover"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${trailerVideo.key}`}
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
    </div>
  );
};

export default VideoBackground;
