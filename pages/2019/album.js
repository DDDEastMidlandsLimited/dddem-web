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
          data-context="true"
          href="https://www.flickr.com/photos/185539743@N05/49079034673/in/album-72157711821241733/"
          title="DDD2019_Websize(63of351)"
        >
          <img
            src="https://live.staticflickr.com/65535/49079034673_f15192235f_c.jpg"
            width="100%"
            alt="DDD2019_Websize(63of351)"
          />
        </a>
        <script
          async
          src="//embedr.flickr.com/assets/client-code.js"
          charSet="utf-8"
        ></script>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
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
