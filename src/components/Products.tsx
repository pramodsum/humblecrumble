import React from "react";
import { Spinner, Flex, SimpleGrid } from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { GetProducts, GetProductsVariables } from "./__generated__/GetProducts";
import MiniProductCard from "./MiniProductCard";

const Products: React.FC = () => {
  const { loading, data, error } = useQuery<GetProducts, GetProductsVariables>(
    GET_PRODUCTS
  );

  return (
    <>
      {loading && (
        <Flex width="100%" mt={12} justifyContent="center" alignItems="center">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.50"
            color="hotPink"
            size="xl"
          />
        </Flex>
      )}
      <SimpleGrid width="100%" columns={[2, 3]} spacing={3}>
        {data &&
          data.products.edges.map(({ node }) => (
            <MiniProductCard key={node.id} {...node} />
          ))}
      </SimpleGrid>
      {error && <pre>{JSON.stringify(error)}</pre>}
    </>
  );
};

export const GET_PRODUCTS = gql`
  query GetProducts($cursor: String, $query: String) {
    products(first: 30, after: $cursor, query: $query) {
      edges {
        node {
          id
          title
          handle
          images(first: 1) {
            edges {
              node {
                altText
                transformedSrc
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
            }
            maxVariantPrice {
              amount
            }
          }
        }
      }
    }
  }
`;

export default Products;
