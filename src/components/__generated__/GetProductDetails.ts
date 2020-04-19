/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetProductDetails
// ====================================================

export interface GetProductDetails_productByHandle_images_edges_node {
  __typename: "Image";
  /**
   * A word or phrase to share the nature or contents of an image.
   */
  altText: string | null;
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: ShopifyURL;
}

export interface GetProductDetails_productByHandle_images_edges {
  __typename: "ImageEdge";
  /**
   * The item at the end of ImageEdge.
   */
  node: GetProductDetails_productByHandle_images_edges_node;
}

export interface GetProductDetails_productByHandle_images {
  __typename: "ImageConnection";
  /**
   * A list of edges.
   */
  edges: GetProductDetails_productByHandle_images_edges[];
}

export interface GetProductDetails_productByHandle_options {
  __typename: "ProductOption";
  /**
   * Globally unique identifier.
   */
  id: string;
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The corresponding value to the product option name.
   */
  values: string[];
}

export interface GetProductDetails_productByHandle_variants_edges_node_priceV2 {
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

export interface GetProductDetails_productByHandle_variants_edges_node_selectedOptions {
  __typename: "SelectedOption";
  /**
   * The product option’s name.
   */
  name: string;
  /**
   * The product option’s value.
   */
  value: string;
}

export interface GetProductDetails_productByHandle_variants_edges_node {
  __typename: "ProductVariant";
  /**
   * Globally unique identifier.
   */
  id: string;
  /**
   * The product variant’s title.
   */
  title: string;
  /**
   * The product variant’s price.
   */
  priceV2: GetProductDetails_productByHandle_variants_edges_node_priceV2;
  /**
   * List of product options applied to the variant.
   */
  selectedOptions: GetProductDetails_productByHandle_variants_edges_node_selectedOptions[];
}

export interface GetProductDetails_productByHandle_variants_edges {
  __typename: "ProductVariantEdge";
  /**
   * The item at the end of ProductVariantEdge.
   */
  node: GetProductDetails_productByHandle_variants_edges_node;
}

export interface GetProductDetails_productByHandle_variants {
  __typename: "ProductVariantConnection";
  /**
   * A list of edges.
   */
  edges: GetProductDetails_productByHandle_variants_edges[];
}

export interface GetProductDetails_productByHandle_priceRange_minVariantPrice {
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

export interface GetProductDetails_productByHandle_priceRange_maxVariantPrice {
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

export interface GetProductDetails_productByHandle_priceRange {
  __typename: "ProductPriceRange";
  /**
   * The lowest variant's price.
   */
  minVariantPrice: GetProductDetails_productByHandle_priceRange_minVariantPrice;
  /**
   * The highest variant's price.
   */
  maxVariantPrice: GetProductDetails_productByHandle_priceRange_maxVariantPrice;
}

export interface GetProductDetails_productByHandle {
  __typename: "Product";
  /**
   * The product’s title.
   */
  title: string;
  /**
   * Stripped description of the product, single line with HTML tags removed.
   */
  description: string;
  /**
   * List of images associated with the product.
   */
  images: GetProductDetails_productByHandle_images;
  /**
   * List of custom product options (maximum of 3 per product).
   */
  options: GetProductDetails_productByHandle_options[];
  /**
   * List of the product’s variants.
   */
  variants: GetProductDetails_productByHandle_variants;
  /**
   * The price range.
   */
  priceRange: GetProductDetails_productByHandle_priceRange;
}

export interface GetProductDetails {
  /**
   * Find a product by its handle.
   */
  productByHandle: GetProductDetails_productByHandle | null;
}

export interface GetProductDetailsVariables {
  handle: string;
}
