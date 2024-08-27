import { useDispatch } from "react-redux";
import { API_movieList } from "../utils/constant";
import { addtoprated } from "../utils/movieSlice";
import { useEffect } from "react";


const useToprated=()=>{
    const dispatch=useDispatch()


  const gettopratedList=async ()=>{
    const movieData= await fetch('https://api.themoviedb.org/3/movie/top_rated?page=3',
    API_movieList)
    const movieJson= await movieData.json();
    dispatch(addtoprated(movieJson.results))
  }
  useEffect(()=>{
    gettopratedList();

  })
}

export default useToprated;