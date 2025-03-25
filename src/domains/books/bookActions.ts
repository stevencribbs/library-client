import { createAction } from '@reduxjs/toolkit'
import { Book } from './bookTypes'

export const setBooks = createAction<Book[]>('books/setBooks')
export const bookAdded = createAction('books/bookAdded', (book: Book) => {
    return {
        payload: {
            id: Math.floor(Math.random() * 1000),
            title: book.title,
            author: book.author,
            summary: book.summary
        }
    }
})
