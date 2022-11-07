import { gql } from 'graphql-request';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const PRODUCT_FIELDS = gql`
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
`;
