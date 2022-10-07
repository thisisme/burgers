import { GraphQLClient } from 'graphql-request';

const endpoint = 'https://graphql.eu.fauna.com/graphql';

console.log(process.env.NEXT_PUBLIC_FAUNADB_SECRET_ADMIN)

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${process.env.NEXT_PUBLIC_FAUNADB_SECRET_ADMIN}`,
  },
});