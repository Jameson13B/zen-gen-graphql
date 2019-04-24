const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const resolvers = {
  Query: {
    info: () => `This is the API of Zen Gen`,
    packages: (parent, args, context) => context.prisma.packages()
  },
  Mutation: {
    createPackage: (parent, args, context) => {
      return context.prisma.createPackage({
        date: args.date,
        advice: args.advice,
        picture: args.picture,
        comments: { set: args.comments }
      });
    }
  }
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: { prisma }
});

server.start(() => console.log(`Server is running on http://localhost:4000`));
