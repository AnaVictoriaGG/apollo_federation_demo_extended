import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";

import typeDefs from "./graphql/schemas/typeDefs";

import resolvers from "./graphql/resolvers/index";

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 4004 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
