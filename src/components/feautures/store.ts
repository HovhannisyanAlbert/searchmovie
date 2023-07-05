import { configureStore } from '@reduxjs/toolkit'
import { searchSliceReducer } from './searchSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
    reducer:{
        search:searchSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const usedispatch: () => AppDispatch = useDispatch 