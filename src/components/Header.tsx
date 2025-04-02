import React from 'react';

const Header: React.FC = () => {
    return (
        <header style={{ width: '100%', backgroundColor: '#333', color: '#fff', padding: '10px 20px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
            <h1 style={{ margin: 0, fontSize: '1.5em' }}>Personal Library Hub</h1>
        </header>
    );
};

export default Header;
