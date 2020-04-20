/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetProducts
// ====================================================

export interface GetProducts_products_edges_node_priceRange_minVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: ShopifyDecimal;
}

export interface GetProducts_products_edges_node_priceRange_maxVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: ShopifyDecimal;
}

export interface GetProducts_products_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetProducts_products_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: GetProducts_products_edges_node_priceRange_maxVariantPrice;
}

export interface GetProducts_products_edges_node {
  __typename: "Product";
  /**
   * Globally unique identifier.
   */
  id: string;
  /**
   * The product’s title.
   */
  title: string;
  /**
   * A human-friendly unique string for the Product automatically generated from its title.
   * They are used by the Liquid templating language to refer to objects.
   */
  handle: string;
  /**
   * The price range.
   */
  priceRange: GetProducts_products_edges_node_priceRange;
}

export interface GetProducts_products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: GetProducts_products_edges_node;
}

export interface GetProducts_products {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: GetProducts_products_edges[];
}

export interface GetProducts {
  /**
   * List of the shop’s products.
   */
  products: GetProducts_products;
}

export interface GetProductsVariables {
  cursor?: string | null;
  query?: string | null;
}
