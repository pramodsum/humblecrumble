import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Layout from "../components/Layout";

export interface ITheme {
  niceBlack: string;
}

export interface IThemeWrapper {
  theme: ITheme;
}

export const theme: ITheme = {
  niceBlack: "#001F3F",
};

const GlobalStyle = createGlobalStyle<IThemeWrapper>`
  body {
    margin: 0 auto;
  }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>Humble Crumble</title>
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
