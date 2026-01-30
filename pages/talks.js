import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Head from 'next/head';
import TalksComponent from '../components/talks/TalksComponent';

export default function Talks() {
  return (
    <Layout>
      <Head>
        <title>Talks</title>
      </Head>
      <Header title={'Talks'} banner="/static/banners/talks.jpg" />

      <section className="content-section">
        <h2 className="highlight">
          We advise using this page on desktop for a good experience.
        </h2>
        <h3>Filtering</h3>
        <ul>
          <li>
            To filter talks down select a <strong>level</strong>,{' '}
            <strong>length</strong> or <strong>topic</strong>.
          </li>
          <li>
            Tags are <strong>inclusive</strong>. If a talk contained
            all the tags selected, it was displayed. If it did
            not contain one or more of the tags selected, it was not
            displayed.
          </li>
        </ul>
        <h3>Voting</h3>
        <ul>
          <li>
            If you attended you were emailed a link to your
            Eventbrite registered email. This link led to a google
            form with all the titles that had been submitted.
          </li>
          <li>
            You could vote for up to 10 talks you wanted to see.
          </li>
          <li>
            We advised reading the descriptions of talks, taking note
            of the titles you wanted to see, then using Control+F or
            Command+F searching for those titles on the google
            form.{' '}
          </li>
        </ul>
        <br />
        <hr />
      </section>

      <section className="content-section">
        <TalksComponent />
      </section>
    </Layout>
  );
}
