import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';

export default function Album() {
  return (
    <Layout>
      <Head>
        <title>
          Photographs from Previous DDD East Midlands events
        </title>
      </Head>
      <Header
        title={'Past Event Photos'}
        banner="/static/banners/album.jpg"
      />

      <section className="content-section">
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

      <section className="content-section">
        <h1 tabIndex="0">2021</h1>
        <iframe
          src="https://albumizr.com/a/I3q0"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          width="80%"
          height="500"
          title="2021 Album"
        ></iframe>
      </section>

      <section className="content-section">
        <h1 tabIndex="0">2019</h1>
        <iframe
          src="https://albumizr.com/a/K2Ti"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
          width="80%"
          height="500"
          title="2019 Album"
        ></iframe>
      </section>
    </Layout>
  );
}
