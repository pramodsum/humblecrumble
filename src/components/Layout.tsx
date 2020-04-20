import React from "react";
import { Flex } from "@chakra-ui/core";

import Header from "./Header";
import { CheckoutProvider } from "../CheckoutContext";
import Footer from "./Footer";
import theme from "../utils/theme";

const Layout: React.FC = ({ children }) => (
  <CheckoutProvider>
    <Header />
    <Flex maxWidth={theme.breakpoints["md"]} mx="auto" px={6}>
      {children}
    </Flex>
    <Footer />
  </CheckoutProvider>
);

export default Layout;
