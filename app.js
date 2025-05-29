const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const { startStandaloneServer  } = require('@apollo/server/standalone')
const mongoose = require('mongoose');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const cors = require('cors');
const bodyParser = require('body-parser');

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  app.use(cors());
  app.use(bodyParser.json());

  const {url} = await startStandaloneServer(server, {
    listen: {port:4000}
  })
  console.log(`🚀 Server ready at ${url}`);
}

startServer();

