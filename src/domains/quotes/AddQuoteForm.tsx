import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { Quote } from './quoteTypes';
import { quoteAdded } from './quoteActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

interface AddQuoteFormFields extends HTMLFormControlsCollection {
  quoteText: HTMLInputElement;
  author?: HTMLInputElement;
  tags?: HTMLInputElement;
}
interface AddQuoteFormElements extends HTMLFormElement {
  readonly elements: AddQuoteFormFields;
}

function getRandomInt(min: number, max: number): number {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

const AddQuoteForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<AddQuoteFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const quoteText = elements.quoteText.value;
    const author = elements.author?.value;
    const tags = elements.tags?.value;

    console.log('Values: ', { quoteText, author, tags });

    const newQuote: Quote = {
      id: getRandomInt(1, 1000),
      text: quoteText,
      author,
      tags,
    };
    dispatch(quoteAdded(newQuote));

    e.currentTarget.reset();
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)} style={{ marginBottom: '20px' }}>
        {showForm ? 'Hide Form' : 'Add Quote'}
      </Button>
      {showForm && (
        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: '0 auto' }}>
          <TextField label="Quote" variant="outlined" fullWidth name="quoteText" required />
          <TextField label="Author" variant="outlined" fullWidth name="author" />
          <TextField label="Tags" variant="outlined" fullWidth name="tags" />
          <Button variant="contained" color="primary" type="submit">
            Add Quote
          </Button>
        </Box>
      )}
    </div>
  );
};

export default AddQuoteForm;