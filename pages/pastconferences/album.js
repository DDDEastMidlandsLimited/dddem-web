import React from 'react';
import Layout from '../../components/Layout';
import theme from '../../theme/theme';
import Header from '../../components/Header';
import Head from 'next/head';

export default function Album() {
  return (
    <Layout>
      <Head>
        <title>Photographs from DDD East Midlands 2019</title>
      </Head>
      <Header
        title={'DDD East Midlands'}
        banner="/static/banners/album.jpg"
      />

      <section>
        <p>
          Please do not use the images for any marketing or comercial
          purposes.
        </p>
        <p>
          <i>
            Photographs by{' '}
            <a
              href="https://www.abigneonglitter.co.uk/"
              target="_blank"
              rel="noreferrer"
            >
              Andrew Acford.
            </a>
          </i>
        </p>
      </section>

      <section>
        <a
          data-flickr-embed="true"
          href="https://www.flickr.com/photos/185539743@N05/albums/72157711821241733"
          title="2019 DDD East Midlands"
        >
          <img
            src="https://live.staticflickr.com/65535/49079767092_4c9b88e7af_z.jpg"
            width="640"
            height="480"
            alt="2019 DDD East Midlands"
          />
        </a>
        <script
          async
          src="//embedr.flickr.com/assets/client-code.js"
          charset="utf-8"
        ></script>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
            text-align: center;
          }
          h2 {
            text-align: center;
          }
          h3 {
            text-align: center;
          }
        `}
      </style>
    </Layout>
  );
}
