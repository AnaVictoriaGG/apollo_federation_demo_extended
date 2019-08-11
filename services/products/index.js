import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";

import typeDefs from "./graphQL/schemas/typeDefs";

import resolvers from "./graphQL/resolvers/index";

const server = new ApolloServer({
  schema: buildFederatedSchema([
    {
      typeDefs: typeDefs,
      resolvers
    }
  ])
});

server.listen({ port: 4003 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
