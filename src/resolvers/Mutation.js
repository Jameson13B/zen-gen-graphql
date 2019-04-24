const createPackage = (parent, args, context) => {
  return context.prisma.createPackage({
    date: args.date,
    advice: args.advice,
    picture: args.picture,
    comments: { set: args.comments }
  });
};

module.exports = {
  createPackage
};
