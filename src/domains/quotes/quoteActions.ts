import { createAction } from '@reduxjs/toolkit';
import { Quote } from './quoteTypes';

const prepareQuoteAdded = (quote: Quote) => {
    return {
        payload: {
            id: Math.floor(Math.random() * 1000),
            text: quote.text,
            author: quote.author,
            tags: quote.tags,
        },
    };
};

export const setQuotes = createAction<Quote[]>('quotes/setQuotes');
export const quoteAdded = createAction<typeof prepareQuoteAdded, string>('quotes/quoteAdded', prepareQuoteAdded);
