const { gql } = require('apollo-server');
const db = require('./db');

const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: Author!
  }
  
  type Author {
    id: ID!
    name: String!
  }
  
  type Query {
    books: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => {
      console.log("Fetching books...");
      return db.getBooks();
    }
  },
  Book: {
    author: async (parent) => {
      console.log(`Fetching author for book ID: ${parent.id}`);
      const authors = await db.getAuthorsByIds([parent.authorId]);
      return authors.length ? authors[0] : null;
    }
  }
};

const resolversFixed = {
  Query: {
    books: () => {
      console.log("Fetching books (optimized)...");
      return db.getBooks();
    }
  },
  Book: {
    author: async (parent, _, { loaders }) => {
      console.log(`Batch fetching author for book ID: ${parent.id}`);
      return loaders.author.load(parent.authorId);
    }
  }
};

module.exports = { typeDefs, resolvers, resolversFixed };