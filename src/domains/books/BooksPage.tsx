import React from 'react'
import { useAppSelector } from '~/store/store'
import { AddBookForm } from './AddBookForm';

const BooksPage: React.FC = () => {
    const books = useAppSelector((state) => state.books);
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Books</h1>
            <AddBookForm />
            {books.map((book, index) => (
                <div key={index} style={{ padding: '1em', border: '1px solid black', margin: '1em', borderRadius: '10px', width: '50%' }}>
                    <h2>{book.title}</h2>
                    <h3>{book.author}</h3>
                    <p>{book.summary}</p>
                </div>
            ))}
        </div>
    )
}

export default BooksPage

