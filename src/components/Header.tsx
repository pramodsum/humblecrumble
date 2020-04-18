/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Flex, Image, IconButton, Box } from "@chakra-ui/core";
import { AiOutlineShoppingCart, AiOutlineInstagram } from "react-icons/ai";

const iconCss = css`
  margin: auto;
  height: 1.5rem;
  width: 1.5rem;
`;

const Header: React.FC = () => {
  return (
    <Flex
      px={4}
      position="static"
      justifyContent="space-between"
      alignItems="center"
    >
      <Image height="90px" width="auto" src="/title.png" />
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
          icon={() => <AiOutlineShoppingCart css={iconCss} />}
        />
      </Box>
    </Flex>
  );
};

export default Header;
