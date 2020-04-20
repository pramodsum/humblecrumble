/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import { Box, Heading, Flex, Text, Skeleton, Image } from "@chakra-ui/core";

import { GetProducts_products_edges_node } from "./__generated__/GetProducts";
import theme from "../utils/theme";

const MiniProductCard: React.FC<GetProducts_products_edges_node> = ({
  handle,
  title,
  priceRange,
  images: { edges: imageNodes },
}) => (
  <Box
    textAlign="center"
    css={css`
      &:hover {
        color: ${theme.colors.hotPink};
      }
    `}
  >
    <Link href={`/cake/${handle}`}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {imageNodes.length > 0 ? (
          <Image
            height="auto"
            width="100%"
            mb={4}
            mr={2}
            src={imageNodes[0].node.transformedSrc}
          />
        ) : (
          <Skeleton height="200px" width="200px" mb={4} />
        )}
        <Heading as="h3" size="md" textTransform="lowercase">
          {title}
        </Heading>
        <Text fontWeight="300" m={0}>
          ${parseInt(priceRange.minVariantPrice.amount).toFixed(2)} - $
          {parseInt(priceRange.maxVariantPrice.amount).toFixed(2)}
        </Text>
      </Flex>
    </Link>
  </Box>
);

export default MiniProductCard;
