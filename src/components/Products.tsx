import React from "react";
import Link from "next/link";
import { ListItem } from "@chakra-ui/core";
import { gql } from "apollo-boost";

const CakeLink = (props) => (
  <ListItem>
    <Link href={`/cake/${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </ListItem>
);

const Products: React.FC = () => {
  return <></>;
};

// export const productQuery = gql`
//   query ProductQuery($handle: String!) {
//     shopifyProduct(handle: { eq: $handle }) {
//       id
//       title
//       handle
//       productType
//       description
//       descriptionHtml
//       shopifyId
//       options {
//         id
//         name
//         values
//       }
//       variants {
//         id
//         title
//         price
//         availableForSale
//         shopifyId
//         selectedOptions {
//           name
//           value
//         }
//       }
//       priceRange {
//         minVariantPrice {
//           amount
//           currencyCode
//         }
//         maxVariantPrice {
//           amount
//           currencyCode
//         }
//       }
//     }
//   }
// `;

export default Products;
