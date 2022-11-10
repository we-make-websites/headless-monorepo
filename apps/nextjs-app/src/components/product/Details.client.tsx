'use client';

import { ProductProvider } from '@shopify/hydrogen-react';
import type { ProductVariant } from '@shopify/hydrogen-react/storefront-api-types';
import type { ProductWithNodes } from 'types.d/hydrogen';
import ProductGallery from './Gallery.client';

export type ProductDetailsProps = {
  initialVariantId?: ProductVariant['id'];
  storefrontProduct: ProductWithNodes;
};

export default function ProductDetails({
  initialVariantId,
  storefrontProduct,
}: ProductDetailsProps) {
  return (
    <ProductProvider
      data={storefrontProduct}
      initialVariantId={initialVariantId}
    >
      {/* Gallery */}
      <ProductGallery storefrontProduct={storefrontProduct} />
      <div>Hello World</div>
    </ProductProvider>
  );
}
