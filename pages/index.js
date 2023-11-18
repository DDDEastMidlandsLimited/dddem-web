import React from 'react';
import Header from '../components/Header';
import Head from 'next/head';
import Layout from '../components/Layout';
import GoldSponsorLogos from '../components/companies/GoldSponsorLogos';
import ImportantDatesList from '../components/home/ImportantDatesList';
import dates from '../data/dates';

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
          DDD East Midlands is an inclusive, not-for-profit technology
          conference that celebrates the unique tech, talent and
          companies that the East Midlands has to offer. This event is
          run by community members to promote collaboration and the
          amazing tech community that has already grown in the East
          Midlands.
        </p>
      </section>

      <section className="content-section center">
        <h2 className="center" tabIndex="0">
          Photos from 2023
        </h2>
        <iframe
          src="https://albumizr.com/a/J-0W"
          scrolling="no"
          frameborder="0"
          allowFullScreen
          width="80%"
          height="500"
          title="2021 Album"
        ></iframe>
        <p tabIndex="0">
          <i>
            Photographs by{' '}
            <a
              href="https://kirstyrockett.com/"
              target="_blank"
              rel="noreferrer"
              tabIndex="0"
            >
              Kirsty Rocket.
            </a>
          </i>
        </p>
      </section>

      {/* Gold Sponsors */}
      <section className="content-section">
        <h2 className="center">2023 Sponsors</h2>
        <GoldSponsorLogos />
      </section>

      {/* Important Dates */}
      <section className="content-section">
        <br />
        <br />
        <h2 className="center" tabIndex="0">
          Important Dates
        </h2>
        <ImportantDatesList dates={dates} />
      </section>

      {/* Principles */}
      <section className="content-section">
        <br />
        <h2 className="center" tabIndex="0">
          Principles
        </h2>
        <p tabIndex="0">
          This conference follows these DDD principles:
        </p>
        <ul>
          <li tabIndex="0">The event is hosted on a Saturdayk.</li>
          <li tabIndex="0">Tickets to attend the event are free.</li>
        </ul>
        <p tabIndex="0">As well as these following principles:</p>
        <ul>
          <li tabIndex="0">All talk submissions are anonymous.</li>
          <li tabIndex="0">
            There is a anonymised democratic selection process for
            talks which involves attendees voting for what they want
            to see.
          </li>
          <li tabIndex="0">
            The event is arranged with the community in mind.
          </li>
        </ul>
        <br />
      </section>
    </Layout>
  );
}
