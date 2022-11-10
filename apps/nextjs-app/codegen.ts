import type { CodegenConfig } from '@graphql-codegen/cli';
import { getStorefrontApiUrl } from './shopify-client';

const url = getStorefrontApiUrl();
const accessToken = process.env.PUBLIC_STOREFRONT_API_TOKEN ?? '';

console.log(url, accessToken);

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          ['x-shopify-storefront-access-token']: accessToken,
        },
      },
    },
  ],
  documents: ['src/**/*.ts', 'src/**/*.tsx'],
  ignoreNoDocuments: true,
  generates: {
    ['./src/lib/gql/']: {
      preset: 'client',
      plugins: [
        {
          add: {
            content: '/* eslint-disable */',
          },
        },
      ],
    },
  },
};

export default config;
