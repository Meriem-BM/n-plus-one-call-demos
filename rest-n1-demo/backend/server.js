const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/books', (req, res) => {
    const books = db.getBooks();
    res.json(books);
});

app.get('/authors/:id', (req, res) => {
    const author = db.getAuthorById(req.params.id);
    res.json(author);
});

app.listen(4000, () => console.log('🚀 N+1 Server running on http://localhost:4000'));
