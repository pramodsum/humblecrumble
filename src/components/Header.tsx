/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useContext } from "react";
import { Flex, IconButton, Box, Button, Badge, Heading } from "@chakra-ui/core";
import {
  AiOutlineShoppingCart,
  AiOutlineInstagram,
  AiOutlineHome,
  AiOutlineGift,
} from "react-icons/ai";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

import theme from "../utils/theme";
import { CheckoutContext } from "../CheckoutContext";

const iconCss = css`
  margin: 0;
  height: 1.75rem;
  width: 1.75rem;

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
      px={[4, null, 6]}
      mx="auto"
      position="static"
      maxWidth={theme.breakpoints["lg"]}
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
        <Heading
          as="h1"
          fontSize={theme.fontSizes["4xl"]}
          fontFamily="title"
          letterSpacing={-1}
        >
          humble crumble
        </Heading>
        {/* <Image width="150px" height="auto" src="/title.png" /> */}
      </Button>
      <Box>
        <IconButton
          size="sm"
          variant="unstyled"
          aria-label="home"
          icon={() => <AiOutlineHome css={iconCss} />}
          onClick={() => router.push("/")}
        />
        <IconButton
          size="sm"
          variant="unstyled"
          aria-label="blog"
          icon={() => <AiOutlineGift css={iconCss} />}
          onClick={() =>
            window.location.assign("https://cookinginpjs.com/tag/desserts")
          }
        />
        <IconButton
          size="sm"
          variant="unstyled"
          aria-label="instagram"
          icon={() => <AiOutlineInstagram css={iconCss} />}
          onClick={() =>
            window.location.assign("https://instagram.com/humblecrumblesf")
          }
        />
        <IconButton
          size="sm"
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
