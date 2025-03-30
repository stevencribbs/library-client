import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Personal Library Hub</h1>
            <nav style={{ marginTop: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li>
                        <button onClick={() => navigate(ROUTES.HOMEPAGE_ROUTE)} style={{ cursor: 'pointer', margin: '10px 0' }}>
                            Home
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate(ROUTES.BOOKSPAGE_ROUTE)} style={{ cursor: 'pointer', margin: '10px 0' }}>
                            Books
                        </button>
                    </li>
                    <li>
                        <button onClick={() => navigate(ROUTES.QUOTESPAGE_ROUTE)} style={{ cursor: 'pointer', margin: '10px 0' }}>
                            Quotes
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HomePage;
