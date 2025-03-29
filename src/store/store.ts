import { Action, ThunkAction, ThunkDispatch, UnknownAction, combineReducers, configureStore } from '@reduxjs/toolkit';
import data from './reducers/data';
import booksSliceReducer from '../domains/books/booksSlice';
import quoteReducers from '~/domains/quotes/quoteReducers';

const rootReducer = combineReducers({
    data,
    books: booksSliceReducer,
    quotesData: quoteReducers,
});

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppDispatch = ThunkDispatch<RootState, any, UnknownAction>;
// export type AppDispatch = typeof store.dispatch;
// Export a reusable type for handwritten thunks
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;
