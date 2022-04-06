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
        <h1 tabIndex="0">The Organisation Committee</h1>
        <p tabIndex="0">
          The very first DDD East Midlands was organised by Moreton
          and Jessica. Since then we have grown to have an
          organisation committee. Rachel joined us to help organise
          the 2021 event, and now we have a full roster of organisers
          for 2023 including Steven, James and Mia.
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
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../mia-gordon"
            title="Link to Information About Mia"
          >
            <img
              src="/static/organisers/mia.jpg"
              alt="Picture of Mia"
              className="picture"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <a
            tabIndex="0"
            href="../steven-pears"
            title="Link to Information About Steve"
          >
            <img
              src="/static/organisers/steven.jpg"
              alt="Picture of Steven"
              className="picture"
            />
          </a>
        </article>
        <article className="volunteer-grid-item">
          <img
            src="/static/organisers/james.jpg"
            alt="Picture of James"
            className="picture"
          />
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

      <section id="event-crew">
        <a name="event-crew" />
        <h1 tabIndex="0">The Event Crew</h1>
        <p tabIndex="0">
          We could not run the event without the support our fantastic
          event crew. They help with set-up, with looking after
          attendees and speakers during the day and cleaning up after
          the event.
        </p>
        <div className="center-image">
          <img
            className="crew-image"
            src="/static/info/crew.jpg"
            alt="To be confirmed placeholder"
          />
        </div>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
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

          .center-image {
            text-align: center;
          }

          .crew-image {
            width: 80%;
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
