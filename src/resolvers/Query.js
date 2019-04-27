const { getAdvice } = require('./Helper.js');

const info = () => `This is the API of Zen Gen`;

const packages = (parent, args, context) => context.prisma.packages();

const getPackage = async (parent, args, context) => {
  let package = await context.prisma.package({ date: args.date });
  // If package exist return it, else, create new package
  if (package) {
    return package;
  } else {
    return await context.prisma.createPackage({
      date: args.date,
      advice: await getAdvice(),
      picture: 'https://source.unsplash.com/daily',
      comments: { set: [] }
    });
  }
};

module.exports = {
  info,
  packages,
  getPackage
};
