import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>DDD East Midlands</title>
      </Head>
      <Header banner="/static/banners/homepage.jpg" />

      <section className="content-section">
        <h3 className="highlight">
          Developer! Developer! Developer! East Midlands
        </h3>
      </section>

      <section className="content-section">
        <p tabIndex="0">
          DDD East Midlands was an inclusive, not-for-profit
          technology conference that celebrated the unique tech,
          talent and companies that the East Midlands has to offer.
          This event is run by community members to promote
          collaboration and the amazing tech community that has
          already grown in the East Midlands.
        </p>
      </section>

      <section className="content-section">
        <h2 className="center" tabIndex="0">
          Event on hold indefinitely.
        </h2>
        <p tabIndex="0">
          Sadly, new ownership could not be found for the event.
        </p>
        <p tabIndex="0">
          We are incredibly proud of the events we ran, the speakers
          who presented, the fantastic crew and the community. If we
          could have found new owners or more help, we would have
          continued, but it wasn't meant to be.
        </p>
        <p tabIndex="0">
          This website will stay hosted as a memorial to the
          conference. Who knows, maybe some day someone will pick up
          where we left off. We would be in full support of that, and
          would help where possible.
        </p>
      </section>

      <section className="content-section">
        <br />
        <h2 className="center" tabIndex="0">
          Principles
        </h2>
        <p tabIndex="0">
          This conference followed these DDD principles:
        </p>
        <ul>
          <li tabIndex="0">The event was hosted on a Saturday.</li>
          <li tabIndex="0">Tickets to attend the event were free.</li>
        </ul>
        <p tabIndex="0">As well as these following principles:</p>
        <ul>
          <li tabIndex="0">All talk submissions were anonymous.</li>
          <li tabIndex="0">
            There was an anonymised, democratic selection process for
            talks which involved attendees voting for what they wanted
            to see.
          </li>
          <li tabIndex="0">
            The event was arranged with the community in mind.
          </li>
        </ul>
        <br />
      </section>
    </Layout>
  );
}
