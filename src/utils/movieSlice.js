import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowplayingMovie:null,
        trailerVideo:null
    },
    reducers :{
        addnowplayingMovie :(state,action)=>{
            state.nowplayingMovie=action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          }
    }
});
export const {addnowplayingMovie,addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer