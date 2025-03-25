import {
    // ThunkDispatch,
    // UnknownAction,
    combineReducers,
    configureStore
} from '@reduxjs/toolkit'
import data from './reducers/data'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
// import bookData from '~/domains/books/bookReducers'
import booksReducer from './../domains/books/bookSlice'

const rootReducer = combineReducers({
    data,
    books: booksReducer
})

export const store = configureStore({
    reducer: rootReducer
    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         serializableCheck: {
    //             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    //         }
    //     })
})

export type RootState = ReturnType<typeof store.getState>
// eslint-disable-next-line @typescript-eslint/no-explicit-any
// export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
