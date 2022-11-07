import { createStorefrontClient } from '@shopify/hydrogen-react';
const client = createStorefrontClient({
  privateStorefrontToken: process.env.PRIVATE_STOREFRONT_API_TOKEN ?? '',
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN ?? '',
  storefrontApiVersion: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN ?? '',
});
export const getStorefrontApiUrl = client.getStorefrontApiUrl;
export const getPrivateTokenHeaders = client.getPrivateTokenHeaders;
