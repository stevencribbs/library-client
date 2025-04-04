import React from 'react';
import { TextField, Button, Box } from '@mui/material';
import { NewQuote } from './quoteTypes';
import { useState } from 'react';
import { addQuote } from './quoteReducers';
import { useAppDispatch } from '~/app/hooks';

interface AddQuoteFormFields extends HTMLFormControlsCollection {
  quoteText: HTMLInputElement;
  author?: HTMLInputElement;
  tags?: HTMLInputElement;
}
interface AddQuoteFormElements extends HTMLFormElement {
  readonly elements: AddQuoteFormFields;
}

const AddQuoteForm: React.FC = () => {
  const [showForm, setShowForm] = useState(false);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<AddQuoteFormElements>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const quoteText = elements.quoteText.value;
    const author = elements.author?.value;
    const tags = elements.tags?.value;

    const newQuote: NewQuote = {
      text: quoteText,
      author,
      tags,
    };
    dispatch(addQuote(newQuote));

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