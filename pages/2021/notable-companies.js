import React from 'react';
import Layout from '../../components/Layout';
import theme from '../../theme/theme';
import Header from '../../components/Header';
import Head from 'next/head';
import NotableCompanies from '../../components/companies/NotableCompanies';
import PartnerSponsorLogos from '../../components/companies/PartnerSponsorLogos';

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
        <div className="sponsors">
          <NotableCompanies />
        </div>
      </section>

      <section>
        <div className="partners">
          <PartnerSponsorLogos />
        </div>
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

          .sponsors {
            margin: auto;
            width: 80%;
          }

          .partners {
            margin: auto;
            width: 75%;
          }
        `}
      </style>
    </Layout>
  );
}
