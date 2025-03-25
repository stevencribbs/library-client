import { createReducer, PayloadAction } from '@reduxjs/toolkit'
import { Book } from './bookTypes'
import { bookAdded, setBooks } from './bookActions'

interface BooksReducer {
    books: Book[]
}

const initialState: BooksReducer = {
    books: [
        {
            id: 1,
            title: 'Piercing the Darkness',
            author: 'Frank Peretti',
            summary: 'This book is about spiritual warfare.'
        }
    ]
}

const bookReducers = createReducer<BooksReducer>(initialState, (builder) => {
    builder.addCase(setBooks, (state, action: PayloadAction<Book[]>) => {
        state.books = action.payload
    })
    builder.addCase(bookAdded, (state, action: PayloadAction<Book>) => {
        state.books.push(action.payload)
    })
})

export default bookReducers
