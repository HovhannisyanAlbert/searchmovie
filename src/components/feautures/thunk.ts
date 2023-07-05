import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
export const SearchTitle = createAsyncThunk(
    "searchTitle",
  async  (title:string)=>{
  
        const response =  await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=599501f7&s=${title}`)
     
        return   response.data
        
    } 
)


export const ViewMovie = createAsyncThunk(
    "movie/view",
    async(title:string|undefined)=>{
        const response =  await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=599501f7&t=${title}`)
    
        return response.data
    }
)

interface pageinationType{
    title:string,
    page:number
}

export const Pagination = createAsyncThunk(
    "pageination",
    async({title,page}:pageinationType,{dispatch})=>{
        
        const response =  await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=599501f7&s=${title}&page=${page}`)
      
     return response.data
           
    }
)
