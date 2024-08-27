import { createSlice } from "@reduxjs/toolkit";

const imdbSlice=createSlice({
    name:'imdbmovies',
    initialState:{
        imdbtoggle:false,
        getImdbMovies:null
    },
    reducers:{
        addImdbMovies:(state,action)=>{
            state.getImdbMovies=action.payload

        },
        toggle:(state,action)=>{
            state.imdbtoggle=!state.imdbtoggle

        }
    }

});
export const{addImdbMovies,toggle}=imdbSlice.actions;
export default imdbSlice.reducer;