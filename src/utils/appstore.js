import { configureStore } from "@reduxjs/toolkit";
import  userslice from './userslice'
import movieSlice from "./movieSlice";
import imdbSlice from "./ImdbSlice"
const appstore=configureStore(
    {
        reducer:{
            user:userslice,
            movies:movieSlice,
            imdbmovies:imdbSlice


        }
    }
)
export default appstore;