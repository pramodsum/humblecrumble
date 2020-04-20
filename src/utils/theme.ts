import {
  theme as chakraTheme,
  ITheme as ChakraTheme,
  ColorHues,
} from "@chakra-ui/core";

interface Colors {
  transparent: string;
  current: string;
  black: string;
  white: string;
  hotPink: string;
  lemon: ColorHues;
  whiteAlpha: ColorHues;
  blackAlpha: ColorHues;
  gray: ColorHues;
  red: ColorHues;
  orange: ColorHues;
  yellow: ColorHues;
  green: ColorHues;
  teal: ColorHues;
  blue: ColorHues;
  cyan: ColorHues;
  purple: ColorHues;
  pink: ColorHues;
  linkedin: ColorHues;
  facebook: ColorHues;
  messenger: ColorHues;
  whatsapp: ColorHues;
  twitter: ColorHues;
  telegram: ColorHues;
}

interface Fonts {
  body: string;
  heading: string;
  title: string;
  mono: string;
}

interface ITheme extends ChakraTheme {
  colors: Colors;
  fonts: Fonts;
  breakpoints: string[];
}

const theme: ITheme = {
  ...chakraTheme,
  breakpoints: ["375px", "767px", "1023px"],
  colors: {
    ...chakraTheme.colors,
    hotPink: "#fb175f",
    lemon: {
      50: "#fffeeb",
      100: "#fffcc2",
      200: "#fff883",
      300: "#fff883",
      400: "#fff883",
      500: "#fff883",
      600: "#fff883",
      700: "#fff883",
      800: "#fff883",
      900: "#fff883",
    },
  },
  fonts: {
    body: "'Quicksand', sans-serif",
    heading: "'Quicksand', sans-serif",
    title: "'Nanum Pen Script', cursive",
    mono: "'Cutive Mono', monospace",
  },
};

export default theme;
