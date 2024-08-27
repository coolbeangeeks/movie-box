import React, { useState } from 'react'
import Moviecard from './Moviecard'
// import { connectStorageEmulator } from 'firebase/storage';
// import Detailpage from './Detailpage';
import { useNavigate } from 'react-router-dom';

const Movielist = ({title,movies}) => {

  const navigate = useNavigate();


  const changecard=(id)=>{

    navigate(`/details/${id}`);
   
  };

   if(!movies)return ;
    
  return (
    <div>
        <div className='p-4'> 
            <h1 className='p-4 text-white font-bold text-2xl'>{title}</h1>
            <div className='flex overflow-auto scrollbar-hide'>
                
            {movies.map((movies)=><Moviecard key={movies.id}posterpath={movies.poster_path} onClick={()=>changecard(movies.id)}/>

              
          )}
          
          
          </div>

        </div>


        

    </div>
  )
}

export default Movielist