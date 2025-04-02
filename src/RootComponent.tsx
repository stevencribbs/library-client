import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import BooksPage from './domains/books/BooksPage'
import QuotesPage from './domains/quotes/QuotesPage'
import LeftNav from './components/LeftNav'
import Header from './components/Header'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                {/* Header */}
                <Header />

                {/* Main Layout */}
                <div style={{ display: 'flex', flex: 1 }}>
                    {/* Left Navigation */}
                    <LeftNav />

                    {/* Main Content */}
                    <div style={{ flex: 1, padding: '20px' }}>
                        <Routes>
                            <Route path="*" element={<NotFoundPage />} />
                            <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                            <Route path={ROUTES.BOOKSPAGE_ROUTE} element={<BooksPage />} />
                            <Route path={ROUTES.QUOTESPAGE_ROUTE} element={<QuotesPage />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
};

export default RootComponent;
