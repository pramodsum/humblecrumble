/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CurrencyCode } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: GetProductDetails
// ====================================================

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
   * The description of the product, complete with HTML formatting.
   */
  descriptionHtml: ShopifyHTML;
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
