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

// Create the slice and pass in the initial state
const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        // Declare a "case reducer" named `bookAdded`.
        // The type of `action.payload` will be a `Book` object.
        // bookAdded(state, action: PayloadAction<Book>) {
        //     // "Mutate" the existing state array, which is
        //     // safe to do here because `createSlice` uses Immer inside.
        //     state.push(action.payload)
        // }
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
    },
});

export const fetchAllBooks = createAppAsyncThunk<Book[], void>('books/fetchAllBooks', async (): Promise<Book[]> => {
    const response = await axios.get('http://localhost:3300/books');
    return response.data satisfies Book[];
});
// export const fetchAllBooks = createAppAsyncThunk<Book[], string, { dispatch: AppDispatch }>('books/fetchAllBooks', async (/*{ dispatch }*/) => {
//     try {
//         // eslint-disable-next-line @typescript-eslint/no-explicit-any
//         const data: Book[] = await axios.get('http://localhost:3300/books').then((response) => response.data.results);
//         // dispatch(setContents(data))
//         return data;
//     } catch (e) {
//         console.error(e);
//         throw e;
//     }
// });

// Export the auto-generated action creator with the same name
export const { bookAdded } = booksSlice.actions;

// Export the generated reducer function
export default booksSlice.reducer;

export const selectAllBooks = (state: RootState) => state.books.books;

export const selectBookById = (state: RootState, bookId: number) => state.books.books.find((book) => book.id === bookId);

export const selectBooksStatus = (state: RootState) => state.books.status;
export const selectBooksError = (state: RootState) => state.books.error;
