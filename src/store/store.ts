import { ThunkDispatch, UnknownAction, combineReducers, configureStore, createAsyncThunk } from '@reduxjs/toolkit'
import data from './reducers/data'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import booksSliceReducer from '../domains/books/booksSlice'
import quoteReducers from '~/domains/quotes/quoteReducers'

const rootReducer = combineReducers({
    data,
    books: booksSliceReducer,
    quotesData: quoteReducers
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>
// export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: RootState
    dispatch: AppDispatch
}>()
