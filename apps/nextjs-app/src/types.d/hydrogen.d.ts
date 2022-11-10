import type {
  Collection,
  Customer,
  MailingAddress,
  MailingAddressConnection,
  MediaConnection,
  Order,
  OrderLineItemConnection,
  Product,
  ProductVariantConnection,
} from '@shopify/hydrogen/storefront-api-types';

export type CollectionWithNodes = Partial<Omit<Collection, 'products'>> & {
  products: {
    nodes: ProductWithNodes[];
  };
};

export type CustomerWithNodes = Omit<Customer, 'addresses' | 'orders'> & {
  addresses: {
    nodes: MailingAddressConnection['nodes'];
  };
  orders: {
    nodes: OrderWithNodes[];
  };
};

export type MailingAddressExtended = MailingAddress & {
  originalId: string;
};

export type OrderWithNodes = Omit<Order, 'lineItems'> & {
  lineItems: {
    nodes: OrderLineItemConnection['nodes'];
  };
};

export type ProductWithNodes = Partial<Omit<Product, 'media' | 'variants'>> & {
  media?: {
    nodes: MediaConnection['nodes'];
  };
  variants: {
    nodes: ProductVariantConnection['nodes'];
  };
};
