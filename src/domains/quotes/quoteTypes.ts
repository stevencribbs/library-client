export type Quote = {
    id: number
    text: string
    author?: string
    tags?: string
}

export type NewQuote = Omit<Quote, 'id'>;
