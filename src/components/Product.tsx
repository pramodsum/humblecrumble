/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext, useState } from "react";
import { Skeleton, Flex, Box, Button, Text, Heading } from "@chakra-ui/core";
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

const ProductSkeleton: React.FC = () => (
  <>
    <Skeleton height="20px" width={["327px", "720px"]} my={4} />
    <Flex width="100%" display={["column", "row"]}>
      <Skeleton height="200px" width="327px" my={4} mr={[0, 3]} mb={[3, 0]} />
      <Flex flexDirection="column" alignItems="flex-end">
        <Box>
          <Skeleton height="20px" width={["327px", "410px"]} my={4} />
          <Skeleton height="20px" width={["327px", "410px"]} my={4} />
        </Box>
        <Box>
          <Skeleton height="20px" width={["327px", "410px"]} my={4} />
          <Skeleton height="20px" width={["327px", "410px"]} my={4} />
        </Box>
        <Box>
          <Skeleton height="20px" width={["327px", "410px"]} my={4} />
          <Skeleton height="20px" width={["327px", "410px"]} my={4} />
        </Box>
        <Skeleton height="40px" width={["327px", "410px"]} my={4} />
      </Flex>
    </Flex>
  </>
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
    <Box>
      {loading && <ProductSkeleton />}
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
          <Flex display={["column", "row"]}>
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
