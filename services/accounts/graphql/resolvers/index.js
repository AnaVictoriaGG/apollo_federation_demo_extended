import accounts from "./account";

const resolvers = {
  Query: {
    ...accounts.query
  },
  Mutation: {
    ...accounts.mutation
  },
  ...accounts.resolvers
};

export default resolvers;
