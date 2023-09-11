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
        <title>Sponsors and Partners</title>
      </Head>
      <Header
        title={'Sponsors and Partners'}
        banner="/static/banners/album.jpg"
      />

      <section className="content-section">
        <div className="sponsors">
          <h2 className="center">Sponsors</h2>
          <NotableCompanies />
        </div>
        <hr />
      </section>

      <section className="content-section">
        <div className="partners">
          <h2 className="center">Partners</h2>
          <PartnerSponsorLogos />
        </div>
      </section>
    </Layout>
  );
}
