import React from 'react'

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Personal Library Hub</h1>
            <p style={{ fontSize: '1.2em', textAlign: 'center', maxWidth: '600px', marginTop: '20px' }}>
                Welcome to the Personal Library Hub! This application helps you manage your personal library by organizing your books, favorite quotes, and other information. 
                Navigate through the app to explore your collection and add new items to your library.
            </p>
        </div>
    );
};

export default HomePage;
