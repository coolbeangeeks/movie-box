import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { img_cdn, logo } from '../utils/constant';
import Header from './Header';
const Detailpage = () => {

    const movies=useSelector((store)=>store.movies)
    const allmovies=[...(movies?.nowplayingMovie || []),...(movies?.popularMovies ||[]),...(movies?.toprated || []),...(movies?.Tvshow || [])]
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = allmovies.find((movie) => movie.id === parseInt(id));
    if(!movie)return;

    const handleClose=()=>{
        navigate('/browse')
    }

  return (
    <div className='bg-black min-h-screen'>
       <div className='w-20'>
            <img className='cursor-pointer' src={logo} alt="logo" onClick={handleClose}/>
          </div>
    
    <div className='grid grid-cols-2'>
    <div className='h-4/5 overflow-hidden mt-8'>
        <img className=''src={img_cdn+movie.poster_path} alt="" />
    </div>
    <div className='flex flex-col text-white gap-8 mt-8'>
        <h1v className='text-4xl'>{movie.original_title}</h1v>
        <h2 className='text-1xl'>{movie.overview}</h2>
        <p>{movie.release_date}</p>
        <button className='bg-red-500 w-14 py-2' onClick={handleClose}>Close</button>
        
    </div>

    </div>
    </div>
  )
}

export default Detailpage