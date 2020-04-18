import React from "react";
import Link from "next/link";
import { ListItem } from "@chakra-ui/core";
import { gql } from "apollo-boost";
import { Product } from "../../models/shopify.model";
import { useQuery } from "@apollo/react-hooks";

const CakeLink = (props: Product) => (
  <ListItem>
    <Link href={`/cake/${props.handle}`}>
      <a>{props.title}</a>
    </Link>
  </ListItem>
);

const Products: React.FC = () => {
  // const { loading, data } = useQuery<;
  return <></>;
};

export const productsQuery = gql`
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          handle
        }
      }
    }
  }
`;

export default Products;
