import Document, { Head, Html, Main, NextScript } from "next/document";

class myDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/icon.svg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default myDocument;
