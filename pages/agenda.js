import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import theme from '../theme/theme';
import Head from 'next/head';

export default function Agenda() {
  return (
    <Layout>
      <Head>
        <title>Agenda</title>
      </Head>
      <Header title={'Agenda'} />

      <section tabIndex="0" name="Agenda">
        <div
          className="sessionize-loader"
          data-sessionize-load-url="https://sessionize.com/api/v2/dwsqznmo/view/GridSmart?under=True"
        >
          <div className="sz-spinner"></div>
        </div>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section div {
            padding-bottom: 10px;
          }
        `}
      </style>
    </Layout>
  );
}
