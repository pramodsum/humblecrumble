import React from "react";
// import styled from "@emotion/styled";
import { Box } from "@chakra-ui/core";
import theme from "../utils/theme";

// const Sprinkle = styled(Box)`
//   position: relative;
//   border-radius: 100vh;
//   z-index: 100;
//   animation: bounce-in-sprinkles 0.5s forwards;
//   box-shadow: 1vh 1vh 0 rgba(0, 0, 0, 0.25);
//   background-color: #fb175f;
//   height: 3.66667vh;
//   width: 1vh;
// `;

const CakeImgBackground: React.FC = ({ children }) => (
  <Box
    minWidth="300px"
    minHeight="100px"
    width={["100%", "350px"]}
    mr={[0, 6]}
    mb={[6, 0]}
    display="flex"
    justifyContent="center"
    alignItems="center"
    borderRadius="5px"
    backgroundColor={theme.colors.lemon[50]}
  >
    {/* <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(-60deg)" top="70%" left="67%" />
    <Sprinkle transform="rotate(10deg)" top="20%" left="44%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" />
    <Sprinkle transform="rotate(60deg)" top="30%" left="90%" /> */}
    {children}
  </Box>
);

export default CakeImgBackground;
