import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Quote } from './quoteTypes'
import { quoteAdded, setQuotes } from './quoteActions'
import { createAppAsyncThunk } from '~/app/withTypes';
import axios from 'axios';

interface QuotesState {
    quotesData: {
        quotes: Quote[];
        status: 'idle' | 'loading' | 'complete' | 'failed';
        error: string | null;
    };
}

// const initialState: Quotes = {
//     quotes: [
//         {
//             id: 1,
//             text: 'Beauty is in the eye of the beholder.',
//             author: 'Margaret Wolfe Hungerford',
//             tags: 'beauty',
//         },
//     ],
// };
const initialState: QuotesState = {
    quotesData: {
        quotes: [],
        status: 'idle',
        error: null,
    },
};

export const fetchAllQuotes = createAppAsyncThunk<Quote[], void>('quotes/fetchAllQuotes', async (): Promise<Quote[]> => {
    console.log('call server for quotes...');
    const response = await axios('http://localhost:3300/quotes');
    if (response.status != 200) {
        throw new Error('Network response was not ok');
    }
    console.log('Quotes Response:', response.data);
    return response.data satisfies Quote[];
});

const quoteReducers = createReducer<QuotesState>(initialState, (builder) => {
    builder.addCase(setQuotes, (state, action: PayloadAction<Quote[]>) => {
        state.quotesData.quotes = action.payload;
    });
    builder.addCase(quoteAdded, (state, action: PayloadAction<Quote>) => {
        state.quotesData.quotes.push(action.payload);
    });
    builder.addCase(fetchAllQuotes.pending, (state) => {
        state.quotesData.status = 'loading';
    });
    builder.addCase(fetchAllQuotes.fulfilled, (state, action: PayloadAction<Quote[]>) => {
        state.quotesData.status = 'complete';
        state.quotesData.quotes = action.payload;
    });
    builder.addCase(fetchAllQuotes.rejected, (state, action) => {
        state.quotesData.status = 'failed';
        state.quotesData.error = action.error.message || null;
    });
});

export default quoteReducers
