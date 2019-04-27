const createPackage = async (parent, args, context) => {
  return await context.prisma.createPackage({
    date: args.date,
    advice: args.advice,
    picture: args.picture,
    comments: { set: args.comments }
  });
};

module.exports = {
  createPackage
};
