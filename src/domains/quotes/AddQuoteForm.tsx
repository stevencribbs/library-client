import React from 'react'
// import { nanoid } from '@reduxjs/toolkit'
// import { useAppDispatch } from '~/store/store'
import { Quote } from './quoteTypes'
import { quoteAdded } from './quoteActions'
import { useDispatch } from 'react-redux'

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddQuoteFormFields extends HTMLFormControlsCollection {
  quoteText: HTMLInputElement
  author?: HTMLInputElement
  tags?: HTMLInputElement
}
interface AddQuoteFormElements extends HTMLFormElement {
  readonly elements: AddQuoteFormFields
}

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

export const AddQuoteForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (e: React.FormEvent<AddQuoteFormElements>) => {
    // Prevent server submission
    e.preventDefault()

    const { elements } = e.currentTarget
    const quoteText = elements.quoteText.value
    const author = elements.author?.value
    const tags = elements.tags?.value

    console.log('Values: ', { quoteText, author, tags })

    // Create the post object and dispatch the `postAdded` action
    const newQuote: Quote = {
      id: getRandomInt(1, 1000),
      text: quoteText,
      author,
      tags,
    }
    dispatch(quoteAdded(newQuote));

    e.currentTarget.reset()
  }

  return (
    <section>
      <h2>Add a New Quote</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="quoteText">Quote Title:</label>
        <input type="text" id="quoteText" defaultValue="" required />
        <label htmlFor="author">Quote Author:</label>
        <input type="text" id="author" defaultValue="" />
        <label htmlFor="tags">Quote Tags:</label>
        <input
          id="tags"
          name="tags"
          defaultValue=""
        />
        <button>Save Quote</button>
      </form>
    </section>
  )
}