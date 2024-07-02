import { useDispatch } from "react-redux";
import { API_movieList } from "../utils/constant";
import { addnowplayingMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const useCurrentPlaying=()=>{
    const dispatch=useDispatch()


  const getMovieList=async ()=>{
    const movieData= await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_movieList)
    const movieJson= await movieData.json();
    dispatch(addnowplayingMovie(movieJson.results))
  }
  useEffect(()=>{
    getMovieList();

  },[])
}

export default useCurrentPlaying;