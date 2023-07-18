const express = require('express');
const { createServer } = require('http');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const MONGODB =
  'mongodb+srv://konstantin:e3oNRt6py371SPuh@onlinechat.nxh452d.mongodb.net/?retryWrites=true&w=majority';

(async () => {
  const app = express();

  const httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
  });

  await server.start();
  server.applyMiddleware({ app });

  mongoose.connect(MONGODB, { useNewUrlParser: true });

  const PORT = 3005;

  httpServer.listen(
    process.env.PORT || PORT,
    console.log(`Http server is now running on port ${PORT}`)
  );
})();
