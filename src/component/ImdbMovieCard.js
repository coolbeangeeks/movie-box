import React from 'react'
import useimdbMovie from '../CustomHoooks/useimdbMovie'
import { LuHeart } from "react-icons/lu";


const ImdbMovieCard = ({title,image,descp,year,imdb_link,genere}) => {
    console.log(genere)

  return (
        <div className='mb-4  w-[380px] rounded-lg'>
            <div className='w-[100%] h-[380px] overflow-hidden mb-2'>
                <img className='object-cover'src={image} alt="" />

            </div>
            <div className='text-white w-[350px] mb-2'>
                <h2 className='text-2xl'>{title}</h2>
                <p className='text-slate-200'>{year} <span> </span>
                    <span>{genere.join(' ')}</span>
                </p>

            </div>
            <div className='text-white w-[300px] mb-2'>
                <h4>{descp}</h4>

            </div>
    
            <div className='text-white bg-red-500 w-[20%] py-1 px-2 rounded-lg text-center '>
                <a href={imdb_link} target='_blank'>IMDB</a>
                

            </div>
            <span className='text-white'><LuHeart/></span>
            

            
        </div>
  )
}

export default ImdbMovieCard