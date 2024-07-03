import { configureStore } from "@reduxjs/toolkit";
import  userslice from './userslice'
import movieSlice from "./movieSlice";
const appstore=configureStore(
    {
        reducer:{
            user:userslice,
            movies:movieSlice
        }
    }
)
export default appstore;