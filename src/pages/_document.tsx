import React from "react";
import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document<any> {
  render() {
    return (
      <html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
