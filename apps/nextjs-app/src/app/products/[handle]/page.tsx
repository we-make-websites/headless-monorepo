import ProductDetails from '@/components/product/Details.client';
import { graphql } from '@/lib/gql';
import { CountryCode, LanguageCode } from '@/lib/gql/graphql';
import { graphqlClient } from '@/lib/graphql-client';

const QUERY_SHOPIFY = graphql(/* GraphQL */ `
  query product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
  ) @inContext(country: $country, language: $language) {
    product: product(handle: $handle) {
      ...ProductFields
      media(first: 20) {
        nodes {
          __typename
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
`);

const ProductPage = async ({ params }: { params: { handle: string } }) => {
  const { product } = await graphqlClient.request(QUERY_SHOPIFY, {
    handle: params.handle,
    country: CountryCode.Gb,
    language: LanguageCode.En,
  });
  const initialVariant = product?.variants.nodes[0].id;

  if (!product || !initialVariant) return <p>Not found</p>;

  return (
    <ProductDetails
      storefrontProduct={product}
      initialVariantId={initialVariant}
    />
  );
};

export default ProductPage;
