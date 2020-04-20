import React from "react";
import gql from "graphql-tag";
import { ApolloError } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";
import { Flex, theme } from "@chakra-ui/core";

import Header from "./components/Header";

import {
  AddItemToCart,
  AddItemToCartVariables,
} from "./__generated__/AddItemToCart";
import {
  CreateCheckout_checkoutCreate_checkout,
  CreateCheckoutVariables,
  CreateCheckout,
} from "./__generated__/CreateCheckout";
import { CheckoutLineItemInput } from "./__generated__/globalTypes";

const CheckoutFragment = gql`
  fragment CheckoutFragment on Checkout {
    id
    webUrl
    totalTaxV2 {
      amount
    }
    subtotalPriceV2 {
      amount
    }
    totalPriceV2 {
      amount
    }
    lineItems(first: 250) {
      edges {
        node {
          id
          title
          variant {
            id
            title
            image {
              originalSrc
            }
            priceV2 {
              amount
            }
          }
          quantity
        }
      }
    }
  }
`;

export const CREATE_CHECKOUT = gql`
  mutation CreateCheckout($input: CheckoutCreateInput!) {
    checkoutCreate(input: $input) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export const ADD_ITEM_TO_CART = gql`
  mutation AddItemToCart(
    $lineItems: [CheckoutLineItemInput!]!
    $checkoutId: ID!
  ) {
    checkoutLineItemsReplace(lineItems: $lineItems, checkoutId: $checkoutId) {
      checkout {
        ...CheckoutFragment
      }
    }
  }
  ${CheckoutFragment}
`;

export type CheckoutContextData = {
  loading: boolean;
  checkout: CreateCheckout_checkoutCreate_checkout | null;
  addItemToCart?: (variantId: string) => void;
  error?: ApolloError;
};

export const CheckoutContext = React.createContext<CheckoutContextData>({
  loading: true,
  checkout: null,
});

export const CheckoutProvider: React.FC = ({ children }) => {
  const [checkout, setCheckout] = React.useState<
    CreateCheckout_checkoutCreate_checkout
  >();

  const [createCheckout, { loading, data, error }] = useMutation<
    CreateCheckout,
    CreateCheckoutVariables
  >(CREATE_CHECKOUT, { variables: { input: {} } });

  const [updateCheckout] = useMutation<AddItemToCart, AddItemToCartVariables>(
    ADD_ITEM_TO_CART
  );

  const addItemToCart = async (variantId: string) => {
    const lineItems: CheckoutLineItemInput[] = checkout.lineItems.edges.map(
      ({ node: { variant, quantity } }) => ({
        variantId: variant.id,
        quantity: quantity,
      })
    );
    updateCheckout({
      variables: {
        checkoutId: checkout.id,
        lineItems: [...lineItems, { quantity: 1, variantId }],
      },
    })
      .then((res) => setCheckout(res.data.checkoutLineItemsReplace.checkout))
      .catch(console.error);
  };

  React.useEffect(() => {
    createCheckout();
  }, []);

  React.useEffect(() => {
    !loading && data && setCheckout(data.checkoutCreate.checkout);
  }, [loading, data]);

  return (
    <CheckoutContext.Provider
      value={{ loading, checkout, error, addItemToCart }}
    >
      {loading ? (
        <>
          <Header />
          <Flex maxWidth={theme.breakpoints["md"]} mx="auto" px={1}>
            {children}
          </Flex>
        </>
      ) : (
        children
      )}
    </CheckoutContext.Provider>
  );
};
