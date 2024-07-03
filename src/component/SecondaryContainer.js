import { writeBatch } from 'firebase/firestore'
import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'


// movielist- popular 
// moviecard
// movielist- recently watch



const SecondaryContainer = () => {
    const movies= useSelector((store)=>store.movies)
  return (
    <div className='-mt-56 relative z-50'>
        <Movielist title={'Now Playing'} movies={movies.nowplayingMovie}/>
        <Movielist title={'Popular Movies'} movies={movies.popularMovies}/>
        <Movielist title={'Top Rated'} movies={movies.toprated}/>
        <Movielist title={'Popular Show'} movies={movies.Tvshow}/>
        

        

    </div>
  )
}

export default SecondaryContainer