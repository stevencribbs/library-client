import React from 'react'
// import { nanoid } from '@reduxjs/toolkit'
// import { useAppDispatch } from '~/store/store'
import { Book } from './bookTypes'
import { bookAdded } from './bookSlice'
import { useDispatch } from 'react-redux'

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddBookFormFields extends HTMLFormControlsCollection {
  bookTitle: HTMLInputElement
  author?: HTMLInputElement
  summary?: HTMLTextAreaElement
}
interface AddBookFormElements extends HTMLFormElement {
  readonly elements: AddBookFormFields
}

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const AddBookForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<AddBookFormElements>) => {
    // Prevent server submission
    e.preventDefault()

    const { elements } = e.currentTarget
    const bookTitle = elements.bookTitle.value
    const author = elements.author?.value
    const summary = elements.summary?.value

    console.log('Values: ', { bookTitle, author, summary })

    // Create the post object and dispatch the `postAdded` action
    const newBook: Book = {
      id: getRandomInt(1, 1000),
      title: bookTitle,
      author,
      summary,
    }
    dispatch(bookAdded(newBook));

    e.currentTarget.reset()
  }

  return (
    <section>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="bookTitle">Book Title:</label>
        <input type="text" id="bookTitle" defaultValue="" required />
        <label htmlFor="author">Book Author:</label>
        <input type="text" id="author" defaultValue="" />
        <label htmlFor="summary">Book Summary:</label>
        <textarea
          id="summary"
          name="summary"
          defaultValue=""
        />
        <button>Save Book</button>
      </form>
    </section>
  )
}