const { getAdvice } = require('./Helper.js');

const info = () => `This is the API of Zen Gen`;

const packages = (parent, args, context) => context.prisma.packages();

const getPackage = async (parent, args, context) => {
  if (args.date === null || args.date === '') throw 'Date missing: Try again';
  let package = await context.prisma.package({ date: args.date });
  // If package exist return it, else, create new package
  if (package) {
    return package;
  } else {
    const advice = await getAdvice();
    return await context.prisma.createPackage({
      date: args.date,
      advice: advice,
      picture: 'https://source.unsplash.com/daily',
      comments: {
        set: [
          'Discuss todays picture/advice, provide some inspiration, or share some good news here.'
        ]
      }
    });
  }
};

module.exports = {
  info,
  packages,
  getPackage
};
