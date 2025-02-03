// frontend/src/App.js - React Frontend
import React, { useEffect, useState } from 'react';
import { fetchBooksN1, fetchBooksOptimized } from './api';

function App() {
    const [booksN1, setBooksN1] = useState([]);
    const [booksOptimized, setBooksOptimized] = useState([]);

    useEffect(() => {
        fetchBooksN1().then(setBooksN1);
        // fetchBooksOptimized().then(setBooksOptimized);
    }, []);

    return (
        <div>
            <h1>📚 N+1 API Call Problem Demo</h1>
            <h2>🔴 N+1 Problem (Multiple Requests)</h2>
            {booksN1.map(book => (
                <p key={book.id}>{book.title} - {book.author.name}</p>
            ))}
            <h2>✅ Optimized (Single Batched Request)</h2>
            {booksOptimized.map(book => (
                <p key={book.id}>{book.title} - {book.author.name}</p>
            ))}
        </div>
    );
}

export default App;
