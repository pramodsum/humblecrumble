/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: products
// ====================================================

export interface products_edges_node_images_edges_node {
  __typename: "Image";
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: ShopifyURL;
  /**
   * A word or phrase to share the nature or contents of an image.
   */
  altText: string | null;
}

export interface products_edges_node_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: products_edges_node_images_edges_node;
}

export interface products_edges_node_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: products_edges_node_images_edges[];
}

export interface products_edges_node_priceRange_minVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: ShopifyDecimal;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface products_edges_node_priceRange_maxVariantPrice {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: ShopifyDecimal;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface products_edges_node_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: products_edges_node_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: products_edges_node_priceRange_maxVariantPrice;
}

export interface products_edges_node {
  __typename: "Product";
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
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * The date and time when the product was created.
   */
  createdAt: ShopifyDateTime;
  /**
   * List of images associated with the product.
   */
  images: products_edges_node_images;
  /**
   * The price range.
   */
  priceRange: products_edges_node_priceRange;
}

export interface products_edges {
  __typename: "ProductEdge";
  /**
   * The item at the end of ProductEdge.
   */
  node: products_edges_node;
  /**
   * A cursor for use in pagination.
   */
  cursor: string;
}

export interface products_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean;
}

export interface products {
  __typename: "ProductConnection";
  /**
   * A list of edges.
   */
  edges: products_edges[];
  /**
   * Information to aid in pagination.
   */
  pageInfo: products_pageInfo;
}
