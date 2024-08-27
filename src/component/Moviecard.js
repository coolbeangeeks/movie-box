import React from 'react'
import { img_cdn } from '../utils/constant'
const Moviecard = ({posterpath,onClick}) => {
  return (
    <div>
        <div className='w-52 h-60 pr-4 overflow-hidden'>
            <img onClick={onClick}className='object-cover'src={img_cdn + posterpath} alt="movieimage" />
        </div>
    </div>
  )
}

export default Moviecard