import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../resources/routes-constants';
import { Button } from '@mui/material';

const LeftNav: React.FC = () => {
    const navigate = useNavigate();

    return (
        <nav style={{ width: '200px', backgroundColor: '#f4f4f4', padding: '20px', boxShadow: '2px 0 5px rgba(0,0,0,0.1)' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                <li>
                    <Button variant="contained" fullWidth onClick={() => navigate(ROUTES.HOMEPAGE_ROUTE)} style={{ margin: '10px 0' }}>
                        Home
                    </Button>
                </li>
                <li>
                    <Button variant="contained" fullWidth onClick={() => navigate(ROUTES.BOOKSPAGE_ROUTE)} style={{ margin: '10px 0' }}>
                        Books
                    </Button>
                </li>
                <li>
                    <Button variant="contained" fullWidth onClick={() => navigate(ROUTES.QUOTESPAGE_ROUTE)} style={{ margin: '10px 0' }}>
                        Quotes
                    </Button>
                </li>
            </ul>
        </nav>
    );
};

export default LeftNav;
