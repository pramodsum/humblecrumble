import React from "react";
import { Flex, Button, Stack, Box } from "@chakra-ui/core";

import { CheckoutContext } from "../CheckoutContext";
import CartItem from "../components/CartItem";
import theme from "../utils/theme";

const Cart: React.FC = () => {
  const { checkout } = React.useContext(CheckoutContext);

  return (
    <Flex width="100%" flexDirection="column" alignItems="flex-end" mb={6}>
      {checkout?.lineItems.edges.length ? (
        <>
          <Stack
            width="100%"
            spacing={6}
            mb={6}
            borderBottom={`1px dashed ${theme.colors.black}`}
          >
            {checkout?.lineItems.edges.map(({ node }) => (
              <CartItem {...node} />
            ))}
          </Stack>
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
        </>
      ) : (
        <Box width="100%" textAlign="center">
          <h4>Cart is empty :(</h4>
        </Box>
      )}
    </Flex>
  );
};

export default Cart;
