import { createSlice, current } from "@reduxjs/toolkit";
import { Pagination, SearchTitle, ViewMovie } from "./thunk";
import { initialStateType } from "./types";


const initialState:initialStateType = {
    data:[],
    viewMovie:{

    },
    resultFilm:0
}

const searchSlice = createSlice({
    name:"search",
    initialState,
    reducers:{
      
       
    },
    extraReducers:(builder)=>{
        builder.addCase(SearchTitle.fulfilled,(state,action)=>{
        const {Search,totalResults} = action.payload
        
            state.data = Search
            state.resultFilm = Number(totalResults)
        })
        .addCase(ViewMovie.fulfilled,(state,action)=>{
            state.viewMovie = action.payload
        })
        .addCase(Pagination.fulfilled,(state,action)=>{
            const {Search} = action.payload
           
            state.data = Search
        })
      
    }
})



export const searchSliceReducer = searchSlice.reducer