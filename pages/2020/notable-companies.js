import React from 'react';
import Layout from '../../components/Layout';
import theme from '../../theme/theme';
import Header from '../../components/Header';
import Head from 'next/head';
import NotableCompanies from '../../components/companies/NotableCompanies';

export default function NotableCompaniesComponent() {
  return (
    <Layout>
      <Head>
        <title>Notable Companies</title>
      </Head>
      <Header
        title={'Notable Companies'}
        banner="/static/banners/notable.jpg"
      />

      <section>
        <NotableCompanies />
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
        `}
      </style>
    </Layout>
  );
}
