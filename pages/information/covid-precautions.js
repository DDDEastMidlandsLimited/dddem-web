import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import CovidPrecautions from '../../components/content/CovidPrecautions';

export default function CovidPrecautionsPage() {
  return (
    <Layout>
      <Head>
        <title>Covid Precautions</title>
      </Head>
      <Header
        title={'Covid Precautions'}
        banner="/static/banners/covid.jpg"
      />

      <section>
        <CovidPrecautions />
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

          .imagecenter {
            text-align: center;
          }
        `}
      </style>
    </Layout>
  );
}
