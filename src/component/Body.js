import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter} from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Detailpage from './Detailpage'
import ImdbMovie from './ImdbMovie'

const Body = () => {

    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        },
        {
            path:'/details/:id',
            element:<Detailpage/>
        },
        {
            path:'/imdb',
            element:<ImdbMovie/>
        },


    ])

  return (
    <div>
        <RouterProvider router={appRouter}/>

    </div>
  )
}

export default Body