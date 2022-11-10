import { GraphQLClient } from 'graphql-request';

const accessToken = process.env.PUBLIC_STOREFRONT_API_TOKEN ?? '';

export const graphqlClient = new GraphQLClient(
  'https://oxygenator.myshopify.com/api/2022-10/graphql.json',
  {
    headers: {
      ['x-shopify-storefront-access-token']: accessToken,
    },
  }
);
