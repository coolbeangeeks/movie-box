import React from 'react'
import Moviecard from './Moviecard'
import { connectStorageEmulator } from 'firebase/storage';

const Movielist = ({title,movies}) => {

   if(!movies)return ;
    
  return (
    <div>
        <div className='p-4'> 
            <h1 className='p-4 text-white font-bold text-2xl'>{title}</h1>
            <div className='flex overflow-auto scrollbar-hide'>{
                
            movies.map((movies)=><Moviecard key={movies.id}posterpath={movies.poster_path}/>)
}</div>

        </div>
        

    </div>
  )
}

export default Movielist