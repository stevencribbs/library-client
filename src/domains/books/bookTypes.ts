export type Book = {
    id: number;
    title: string;
    author?: string;
    summary?: string;
};

export type NewBook = Omit<Book, 'id'>;
