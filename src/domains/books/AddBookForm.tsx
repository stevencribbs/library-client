import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { NewBook } from './bookTypes';
import { addBook } from './booksSlice';
import { useAppDispatch } from '~/app/hooks';

// TS types for the input fields
// See: https://epicreact.dev/how-to-type-a-react-form-on-submit-handler/
interface AddBookFormFields extends HTMLFormControlsCollection {
  bookTitle: HTMLInputElement;
  author?: HTMLInputElement;
  summary?: HTMLTextAreaElement;
}
interface AddBookFormElements extends HTMLFormElement {
  readonly elements: AddBookFormFields;
}

const AddBookForm: React.FC = () => {
    const [showForm, setShowForm] = useState(false);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: React.FormEvent<AddBookFormElements>) => {
        // Prevent server submission
        e.preventDefault();

        const { elements } = e.currentTarget;
        const bookTitle = elements.bookTitle.value;
        const author = elements.author?.value;
        const summary = elements.summary?.value;

        const newBook: NewBook = {
            title: bookTitle,
            author,
            summary,
        };
        dispatch(addBook(newBook));

        e.currentTarget.reset();
    };

    return (
        <div>
        <Button variant="contained" color="primary" onClick={() => setShowForm(!showForm)} style={{ marginBottom: '20px' }}>
            {showForm ? 'Hide Form' : 'Add Book'}
        </Button>
        {showForm && (
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '300px', margin: '0 auto' }}>
            <TextField label="Book Title" id="bookTitle" variant="outlined" fullWidth required />
            <TextField label="Book Author" id="author" variant="outlined" fullWidth />
            <TextField label="Book Summary" id="summary" variant="outlined" fullWidth multiline rows={4} />
            <Button variant="contained" color="primary" type="submit">
                Save Book
            </Button>
            </Box>
        )}
        </div>
    );
};

export default AddBookForm;