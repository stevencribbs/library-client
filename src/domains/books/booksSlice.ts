import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book } from './bookTypes'

// Create an initial state value for the reducer, with that type
const initialState: Book[] = [
    {
        id: 1,
        title: 'Piercing the Darkness',
        author: 'Frank Peretti',
        summary: 'This book is about spiritual warfare.'
    },
    {
        id: 2,
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        summary: 'This book is about a hobbit who goes on an adventure.'
    }
]

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
                state.push(action.payload)
            },
            prepare: (book: Book) => {
                return {
                    payload: {
                        id: book.id,
                        title: book.title,
                        author: book.author,
                        summary: book.summary
                    }
                }
            }
        }
    }
})

// Export the auto-generated action creator with the same name
export const { bookAdded } = booksSlice.actions

// Export the generated reducer function
export default booksSlice.reducer
