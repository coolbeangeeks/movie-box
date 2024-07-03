import React from 'react'

const Videotitle = ({title,overview}) => {
  return (
    <div className='pt-44 pl-20 absolute w-screen aspect-video bg-gradient-to-r from-black'>
        <h1 className='text-4xl mb-2 font-bold text-white'>{title}</h1>
        <p className='py-6 mb-2 text-lg text-white w-1/4'>{overview}</p>
        <button className=' bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-90 mr-6'> ▶️ Play</button>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More info</button>
    </div>
  )
}

export default Videotitle