const { ApolloServer } = require('apollo-server');
const { typeDefs, resolversFixed } = require('./schema');
const createLoaders = require('./loaders');

const serverFixed = new ApolloServer({
    typeDefs,
    resolvers: resolversFixed,
    context: () => ({ loaders: createLoaders() })
});

serverFixed.listen().then(({ url }) => {
    console.log(`🚀 Optimized server ready at ${url}`);
});
