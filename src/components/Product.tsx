/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext, useState } from "react";
import {
  Skeleton as ChakraSkeleton,
  Flex,
  Box,
  Button,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

import {
  GetProductDetails,
  GetProductDetailsVariables,
  GetProductDetails_productByHandle_variants_edges,
} from "./__generated__/GetProductDetails";

import CakeImg, { CakeVariant } from "./CakeImg";
import CakeImgBackground from "./CakeImgBackground";
import OrderForm from "./OrderForm";
import { CheckoutContext } from "../CheckoutContext";
import theme from "../utils/theme";

const SkeletonText = () => (
  <SimpleGrid columns={1} spacing={4}>
    <ChakraSkeleton height="20px" />
    <ChakraSkeleton height="20px" />
  </SimpleGrid>
);

const Skeleton: React.FC = () => (
  <SimpleGrid columns={1} spacing={4}>
    <ChakraSkeleton height="50px" />
    <SimpleGrid columns={[1, null, 2]} spacing={5}>
      <ChakraSkeleton height="200px" mr={[0, null, 3]} />
      <SimpleGrid columns={1} spacing={5}>
        <ChakraSkeleton height="30px" />
        <SkeletonText />
        <SkeletonText />
        <SkeletonText />
        <ChakraSkeleton height="60px" />
      </SimpleGrid>
    </SimpleGrid>
  </SimpleGrid>
);

const Product: React.FC<WithRouterProps> = ({ router }) => {
  const handle = router.query.handle as string;
  const [selectedVariant, setSelectedVariant] = useState<
    GetProductDetails_productByHandle_variants_edges
  >();
  const [cakeVariant, setCakeVariant] = useState<CakeVariant>();
  const { addItemToCart } = useContext(CheckoutContext);

  const { loading, data, error } = useQuery<
    GetProductDetails,
    GetProductDetailsVariables
  >(GET_PRODUCT_DETAILS, { variables: { handle } });

  const findMatchingVariant = (
    size: string,
    layer: string,
    frosting: string
  ) => {
    const matching = data.productByHandle.variants.edges.find(
      (variant) =>
        variant.node.selectedOptions.some(
          (selected) => selected.value === size
        ) &&
        variant.node.selectedOptions.some(
          (selected) => selected.value === layer
        ) &&
        variant.node.selectedOptions.some(
          (selected) => selected.value === frosting
        )
    );
    matching && setSelectedVariant(matching);
  };

  return (
    <Box mx="auto" width="100%">
      {loading && <Skeleton />}
      {data?.productByHandle && (
        <Box>
          <Heading
            as="h1"
            size="xl"
            mb={3}
            textTransform="lowercase"
            overflowWrap="break-word"
          >
            {data.productByHandle.title}
          </Heading>
          <Flex flexDirection={["column", null, "row"]} mb={8}>
            <CakeImgBackground>
              {cakeVariant && (
                <CakeImg
                  cakeFlavor={data.productByHandle.title}
                  variant={cakeVariant}
                />
              )}
            </CakeImgBackground>
            <Box>
              {data.productByHandle && (
                <OrderForm
                  findMatchingVariant={findMatchingVariant}
                  selectedVariant={selectedVariant}
                  setCakeVariant={setCakeVariant}
                  {...data.productByHandle}
                />
              )}
              {selectedVariant && (
                <Button
                  mb={4}
                  isFullWidth
                  variant="outline"
                  variantColor={theme.colors.black}
                  _hover={{
                    backgroundColor: theme.colors.black,
                    color: theme.colors.white,
                  }}
                  onClick={() => {
                    addItemToCart(selectedVariant.node.id);
                  }}
                >
                  Add to cart
                </Button>
              )}
            </Box>
          </Flex>
          <Text
            borderTop="1px dashed gray"
            pt={4}
            css={css`
              strong,
              b {
                font-size: ${theme.fontSizes.sm};
              }
            `}
            dangerouslySetInnerHTML={{
              __html: data.productByHandle.descriptionHtml,
            }}
          />
        </Box>
      )}
      {error && <pre>{JSON.stringify(error)}</pre>}
    </Box>
  );
};

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($handle: String!) {
    productByHandle(handle: $handle) {
      title
      descriptionHtml
      options {
        id
        name
        values
      }
      variants(first: 250) {
        edges {
          node {
            id
            title
            priceV2 {
              amount
            }
            selectedOptions {
              name
              value
            }
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`;

export default withRouter(Product);
