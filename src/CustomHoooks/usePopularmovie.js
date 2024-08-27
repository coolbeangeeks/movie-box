import { useDispatch } from "react-redux";
import { API_movieList } from "../utils/constant";
import { addnowpopularMovie } from "../utils/movieSlice";
import { useEffect } from "react";


const usePopularmovie=()=>{
    const dispatch=useDispatch()


  const getPoularList=async ()=>{
    const movieData= await fetch('https://api.themoviedb.org/3/movie/popular?page=2',API_movieList)
    const movieJson= await movieData.json();
    dispatch(addnowpopularMovie(movieJson.results))
  }
  useEffect(()=>{
    getPoularList();

  })
}

export default usePopularmovie;