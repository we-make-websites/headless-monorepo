'use client';

import { MediaFile } from '@shopify/hydrogen-react';
import { MediaContentType } from '@/lib/gql/graphql';
import type { ProductWithNodes } from 'types.d/hydrogen';

/**
 * A client component that defines a media gallery for hosting images, 3D models, and videos of products
 */

type Props = {
  storefrontProduct: ProductWithNodes;
};

const MODEL_3D_PROPS = {
  interactionPromptThreshold: '0',
};

export default function ProductGallery({ storefrontProduct }: Props) {
  const media = storefrontProduct?.media?.nodes;

  if (!media?.length) {
    return null;
  }

  return (
    <div className="bg-lightGray relative h-screen" tabIndex={-1}>
      <div className="flex h-full">
        {/* Slides */}
        {media.map((med) => {
          let extraProps = {};
          if (med.mediaContentType === MediaContentType.Model_3D) {
            extraProps = MODEL_3D_PROPS;
          }

          return (
            <MediaFile
              // @ts-expect-error options should accept className
              className="relative flex w-full shrink-0 grow-0 select-none object-cover"
              data={med}
              draggable={false}
              fetchpriority="high"
              key={med.id}
              options={{ crop: 'center' }}
              tabIndex={0}
              {...extraProps}
            />
          );
        })}
      </div>
    </div>
  );
}
