import React from 'react'
import Header from './Header';
import { useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import ImdbMovieCard from './ImdbMovieCard';


const ImdbMovie = () => {
  const navigate=useNavigate();
  const imdbmoviesSelector=useSelector((store)=>store.imdbmovies?.getImdbMovies)
 
console.log(imdbmoviesSelector);

  const goBack=()=>{
    navigate('/browse')
    
    
    
    
  }
  return (
  
    <div className='bg-black py-6 px-6'>
      <div className='flex gap-10'>

      
        <button onClick={goBack} type="button" className="w-full flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
    <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
    </svg>
    <span>Go back</span>
</button>
    <div className='text-white'>
        <h1 className='text-5xl font-bold font-sans'>Top 100 Imdb Movies</h1>
    </div>
    </div>
   {imdbmoviesSelector && <div className='grid grid-cols-4 mt-8 gap-2'>

   
    {imdbmoviesSelector.map((imdbMovie)=><ImdbMovieCard key={imdbMovie.imdbid
} title={imdbMovie.title} image={imdbMovie.image} descp={imdbMovie.description} year={imdbMovie.year} imdb_link={imdbMovie.imdb_link
} genere={[...imdbMovie.genre]}/>)}
</div>}


    </div>
  )
}

export default ImdbMovie;