import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../resources/routes-constants';

const LeftNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <button onClick={() => navigate(ROUTES.HOMEPAGE_ROUTE)} style={{ cursor: 'pointer', margin: '10px 0', width: '100%' }}>
                        Home
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate(ROUTES.BOOKSPAGE_ROUTE)} style={{ cursor: 'pointer', margin: '10px 0', width: '100%' }}>
                        Books
                    </button>
                </li>
                <li>
                    <button onClick={() => navigate(ROUTES.QUOTESPAGE_ROUTE)} style={{ cursor: 'pointer', margin: '10px 0', width: '100%' }}>
                        Quotes
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default LeftNav;
