/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckoutLineItemInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: AddItemToCart
// ====================================================

export interface AddItemToCart_checkoutLineItemsReplace_checkout_totalTaxV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_subtotalPriceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_totalPriceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_image {
  __typename: "Image";
  /**
   * The location of the original image as a URL.
   * 
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
   */
  originalSrc: any;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_priceV2 {
  __typename: "MoneyV2";
  /**
   * Decimal money amount.
   */
  amount: any;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant {
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
  image: AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_image | null;
  /**
   * The product variant’s price.
   */
  priceV2: AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant_priceV2;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node {
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
  variant: AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node_variant | null;
  /**
   * The quantity of the line item.
   */
  quantity: number;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges {
  __typename: "CheckoutLineItemEdge";
  /**
   * The item at the end of CheckoutLineItemEdge.
   */
  node: AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges_node;
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout_lineItems {
  __typename: "CheckoutLineItemConnection";
  /**
   * A list of edges.
   */
  edges: AddItemToCart_checkoutLineItemsReplace_checkout_lineItems_edges[];
}

export interface AddItemToCart_checkoutLineItemsReplace_checkout {
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
   * The sum of all the taxes applied to the line items and shipping lines in the checkout.
   */
  totalTaxV2: AddItemToCart_checkoutLineItemsReplace_checkout_totalTaxV2;
  /**
   * Price of the checkout before shipping and taxes.
   */
  subtotalPriceV2: AddItemToCart_checkoutLineItemsReplace_checkout_subtotalPriceV2;
  /**
   * The sum of all the prices of all the items in the checkout, taxes and discounts included.
   */
  totalPriceV2: AddItemToCart_checkoutLineItemsReplace_checkout_totalPriceV2;
  /**
   * A list of line item objects, each one containing information about an item in the checkout.
   */
  lineItems: AddItemToCart_checkoutLineItemsReplace_checkout_lineItems;
}

export interface AddItemToCart_checkoutLineItemsReplace {
  __typename: "CheckoutLineItemsReplacePayload";
  /**
   * The updated checkout object.
   */
  checkout: AddItemToCart_checkoutLineItemsReplace_checkout | null;
}

export interface AddItemToCart {
  /**
   * Sets a list of line items to a checkout.
   */
  checkoutLineItemsReplace: AddItemToCart_checkoutLineItemsReplace | null;
}

export interface AddItemToCartVariables {
  lineItems: CheckoutLineItemInput[];
  checkoutId: string;
}
