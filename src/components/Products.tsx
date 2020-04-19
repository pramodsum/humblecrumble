import React from "react";
import Link from "next/link";
import { ListItem, CircularProgress } from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";

import {
  GetProducts,
  GetProductsVariables,
  GetProducts_products_edges_node,
} from "./__generated__/GetProducts";

const CakeLink: React.FC<GetProducts_products_edges_node> = ({
  handle,
  title,
}) => (
  <ListItem>
    <Link href={`/cake/${handle}`}>
      <a>{title}</a>
    </Link>
  </ListItem>
);

const Products: React.FC = () => {
  const { loading, data, error } = useQuery<GetProducts, GetProductsVariables>(
    GET_PRODUCTS
  );

  return (
    <>
      {loading && <CircularProgress isIndeterminate />}
      <ul>
        {data &&
          data.products.edges.map(({ node }) => (
            <CakeLink key={node.id} {...node} />
          ))}
      </ul>
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
        }
      }
    }
  }
`;

export default Products;
