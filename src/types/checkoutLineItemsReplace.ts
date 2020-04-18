/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckoutLineItemInput, CurrencyCode } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: checkoutLineItemsReplace
// ====================================================

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_subtotalPriceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_totalTaxV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_totalPriceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_pageInfo {
  __typename: "PageInfo";
  /**
   * Indicates if there are more pages to fetch.
   */
  hasNextPage: boolean;
  /**
   * Indicates if there are any pages prior to the current page.
   */
  hasPreviousPage: boolean;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_image {
  __typename: "Image";
  /**
   * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
   */
  transformedSrc: any;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_priceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
  /**
   * Currency of the money.
   */
  currencyCode: CurrencyCode;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant {
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
   * Image associated with the product variant. This field falls back to the product image if no image is available.
   */
  image: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_image | null;
  /**
   * The product variant’s price.
   */
  priceV2: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_priceV2;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node {
  __typename: "CheckoutLineItem";
  /**
   * Globally unique identifier.
   */
  id: string;
  /**
   * Title of the line item. Defaults to the product's title.
   */
  title: string;
  /**
   * Product variant of the line item.
   */
  variant: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant | null;
  /**
   * The quantity of the line item.
   */
  quantity: number;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges {
  __typename: "CheckoutLineItemEdge";
  /**
   * The item at the end of CheckoutLineItemEdge.
   */
  node: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges_node;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems {
  __typename: "CheckoutLineItemConnection";
  /**
   * Information to aid in pagination.
   */
  pageInfo: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_pageInfo;
  /**
   * A list of edges.
   */
  edges: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems_edges[];
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace_checkout {
  __typename: "Checkout";
  /**
   * Globally unique identifier.
   */
  id: string;
  /**
   * The url pointing to the checkout accessible from the web.
   */
  webUrl: any;
  /**
   * Price of the checkout before shipping and taxes.
   */
  subtotalPriceV2: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_subtotalPriceV2;
  /**
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   */
  totalTaxV2: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_totalTaxV2;
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   */
  totalPriceV2: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_totalPriceV2;
  /**
   * A list of line item objects, each one containing information about an item in the checkout.
   */
  lineItems: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout_lineItems;
}

export interface checkoutLineItemsReplace_checkoutLineItemsReplace {
  __typename: "CheckoutLineItemsReplacePayload";
  /**
   * The updated checkout object.
   */
  checkout: checkoutLineItemsReplace_checkoutLineItemsReplace_checkout | null;
}

export interface checkoutLineItemsReplace {
  /**
   * Sets a list of line items to a checkout.
   */
  checkoutLineItemsReplace: checkoutLineItemsReplace_checkoutLineItemsReplace | null;
}

export interface checkoutLineItemsReplaceVariables {
  checkoutId: string;
  lineItems: CheckoutLineItemInput[];
}
