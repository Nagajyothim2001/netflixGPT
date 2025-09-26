import Hearder from './Hearder';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';

const Browse = () => {
  useNowPlayingMovies()
  return (
    <div>
      <Hearder/>
    </div>
  )
}

export default Browse