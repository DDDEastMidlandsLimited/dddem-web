import React from 'react';
import Script from 'next/script';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=optional"
            rel="stylesheet"
          />
          <Script src="../public/static/client/object-assign-auto.min.js"></Script>
          <Script src="../public/static/client/sessionize.js"></Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
