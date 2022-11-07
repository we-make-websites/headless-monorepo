import { gql } from 'graphql-request';
import {
  getPrivateTokenHeaders,
  getStorefrontApiUrl,
} from '../../../shopify-client';
import { PRODUCT_FIELDS } from '../../fragments/shopify/product';
import { PRODUCT_VARIANT_FIELDS } from '../../fragments/shopify/productVariant';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
async function getProduct() {
  const response = await fetch(getStorefrontApiUrl(), {
    body: QUERY_SHOPIFY,
    headers: getPrivateTokenHeaders({ buyerIp: '...' }),
    method: 'POST',
  });

  const json = await response.json();

  return { props: json };
}

export default function Product() {
  return <h1>Hello, Next.js!</h1>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const QUERY_SHOPIFY = gql`
  ${PRODUCT_FIELDS}
  ${PRODUCT_VARIANT_FIELDS}

  query product($country: CountryCode, $id: ID!, $language: LanguageCode)
  @inContext(country: $country, language: $language) {
    product: product(id: $id) {
      ...ProductFields
      media(first: 20) {
        nodes {
          ... on MediaImage {
            id
            image {
              altText
              height
              id
              url
              width
            }
            mediaContentType
          }
        }
      }
      variants(first: 250) {
        nodes {
          ...ProductVariantFields
        }
      }
    }
  }
`;
