import React from 'react';
import Layout from '../../components/Layout';
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
        banner="/static/banners/album.jpg"
      />

      <section className="content-section">
        <div className="sponsors">
          <NotableCompanies />
        </div>
      </section>

      <section className="content-section">
        <div className="partners">
          <PartnerSponsorLogos />
        </div>
      </section>
    </Layout>
  );
}
