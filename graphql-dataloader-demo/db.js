const books = [
    { id: '1', title: '1984', authorId: '101' },
    { id: '2', title: 'Animal Farm', authorId: '101' },
    { id: '3', title: 'Brave New World', authorId: '102' }
];

const authors = [
    { id: '101', name: 'George Orwell' },
    { id: '102', name: 'Aldous Huxley' }
];

module.exports = {
    getBooks: () => books,
    getAuthorsByIds: async (ids) => {
        console.log(`Batch fetching authors for IDs: ${ids}`);
        return authors.filter(author => ids.includes(author.id));
    }
};
