const DataLoader = require('dataloader');
const db = require('./db');

module.exports = function createLoaders() {
    return {
        author: new DataLoader(async (authorIds) => {
            const authors = await db.getAuthorsByIds(authorIds);
            return authorIds.map(id => authors.find(author => author.id === id) || null);
        })
    };
};
