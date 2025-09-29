import Hearder from './Hearder';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Hearder/>
      <MainContainer/>
      <SecondaryContainer/>

      {/*
        Main Container
         - videoBackground
         - VideoTitle
        SecondaryContainer
         -MovieList * n
           - Cards * n
      */}
    </div>
  )
}

export default Browse