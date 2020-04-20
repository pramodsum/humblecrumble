import React from "react";
import { Flex, Box, SimpleGrid } from "@chakra-ui/core";

import theme from "../utils/theme";

const Footer: React.FC = () => (
  <Box
    background={theme.colors.lemon[50]}
    position="absolute"
    width="100%"
    bottom={0}
    py={4}
  >
    <Flex maxWidth={theme.breakpoints["md"]} mx="auto" px={6}>
      <SimpleGrid></SimpleGrid>
    </Flex>
  </Box>
);

export default Footer;
