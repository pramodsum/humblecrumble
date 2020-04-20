import React from "react";
import { CheckoutContext } from "../CheckoutContext";
import {
  Flex,
  Box,
  Heading,
  Text,
  Button,
  theme,
  ButtonProps,
} from "@chakra-ui/core";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const CartAction: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    size="sm"
    variant="outline"
    color="#fb175f"
    borderColor="#fb175f"
    _hover={{
      color: theme.colors.white,
      backgroundColor: "#fb175f",
    }}
    borderRadius={0}
    {...props}
  >
    {children}
  </Button>
);

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
        {checkout?.lineItems.edges.map(({ node }) => {
          const {
            variant: { title },
          } = node;
          const variants = title.split("/");
          return (
            <Flex width="100%" justifyContent="space-between" my={2} py={2}>
              <Box>
                <Heading as="h3" size="md">
                  {node.title}
                </Heading>
                <Flex>
                  <Heading as="h4" size="sm" mr={1}>
                    Size:
                  </Heading>
                  <Text>{variants[0]}</Text>
                </Flex>
                <Flex>
                  <Heading as="h4" size="sm" mr={1}>
                    Layers:
                  </Heading>
                  <Text>{variants[1]}</Text>
                </Flex>
                <Flex>
                  <Heading as="h4" size="sm" mr={1}>
                    Frosting:
                  </Heading>
                  <Text>{variants[2]}</Text>
                </Flex>
              </Box>
              <Flex flexDirection="column" alignItems="flex-end">
                <Heading as="h3" size="md" mb={2}>
                  ${parseInt(node.variant.priceV2.amount).toFixed(2)}
                </Heading>
                <Box>
                  <CartAction mr={2}>
                    <AiOutlinePlus />
                  </CartAction>
                  <CartAction>
                    <AiOutlineMinus />
                  </CartAction>
                </Box>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
      <Button
        backgroundColor="#fb175f"
        color={theme.colors.white}
        size="lg"
        _hover={{
          backgroundColor: theme.colors.white,
          color: "#fb175f",
        }}
      >
        Checkout
      </Button>
    </Flex>
  );
};

export default Cart;
