import users from "./users";

const resolvers = {
  Query: {
    ...users.query
  },
  Mutation: {
    ...users.mutation
  },
  ...users.resolvers
};

export default resolvers;
