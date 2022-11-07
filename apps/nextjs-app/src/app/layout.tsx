'use client';

import { ShopifyProvider } from '@shopify/hydrogen-react';
import type { ShopifyContextValue } from '@shopify/hydrogen-react/dist/types/ShopifyProvider';
import { Suspense } from 'react';
import Loading from './loading';

const shopifyConfig: ShopifyContextValue = {
  storeDomain: process.env.NEXT_PUBLIC_STORE_DOMAIN ?? '',
  storefrontApiVersion: process.env.NEXT_PUBLIC_STOREFRONT_API_TOKEN ?? '',
  storefrontToken: process.env.NEXT_PUBLIC_STOREFRONT_ID ?? '',
};

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<Loading />}>
      <ShopifyProvider shopifyConfig={{ ...shopifyConfig }}>
        {/* Include shared UI here e.g. a header or sidebar */}
        <nav></nav>

        {children}
      </ShopifyProvider>
    </Suspense>
  );
}
