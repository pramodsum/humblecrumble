import React from "react";
import Link from "next/link";
import { ListItem, CircularProgress, Flex } from "@chakra-ui/core";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

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
  const { loading, data, error } = useQuery(GET_PRODUCTS_QUERY);

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

const PRODUCTS_FRAGMENT = gql`
  fragment products on ProductConnection {
    edges {
      node {
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
      cursor
    }
    pageInfo {
      hasNextPage
    }
  }
`;

export const GET_PRODUCTS_QUERY = gql`
  ${PRODUCTS_FRAGMENT}
  query products(
    $cursor: String
    $query: String
    $sortKey: ProductSortKeys
    $reverse: Boolean
  ) {
    products(
      first: 30
      after: $cursor
      query: $query
      sortKey: $sortKey
      reverse: $reverse
    ) {
      ...products
    }
  }
`;

export default Products;
