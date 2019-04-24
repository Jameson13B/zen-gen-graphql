const info = () => `This is the API of Zen Gen`;
const packages = (parent, args, context) => context.prisma.packages();

module.exports = {
  info,
  packages
};
