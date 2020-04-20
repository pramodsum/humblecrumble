import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { GetProducts, GetProductsVariables } from "./__generated__/GetProducts";
import MiniProductCard, { Skeleton } from "./MiniProductCard";

const Products: React.FC = () => {
  const { loading, data, error } = useQuery<GetProducts, GetProductsVariables>(
    GET_PRODUCTS
  );

  return (
    <>
      <SimpleGrid width="100%" columns={[2, 3, 4]} spacing={3}>
        {loading && new Array(6).fill(<Skeleton />)}
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
    products(first: 30, sortKey: BEST_SELLING, after: $cursor, query: $query) {
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
