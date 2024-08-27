import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addImdbMovies } from "../utils/ImdbSlice";

const useImdbMovie=()=>{
    const dispatch=useDispatch()
    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
    const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '7225de9d78mshd34d1e828f805acp1d7823jsna2cddbb14f6c',
		'x-rapidapi-host': 'imdb-top-100-movies.p.rapidapi.com'
	}
};
const getimdb=async ()=>{
    const response= await fetch(url,options);
    const responseDate=await response.json();
    dispatch(addImdbMovies(responseDate))
    

}
useEffect(()=>{
    getimdb();
    },[])


}

export default useImdbMovie;