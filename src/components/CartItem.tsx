import React from "react";
import { Button, ButtonProps, Flex, Box, Heading, Text } from "@chakra-ui/core";
import {
  AiOutlinePlus,
  AiOutlineMinus,
  AiOutlinePlusSquare,
  AiOutlineMinusSquare,
} from "react-icons/ai";

import { CheckoutFragment_lineItems_edges_node } from "../__generated__/CheckoutFragment";
import theme from "../utils/theme";

const CartAction: React.FC<ButtonProps> = ({ children, ...props }) => (
  <Button
    size="md"
    variant="unstyled"
    color={theme.colors.hotPink}
    borderColor={theme.colors.hotPink}
    fontSize="4xl"
    display="inline-flex"
    justifyContent="center"
    alignItems="center"
    _hover={{
      color: theme.colors.white,
      backgroundColor: theme.colors.hotPink,
    }}
    borderRadius={theme.radii.md}
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
    <Flex
      width="100%"
      justifyContent="space-between"
      py={2}
      textTransform="lowercase"
    >
      <Box>
        <Heading as="h3" size="xl" fontFamily="title">
          {title}
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
        <Heading as="h3" size="lg" mb={2}>
          ${parseInt(variant.priceV2.amount).toFixed(2)}
        </Heading>
        <Box>
          <CartAction>
            <AiOutlinePlusSquare />
          </CartAction>
          <CartAction>
            <AiOutlineMinusSquare />
          </CartAction>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
