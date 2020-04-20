/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import {
  Box,
  Text,
  Link,
  Flex,
  IconButton,
  Heading,
  SimpleGrid,
} from "@chakra-ui/core";
import {
  AiOutlineCopyright,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import styled from "@emotion/styled";

import theme from "../utils/theme";

const iconCss = css`
  height: 2rem;
  width: 2rem;

  &:hover {
    fill: ${theme.colors.hotPink};
  }
`;

const InlineCopyrightIcon = styled(AiOutlineCopyright)`
  display: inline;
  margin: 0 ${theme.space[1]};
`;

const Footer: React.FC = () => (
  <Box mt={12} background={theme.colors.lemon[50]} width="100%" py={4}>
    <Box maxWidth={theme.breakpoints["md"]} mx="auto" px={6}>
      <Flex flexDirection={["column-reverse", "row"]}>
        <Box width="100%" maxWidth={["100%", "33%"]} mr={6}>
          <Flex my={4}>
            <IconButton
              variant="unstyled"
              aria-label="instagram"
              icon={() => <AiOutlineInstagram css={iconCss} />}
            />
            <IconButton
              variant="unstyled"
              aria-label="email"
              icon={() => <AiOutlineMail css={iconCss} />}
            />
          </Flex>
          {/* <Text mt={3}>
            Copyright
            <InlineCopyrightIcon />
            Humble Crumble SF, {new Date().getFullYear()}
          </Text> */}
        </Box>
        <Box>
          <Box my={3}>
            <Text my={3}>
              Orders available for pickup only in San Francisco, CA
            </Text>
            <Heading as="h5" size="sm" textTransform="lowercase">
              Hours:
            </Heading>
            <Flex textTransform="lowercase">
              <Text mr={2}>Mon - Fri: </Text>
              <Text>10AM - 8PM</Text>
            </Flex>
            <Flex textTransform="lowercase">
              <Text mr={2}>Sat - Sun: </Text>
              <Text>12PM - 6PM</Text>
            </Flex>
          </Box>
          <Text>
            For custom orders, please contact{" "}
            <Link href="https://www.instagram.com/humblecrumblesf/">
              @humblecrumblesf
            </Link>{" "}
            on instagram or email{" "}
            <Link href="mailto: sumu@cookinginpjs.com">
              hello@humblecrumblesf.com
            </Link>
          </Text>
        </Box>
      </Flex>
    </Box>
  </Box>
);

export default Footer;
