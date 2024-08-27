import { useDispatch } from "react-redux";
import { API_movieList } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";


 export const useBackgroundvideo=(movie_id)=>{

    const dispatch= useDispatch()

    const getMoviTrailer= async()=>{
        const trailerdata= await fetch("https://api.themoviedb.org/3/movie/"
           + movie_id + "/videos?page=1", API_movieList)
        const json=await trailerdata.json();

        const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
     dispatch(addTrailerVideo(trailer));
        
    }

    useEffect(()=>{

        getMoviTrailer();

    })
}