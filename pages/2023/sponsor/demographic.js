import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import Head from 'next/head';

export default function Sponsor() {
  return (
    <Layout>
      <Head>
        <title>Why would my company sponsor</title>
      </Head>
      <Header
        title={'Sponsor'}
        banner="/static/banners/sponsor.jpg"
      />

      <section className="content-section" id="why-sponsor">
        <h1 tabIndex="0">
          Why would my company sponsor? What’s in it for us?
        </h1>

        <a name="sponsor" />
        <p tabIndex="0">
          There are many reasons to sponsor DDD East Midlands - Maybe
          your company is well-established in the East Midlands and
          you want to have a presence at the regions' only local tech
          conference? Or maybe your tech teams are doing great things
          & you want to shout about it? Maybe you're just starting up
          & you want to get some exposure to some of the best techies
          in the area? Whatever YOUR reason, previous sponsors have
          sighted their main reasons for sponsoring as:
        </p>
      </section>

      <section className="content-section" id="indicating-interest">
        <a name="sponsor" />
        <h2 tabIndex="0">Free training</h2>
        <p tabIndex="0">
          All of the sponsorship tiers include guaranteed tickets to
          the event. The employees you send will be able to enjoy the
          conference, learn from the talks and gain as much as an
          attendee, saving some serious money out of your training
          budgets & coming back with some new ideas to try!
        </p>
      </section>
    </Layout>
  );
}
