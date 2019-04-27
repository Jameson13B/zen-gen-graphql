const { getAdvice } = require('./Helper.js');

const createPackage = async (parent, args, context) => {
  return await context.prisma.createPackage({
    date: args.date,
    advice: await getAdvice(),
    picture: 'https://source.unsplash.com/daily',
    comments: { set: [] }
  });
};
const createComment = async (parent, args, context) => {
  return await context.prisma.updatePackage({
    data: {
      comments: { set: args.comments }
    },
    where: {
      id: args.id
    }
  });
};
const changeAdvice = async (parent, args, context) => {
  return await context.prisma.updatePackage({
    data: {
      advice: await getAdvice()
    },
    where: {
      id: args.id
    }
  });
};

module.exports = {
  createPackage,
  createComment,
  changeAdvice
};
