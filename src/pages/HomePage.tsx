import React from 'react'
import DateDisplay from '../components/DateDisplay'
import { Link } from 'react-router-dom'
import { ROUTES } from '../resources/routes-constants'

const HomePage: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <h1 style={{ fontSize: '4em' }}>Personal Library Hub</h1>
            <DateDisplay />
            <nav style={{ marginTop: '20px' }}>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to={ROUTES.HOMEPAGE_ROUTE}>Home</Link></li>
                    <li><Link to={ROUTES.BOOKSPAGE_ROUTE}>Books</Link></li>
                    <li><Link to={ROUTES.QUOTESPAGE_ROUTE}>Quotes</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default HomePage
