import React from "react";
import { Button, ButtonProps, Flex, Box, Heading, Text } from "@chakra-ui/core";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { CheckoutFragment_lineItems_edges_node } from "../__generated__/CheckoutFragment";
import theme from "../utils/theme";

const CartAction: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    size="sm"
    variant="outline"
    color={theme.colors.hotPink}
    borderColor={theme.colors.hotPink}
    _hover={{
      color: theme.colors.white,
      backgroundColor: theme.colors.hotPink,
    }}
    borderRadius={0}
    {...props}
  >
    {children}
  </Button>
);

const CartItem: React.FC<CheckoutFragment_lineItems_edges_node> = ({
  variant,
  title,
}) => {
  const variants = variant.title.split("/");
  return (
    <Flex width="100%" justifyContent="space-between" py={2}>
      <Box>
        <Heading as="h3" size="xl" textTransform="lowercase" fontFamily="title">
          {title}
        </Heading>
        <Flex>
          <Heading as="h4" size="sm" mr={1} textTransform="lowercase">
            Size:
          </Heading>
          <Text>{variants[0]}</Text>
        </Flex>
        <Flex>
          <Heading as="h4" size="sm" mr={1} textTransform="lowercase">
            Layers:
          </Heading>
          <Text>{variants[1]}</Text>
        </Flex>
        <Flex>
          <Heading as="h4" size="sm" mr={1} textTransform="lowercase">
            Frosting:
          </Heading>
          <Text>{variants[2]}</Text>
        </Flex>
      </Box>
      <Flex flexDirection="column" alignItems="flex-end">
        <Heading as="h3" size="xl" mb={2} textTransform="lowercase">
          ${parseInt(variant.priceV2.amount).toFixed(2)}
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
};

export default CartItem;
