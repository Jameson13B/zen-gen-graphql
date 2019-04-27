const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query');
const Mutation = require('./resolvers/Mutation');

const resolvers = {
  Query,
  Mutation
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
});

server.start(
  console.log('\x1b[95m%s\x1b[0m', `Welcome to Zen Gen GraphQL Server`),
  console.log(
    `\nServer is running on http://localhost:4000
    \nTo close and exit server: control + C`
  )
);
