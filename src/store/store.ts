import { ThunkDispatch, UnknownAction, combineReducers, configureStore } from '@reduxjs/toolkit'
import data from './reducers/data'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const rootReducer = combineReducers({
    data
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
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>

export const useAppDispatch = () => useDispatch.withTypes<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
