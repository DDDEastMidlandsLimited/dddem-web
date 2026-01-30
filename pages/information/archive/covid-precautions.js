import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
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

      <CovidPrecautions />
    </Layout>
  );
}
