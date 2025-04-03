import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from './bookTypes';
import { RootState } from '~/store/store';
import axios from 'axios';
import { createAppAsyncThunk } from '~/app/withTypes';

interface BooksState {
    books: Book[];
    status: 'idle' | 'loading' | 'complete' | 'failed';
    error: string | null;
}
// Create an initial state value for the reducer, with that type
// const initialState: Book[] = [
//     {
//         id: 1,
//         title: 'Piercing the Darkness',
//         author: 'Frank Peretti',
//         summary: 'This book is about spiritual warfare.'
//     },
//     {
//         id: 2,
//         title: 'The Hobbit',
//         author: 'J.R.R. Tolkien',
//         summary: 'This book is about a hobbit who goes on an adventure.'
//     }
// ]

const initialState: BooksState = {
    books: [],
    status: 'idle',
    error: null,
};

export const addBook = createAppAsyncThunk<Book, Book>('books/addBook', async (book: Book): Promise<Book> => {
    const response = await axios.post('http://localhost:3300/books', book);
    return response.data;
});
export const fetchAllBooks = createAppAsyncThunk<Book[], void>('books/fetchAllBooks', async (): Promise<Book[]> => {
    const response = await axios.get('http://localhost:3300/books');
    console.log('Response:', response.data);
    return response.data satisfies Book[];
});

// Create the slice and pass in the initial state
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        bookAdded: {
            reducer: (state, action: PayloadAction<Book>) => {
                state.books.push(action.payload);
            },
            prepare: (book: Book) => {
                return {
                    payload: {
                        id: book.id,
                        title: book.title,
                        author: book.author,
                        summary: book.summary,
                    },
                };
            },
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllBooks.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAllBooks.fulfilled, (state, action) => {
            state.status = 'complete';
            state.books = action.payload;
        });
        builder.addCase(fetchAllBooks.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || null;
        });
        // Handle addNewBook AsyncThunk
        builder.addCase(addBook.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(addBook.fulfilled, (state, action) => {
            state.status = 'complete';
            state.books.push(action.payload);
        });
        builder.addCase(addBook.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message || null;
        });
    },
});



// Export the auto-generated action creator with the same name
export const { bookAdded } = booksSlice.actions;

// Export the generated reducer function
export default booksSlice.reducer;

export const selectAllBooks = (state: RootState) => state.books.books;

export const selectBookById = (state: RootState, bookId: number) => state.books.books.find((book) => book.id === bookId);

export const selectBooksStatus = (state: RootState) => state.books.status;
export const selectBooksError = (state: RootState) => state.books.error;
