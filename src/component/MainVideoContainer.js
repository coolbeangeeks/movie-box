import React from 'react'
import Videotitle from './Videotitle'
import Videobackground from './Videobackground'
import { useSelector } from 'react-redux'

const MainVideoContainer = () => {

    const movies=useSelector((store)=>store.movies?.nowplayingMovie)

    if(!movies)return;

    const topMovie=movies[0];
    const {title,overview,id}=topMovie;


  return (
    <div>
        <Videotitle title={title} overview={overview}/>
        <Videobackground movie_id={id}/>
    </div>
  )
}

export default MainVideoContainer