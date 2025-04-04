import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { NewQuote, Quote } from './quoteTypes';
import { quoteAdded, setQuotes } from './quoteActions'
import { createAppAsyncThunk } from '~/app/withTypes';
import axios from 'axios';

interface QuotesState {
    quotes: Quote[];
    status: 'idle' | 'loading' | 'complete' | 'failed';
    error: string | null;
}

const initialState: QuotesState = {
    quotes: [],
    status: 'idle',
    error: null,
};

export const addQuote = createAppAsyncThunk<Quote, NewQuote>('quotes/addQuote', async (quote: NewQuote): Promise<Quote> => {
    const response = await axios.post('http://localhost:3300/quotes', quote);
    return response.data;
});

export const fetchAllQuotes = createAppAsyncThunk<Quote[], void>('quotes/fetchAllQuotes', async (): Promise<Quote[]> => {
    const response = await axios('http://localhost:3300/quotes');
    if (response.status != 200) {
        throw new Error('Network response was not ok');
    }
    return response.data satisfies Quote[];
});

const quoteReducers = createReducer<QuotesState>(initialState, (builder) => {
    builder.addCase(setQuotes, (state, action: PayloadAction<Quote[]>) => {
        state.quotes = action.payload;
    });
    builder.addCase(quoteAdded, (state, action: PayloadAction<Quote>) => {
        state.quotes.push(action.payload);
    });
    builder.addCase(fetchAllQuotes.pending, (state) => {
        state.status = 'loading';
    });
    builder.addCase(fetchAllQuotes.fulfilled, (state, action: PayloadAction<Quote[]>) => {
        state.status = 'complete';
        state.quotes = action.payload;
    });
    builder.addCase(fetchAllQuotes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
    });
    builder.addCase(addQuote.pending, (state) => {
        state.status = 'loading';
    });
    builder.addCase(addQuote.fulfilled, (state, action: PayloadAction<Quote>) => {
        state.status = 'complete';
        state.quotes.push(action.payload);
    });
    builder.addCase(addQuote.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
    });
});

export default quoteReducers
