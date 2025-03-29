import React from 'react'
import { AddQuoteForm } from './AddQuoteForm';
import { useAppSelector } from '~/app/hooks';

const QuotesPage: React.FC = () => {
    const quotes = useAppSelector((state) => state.quotesData.quotes);
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Quotes</h1>
            <AddQuoteForm />
            {quotes.map((quote, index) => (
                <div key={index} style={{ padding: '1em', border: '1px solid black', margin: '1em', borderRadius: '10px', width: '50%' }}>
                    <h2>{quote.text}</h2>
                    <h3>{quote.author}</h3>
                    <p>{quote.tags}</p>
                </div>
            ))}
        </div>
    )
}

export default QuotesPage

