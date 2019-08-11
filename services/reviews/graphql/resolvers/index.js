import user from "./user";

const resolvers = {
  Query: {
    ...user.query
  },
  Mutation: {
    ...user.mutation
  },
  ...user.resolvers
};

export default resolvers;
