import { useDispatch } from "react-redux";
import { API_movieList } from "../utils/constant";
import { addTvshow,} from "../utils/movieSlice";
import { useEffect } from "react";


const useTVshow=()=>{
    const dispatch=useDispatch()


  const getTVshow=async ()=>{
    const movieData= await fetch('https://api.themoviedb.org/3/tv/popular?lpage=1',API_movieList)
    const movieJson= await movieData.json();
    dispatch(addTvshow(movieJson.results))
  }
  useEffect(()=>{
    getTVshow();

  })
}
export default useTVshow