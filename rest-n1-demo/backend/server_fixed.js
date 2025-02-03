const express = require('express');
const db = require('./db');
const cors = require('cors');

const appFixed = express();
appFixed.use(cors());

appFixed.get('/books', (req, res) => {
    const books = db.getBooks();
    const authors = db.getAuthors();
    const authorMap = Object.fromEntries(authors.map(author => [author.id, author]));
    res.json(books.map(book => ({ ...book, author: authorMap[book.authorId] })));
});

appFixed.listen(4040, () => console.log('🚀 Optimized server running on http://localhost:4040'));
