const { getAdvice } = require('./Helper.js');

const info = () => `This is the API of Zen Gen`;

const packages = (parent, args, context) => context.prisma.packages();

const getPackage = async (parent, args, context) => {
  const package = await context.prisma.package({ date: args.date });
  // If package exist return it, else, create new package
  if (package) {
    return package;
  } else {
    let pack = await context.prisma.createPackage({
      date: args.date,
      // Request Advice(error here - returns undefined/null)
      advice: getAdvice(),
      // Request Picture(pending - will use a third party API)
      picture: `pic_${args.date}.jpg`,
      // defaults empty array
      comments: { set: [] }
    });
    return pack;
  }
};

module.exports = {
  info,
  packages,
  getPackage
};
