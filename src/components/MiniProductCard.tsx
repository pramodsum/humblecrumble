/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Link from "next/link";
import {
  Box,
  Heading,
  Flex,
  Text,
  Skeleton as ChakraSkeleton,
  Image,
  AspectRatioBox,
} from "@chakra-ui/core";

import { GetProducts_products_edges_node } from "./__generated__/GetProducts";
import theme from "../utils/theme";

export const Skeleton: React.FC = () => (
  <Box textAlign="center">
    <ChakraSkeleton height="150px" width="100%" mb={2} />
    <ChakraSkeleton height="30px" width="100%" mb={2} />
    <ChakraSkeleton height="20px" width="100%" mb={3} />
  </Box>
);

const MiniProductCard: React.FC<GetProducts_products_edges_node> = ({
  handle,
  title,
  priceRange,
  images: { edges: imageNodes },
}) => (
  <Box
    textAlign="center"
    boxSizing="unset"
    border={`4px solid ${theme.colors.white}`}
    css={css`
      &:hover {
        color: ${theme.colors.hotPink};
        border: 4px dotted ${theme.colors.black};
      }
    `}
  >
    <Link href={`/cake/${handle}`}>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        {imageNodes.length > 0 && (
          <AspectRatioBox width="100%">
            <Image
              objectFit="contain"
              mr={2}
              src={imageNodes[0].node.transformedSrc}
            />
          </AspectRatioBox>
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
