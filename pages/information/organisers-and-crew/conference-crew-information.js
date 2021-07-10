import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';

export default function ConferenceInformation() {
  return (
    <Layout>
      <Head>
        <title>About The Conference Crew</title>
      </Head>
      <Header
        title={'About The Conference Crew'}
        banner="/static/banners/home.jpg"
      />
      <section name="Contents">
        <h1 tabIndex="0">Contents</h1>

        <p>
          <strong>
            <a href="#organisers">The Organisers</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#year-long-crew">Year Long Crew</a>
          </strong>
        </p>
        <p>
          <strong>
            <a href="#event-crew">The Event Crew</a>
          </strong>
        </p>
      </section>

      <section id="organisers">
        <a name="organisers" />
        <h1 tabIndex="0">The Organisers</h1>
        <p tabIndex="0">
          The very first DDD East Midlands is being organised by
          Moreton Brockley and Jessica White. Both have been active
          members of the East Midlands tech scene for a number of
          years and have benefited through making lifelong friends,
          experiencing awesome events and learning. They are eager to
          celebrate the East Midlands tech community, give back where
          they can and encourage more people from other places to come
          and join them here.
        </p>
        <p>
          Rachel did a fantastic job helping us host the Speakers
          Workshop and will be helping with correspondence in 2020,
          and has been a key part of the team this last year.
        </p>
      </section>
      <section className="volunteer-grid">
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../jessica-white"
            title="Link to Information About Jessica"
          >
            <img
              src="/static/organisers/jess.jpg"
              alt="Picture of Jessica White"
              className="picture"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../moreton-brockley"
            title="Link to Information About Moreton"
          >
            <img
              src="/static/organisers/mort.jpg"
              alt="Picture of Moreton Brockley"
              className="picture"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../rachel-watson"
            title="Link to Information About Rachel"
          >
            <img
              src="/static/organisers/rachel.jpg"
              alt="Picture of Rachel Watson"
              className="picture"
            />
          </a>
        </article>
      </section>

      <section>
        <p tabIndex="0">
          Give them a follow on Twitter, say hi at the local events,
          offer them a coffee or some chocolate if they look in need.
          They will both be running around on the day of the event
          making sure your experience of it is the best they can
          possibly make it.
        </p>
      </section>

      <section id="year-long-crew">
        <a name="year-long-crew" />
        <h1 tabIndex="0">The Year Long Crew</h1>
        <p tabIndex="0">
          There are a few crew members that help us throughout the
          year by organising who is taking part in the crew and their
          Responsibilities, or by helping to maintain the website.
        </p>
      </section>
      <section className="volunteer-grid">
        <article className="volunteer-grid-item">
          <img
            className="volunteer-image"
            src="/static/speakers/TBC.png"
            alt="To be confirmed placeholder"
          />
        </article>
        <article className="volunteer-grid-item">
          <img
            className="volunteer-image"
            src="/static/speakers/TBC.png"
            alt="To be confirmed placeholder"
          />
        </article>
      </section>

      <section id="event-crew">
        <a name="event-crew" />
        <h1 tabIndex="0">The Event Crew</h1>
        <p tabIndex="0">
          We could not run the event without the support our fantastic
          event crew. They help with set-up, with looking after
          attendees and speakers during the day and cleaning up after
          the event.
        </p>
      </section>
      <section className="volunteer-grid">
        <article className="volunteer-grid-item">
          <img
            className="volunteer-image"
            src="/static/speakers/TBC.png"
            alt="To be confirmed placeholder"
          />
        </article>
        <article className="volunteer-grid-item">
          <img
            className="volunteer-image"
            src="/static/speakers/TBC.png"
            alt="To be confirmed placeholder"
          />
        </article>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section center-video {
            text-align: center;
          }
          .iframe-container {
            position: relative;
            overflow: hidden;
            padding-top: 56.25%;
            margin: 10px 10px;
          }
          .iframe-container iframe {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border: 0;
          }

          .volunteer-image {
            width: 150px;
            height: 150px;
          }

          .volunteer-grid {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
          }
          .volunteer-grid-item {
            min-width: 180px;
          }

          .picture {
            width: 200px;
            border-radius: 50%;
            margin: 5px;
          }
          a .picture:hover {
            filter: drop-shadow(5px 5px 5px rgb(26 125 135 / 0.75));
          }
        `}
      </style>
    </Layout>
  );
}
