import React from "react";
import { CheckoutContext } from "../CheckoutContext";
import { Flex, Box, Heading, Text, Button, theme } from "@chakra-ui/core";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Cart: React.FC = () => {
  const { checkout } = React.useContext(CheckoutContext);
  return (
    <>
      {checkout?.lineItems.edges.length === 0 && <h4>Cart is empty :(</h4>}
      {checkout?.lineItems.edges.map(({ node }) => {
        const {
          variant: { title },
        } = node;
        const variants = title.split("/");
        return (
          <>
            <Flex
              width="100%"
              justifyContent="space-between"
              border={`1px solid ${theme.colors.black}`}
              borderRadius={theme.radii.md}
              py={2}
              px={4}
            >
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
              <Flex
                flexDirection="column"
                alignItems="flex-end"
                justifyContent="space-around"
              >
                <Heading as="h3" size="md">
                  ${parseInt(node.variant.priceV2.amount).toFixed(2)}
                </Heading>
                <Box>
                  <Button
                    variant="outline"
                    variantColor={theme.colors.black}
                    mr={2}
                  >
                    <AiOutlinePlus />
                  </Button>
                  <Button variant="outline" variantColor={theme.colors.black}>
                    <AiOutlineMinus />
                  </Button>
                </Box>
              </Flex>
            </Flex>
          </>
        );
      })}
    </>
  );
};

export default Cart;
