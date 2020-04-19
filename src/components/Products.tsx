import React from "react";
import Link from "next/link";
import { ListItem, CircularProgress, Flex } from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import { GetProducts, GetProductsVariables } from "./__generated__/GetProducts";

interface ICakeLinkProps {
  handle: string;
  title: string;
}

const CakeLink: React.FC<ICakeLinkProps> = ({ handle, title }) => (
  <ListItem>
    <Link href={`/cake/${handle}`}>{title}</Link>
  </ListItem>
);

const Products: React.FC = () => {
  const { loading, data, error } = useQuery<GetProducts, GetProductsVariables>(
    GET_PRODUCTS
  );

  return (
    <Flex mx="auto">
      {loading && <CircularProgress isIndeterminate />}
      <ul>
        {data &&
          data.products.edges.map(({ node }) => (
            <CakeLink key={node.id} handle={node.handle} title={node.title} />
          ))}
      </ul>
      {error && <pre>{JSON.stringify(error)}</pre>}
    </Flex>
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
          description
          createdAt
          images(first: 1) {
            edges {
              node {
                transformedSrc
                altText
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
    }
  }
`;

export default Products;
