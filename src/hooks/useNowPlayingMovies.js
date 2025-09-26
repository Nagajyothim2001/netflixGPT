import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    // fetch data from tmdb api and update the store
  const dispatch = useDispatch();

  const getNowPlayingMovies = async()=>{
    const data = await fetch(API_OPTIONS);
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPlayingMovies();
  }, [])
}

export default useNowPlayingMovies