import React from "react";
import { CircularProgress, Flex, Box, Button, theme } from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";
import {
  GetProductDetails,
  GetProductDetailsVariables,
  GetProductDetails_productByHandle_variants_edges,
} from "./__generated__/GetProductDetails";
import styled from "@emotion/styled";
import CakeImg, { CakeVariant } from "./CakeImg";
import CakeImgBackground from "./CakeImgBackground";
import OrderForm from "./OrderForm";

const Title = styled.h1`
  text-transform: capitalize;
  overflow-wrap: break-word;
  font-size: 2rem;
`;

const Product: React.FC<WithRouterProps> = ({ router: { query } }) => {
  const handle = query.handle as string;
  const { loading, data, error } = useQuery<
    GetProductDetails,
    GetProductDetailsVariables
  >(GET_PRODUCT_DETAILS, { variables: { handle } });
  const [selectedVariant, setSelectedVariant] = React.useState<
    GetProductDetails_productByHandle_variants_edges
  >();
  const [cakeVariant, setCakeVariant] = React.useState<CakeVariant>();

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
    <>
      {loading && <CircularProgress isIndeterminate />}
      {data?.productByHandle && (
        <Box>
          <Title>{data.productByHandle.title}</Title>
          <Flex>
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
                  isFullWidth
                  variant="outline"
                  variantColor={theme.colors.black}
                  _hover={{
                    backgroundColor: theme.colors.black,
                    color: theme.colors.white,
                  }}
                >
                  Add to cart
                </Button>
              )}
            </Box>
          </Flex>
          {/* <p dangerouslySetInnerHTML={{ __html: descriptionHtml }} /> */}
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </Box>
      )}
      {error && <pre>{JSON.stringify(error)}</pre>}
    </>
  );
};

export const GET_PRODUCT_DETAILS = gql`
  query GetProductDetails($handle: String!) {
    productByHandle(handle: $handle) {
      title
      description
      images(first: 1) {
        edges {
          node {
            altText
            transformedSrc
          }
        }
      }
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
