import { createStorefrontClient } from '@shopify/hydrogen-react';
const client = createStorefrontClient({
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN ?? '',
  storeDomain: process.env.PUBLIC_STORE_DOMAIN ?? '',
  storefrontApiVersion: process.env.PUBLIC_STOREFRONT_ID ?? '',
});
export const shopifyClient = client;
export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
