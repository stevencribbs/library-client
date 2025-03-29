import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Quote } from './quoteTypes'
import { quoteAdded, setQuotes } from './quoteActions'

interface Quotes {
    quotes: Quote[];
}

const initialState: Quotes = {
    quotes: [
        {
            id: 1,
            text: 'Beauty is in the eye of the beholder.',
            author: 'Margaret Wolfe Hungerford',
            tags: 'beauty',
        },
    ],
};

const quoteReducers = createReducer<Quotes>(initialState, (builder) => {
    builder.addCase(setQuotes, (state, action: PayloadAction<Quote[]>) => {
        state.quotes = action.payload;
    });
    builder.addCase(quoteAdded, (state, action: PayloadAction<Quote>) => {
        state.quotes.push(action.payload);
    });
});

export default quoteReducers
