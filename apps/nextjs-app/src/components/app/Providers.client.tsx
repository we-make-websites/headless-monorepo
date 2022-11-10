'use client';

import { ShopifyProvider } from '@shopify/hydrogen-react';
import type { ShopifyContextValue } from '@shopify/hydrogen-react/dist/types/ShopifyProvider';

const shopifyConfig: ShopifyContextValue = {
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN ?? '',
  storefrontApiVersion: process.env.NEXT_PUBLIC_STOREFRONT_ID ?? '',
  storefrontToken: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN ?? '',
};

export function AppProviders({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <ShopifyProvider shopifyConfig={{ ...shopifyConfig }}>
      {children}
    </ShopifyProvider>
  );
}
