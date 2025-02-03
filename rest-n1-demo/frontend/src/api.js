export const fetchBooksN1 = async () => {
    const books = await fetch('http://localhost:4000/books').then(res => res.json());
    return await Promise.all(books.map(async (book) => {
        const author = await fetch(`http://localhost:4000/authors/${book.authorId}`).then(res => res.json());
        return { ...book, author };
    }));
};

export const fetchBooksOptimized = async () => {
    return fetch('http://localhost:4040/books').then(res => res.json());
};
