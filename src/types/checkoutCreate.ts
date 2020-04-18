/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: checkoutCreate
// ====================================================

export interface checkoutCreate_checkoutCreate_checkout {
  __typename: "Checkout";
  /**
   * Globally unique identifier.
   */
  id: string;
}

export interface checkoutCreate_checkoutCreate {
  __typename: "CheckoutCreatePayload";
  /**
   * The new checkout object.
   */
  checkout: checkoutCreate_checkoutCreate_checkout | null;
}

export interface checkoutCreate {
  /**
   * Creates a new checkout.
   */
  checkoutCreate: checkoutCreate_checkoutCreate | null;
}
