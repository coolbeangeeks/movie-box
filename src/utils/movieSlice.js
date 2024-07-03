import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowplayingMovie:null,
        trailerVideo:null,
        popularMovies:null,
        toprated:null,
        Tvshow:null
    },
    reducers :{
        addnowplayingMovie :(state,action)=>{
            state.nowplayingMovie=action.payload;
        },
        addnowpopularMovie :(state,action)=>{
            state.popularMovies=action.payload;
        },

        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
        addtoprated :(state, action) => {
            state.toprated = action.payload;
          },
          addTvshow :(state, action) => {
            state.Tvshow = action.payload;
          }

    }
});
export const {addnowplayingMovie,addTrailerVideo,addnowpopularMovie,addtoprated,addTvshow}=movieSlice.actions
export default movieSlice.reducer