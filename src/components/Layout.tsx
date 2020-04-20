import React from "react";
import { Flex, theme } from "@chakra-ui/core";

import Header from "./Header";
import { CheckoutProvider } from "../CheckoutContext";

const Layout: React.FC = ({ children }) => (
  <CheckoutProvider>
    <Header />
    <Flex maxWidth={theme.breakpoints["md"]} mx="auto" px={6}>
      {children}
    </Flex>
  </CheckoutProvider>
);

export default Layout;
