import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import { ROUTES } from './resources/routes-constants'
import './styles/main.sass'
import BooksPage from './domains/books/BooksPage'
import QuotesPage from './domains/quotes/QuotesPage'

const RootComponent: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route path={ROUTES.HOMEPAGE_ROUTE} element={<HomePage />} />
                <Route path={ROUTES.BOOKSPAGE_ROUTE} element={<BooksPage />} />
                <Route path={ROUTES.QUOTESPAGE_ROUTE} element={<QuotesPage />} />
            </Routes>
        </Router>
    )
}

export default RootComponent
