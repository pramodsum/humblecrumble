import React from "react";
import { Flex, Button } from "@chakra-ui/core";

import { CheckoutContext } from "../CheckoutContext";
import CartItem from "../components/CartItem";
import theme from "../utils/theme";

const Cart: React.FC = () => {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <Flex width="100%" flexDirection="column" alignItems="flex-end" mb={6}>
      {checkout?.lineItems.edges.length === 0 && <h4>Cart is empty :(</h4>}
      <Flex
        width="100%"
        flexDirection="column"
        justifyContent="space-between"
        borderBottom={`1px dashed ${theme.colors.black}`}
        mb={4}
      >
        {checkout?.lineItems.edges.map(({ node }) => (
          <CartItem {...node} />
        ))}
      </Flex>
      <Button
        backgroundColor={theme.colors.hotPink}
        color={theme.colors.white}
        size="lg"
        _hover={{
          backgroundColor: theme.colors.white,
          color: theme.colors.hotPink,
        }}
      >
        Checkout
      </Button>
    </Flex>
  );
};

export default Cart;
