import { useDispatch } from "react-redux";
import { NOW_PLAYING_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // fetch data from tmdb api and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async()=>{
    const data = await fetch(NOW_PLAYING_URL);
    const json = await data.json();
   // console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies