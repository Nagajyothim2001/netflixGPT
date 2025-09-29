import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from "../components/VideoTitle";
import VideoBackground from "../components/VideoBackground";

const MainContainer = () => {
  const movies = useSelector(store => store.movies?.nowPlayingMovies);

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];
  const { title, overview, id } = mainMovie;

  return (
    <div className="relative w-full h-screen">
      <VideoBackground movieId={id} />
      <VideoTitle title={title} overview={overview} />
    </div>
  );
};

export default MainContainer;
