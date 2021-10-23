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
        title={'Past Event Photos'}
        banner="/static/banners/album.jpg"
      />

      <section>
        <p tabIndex="0">
          Please do not use the images for any marketing or commercial
          purposes.
        </p>
        <p tabIndex="0">
          <i>
            Photographs by{' '}
            <a
              href="https://www.abigneonglitter.co.uk/"
              target="_blank"
              rel="noreferrer"
              tabIndex="0"
            >
              Andrew Acford.
            </a>
          </i>
        </p>
      </section>

      <section>
        <h1 tabIndex="0">2019</h1>
        <iframe
          src="https://albumizr.com/a/K2Ti"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          width="80%"
          height="500"
        ></iframe>
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
