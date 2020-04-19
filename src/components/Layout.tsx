import React from "react";

import Header from "./Header";
import { Flex, theme } from "@chakra-ui/core";

const Layout: React.FC = ({ children }) => (
  <>
    <Header />
    <Flex maxWidth={theme.breakpoints["md"]} mx="auto" px={1}>
      {children}
    </Flex>
  </>
);

export default Layout;
