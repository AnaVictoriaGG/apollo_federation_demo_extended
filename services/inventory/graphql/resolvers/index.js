import product from "./product";

const resolvers = {
  Query: {
    ...product.query
  },
  Mutation: {
    ...product.mutation
  },
  ...product.resolvers
};

export default resolvers;
