import { graphql } from '@/lib/gql';

export const PRODUCT_FIELDS = graphql(/* GraphQL */ `
  fragment ProductFields on Product {
    handle
    id
    options {
      name
      values
    }
    title
    vendor
  }
`);
