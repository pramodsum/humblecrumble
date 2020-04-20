/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Flex, Image, IconButton, Box, Button, theme } from "@chakra-ui/core";
import { AiOutlineShoppingCart, AiOutlineInstagram } from "react-icons/ai";
import { withRouter } from "next/router";
import { WithRouterProps } from "next/dist/client/with-router";

const iconCss = css`
  margin: auto;
  height: 1.5rem;
  width: 1.5rem;
`;

const Header: React.FC<WithRouterProps> = ({ router }) => {
  return (
    <Flex
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
          icon={() => <AiOutlineShoppingCart css={iconCss} />}
        />
      </Box>
    </Flex>
  );
};

export default withRouter(Header);
