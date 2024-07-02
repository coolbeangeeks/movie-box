import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movies',
    initialState:{
        nowplayingMovie:null
    },
    reducers :{
        addnowplayingMovie :(state,action)=>{
            state.nowplayingMovie=action.payload;
        }
    }
});
export const {addnowplayingMovie}=movieSlice.actions
export default movieSlice.reducer