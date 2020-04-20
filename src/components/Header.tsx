/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "react";
import { Flex, Image, IconButton, Box, Button, Badge } from "@chakra-ui/core";
import { AiOutlineShoppingCart, AiOutlineInstagram } from "react-icons/ai";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

import theme from "../utils/theme";
import { CheckoutContext } from "../CheckoutContext";

const iconCss = css`
  margin: auto;
  height: 1.5rem;
  width: 1.5rem;

  &:hover {
    fill: ${theme.colors.hotPink};
  }
`;

const CheckoutIcon: React.FC<{ quantity?: number }> = ({ quantity }) => (
  <>
    <AiOutlineShoppingCart css={iconCss} />
    <Badge
      backgroundColor={theme.colors.hotPink}
      color={theme.colors.white}
      borderRadius={theme.radii.full}
      position="absolute"
      top={0}
      right={0}
      display={quantity ? "block" : "none"}
    >
      {quantity}
    </Badge>
  </>
);

const Header: React.FC<WithRouterProps> = ({ router }) => {
  const { checkout } = useContext(CheckoutContext);
  return (
    <Flex
      width="100%"
      px={4}
      mx="auto"
      position="static"
      maxWidth={theme.breakpoints["md"]}
      justifyContent="space-between"
      alignItems="center"
      height="90px"
    >
      <Button
        aria-label="logo"
        onClick={() => router.push("/")}
        variant="unstyled"
        height="auto"
      >
        <Image width="150px" height="auto" src="/title.png" />
      </Button>
      <Box>
        <IconButton
          variant="unstyled"
          aria-label="instagram"
          icon={() => <AiOutlineInstagram css={iconCss} />}
          onClick={() =>
            window.location.assign("https://instagram.com/humblecrumblesf")
          }
        />
        <IconButton
          variant="unstyled"
          aria-label="cart"
          onClick={() => router.push("/cart")}
          icon={() => (
            <CheckoutIcon quantity={checkout?.lineItems.edges.length || 0} />
          )}
        ></IconButton>
      </Box>
    </Flex>
  );
};

export default withRouter(Header);
