import React from "react";
import { Flex } from "@chakra-ui/core";

import Header from "./Header";
import { CheckoutProvider } from "../CheckoutContext";
import Footer from "./Footer";
import theme from "../utils/theme";

const Layout: React.FC = ({ children }) => (
  <CheckoutProvider>
    <Flex width="100%" flexDirection="column" minHeight="100vh">
      <Header />
      <Flex
        width="100%"
        maxWidth={theme.breakpoints["lg"]}
        mx="auto"
        px={6}
        flex={1}
      >
        {children}
      </Flex>
      <Footer />
    </Flex>
  </CheckoutProvider>
);

export default Layout;
