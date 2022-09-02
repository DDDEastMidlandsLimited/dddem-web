import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import Image from 'next/image';

export default function Demographics() {
  return (
    <Layout>
      <Head>
        <title>Demographics</title>
      </Head>
      <Header
        title={'Demographics'}
        banner="/static/banners/sponsor.jpg"
      />

<section name="Contents">
        <h1 tabIndex="0">Contents</h1>

        <p tabIndex="0">
          <strong>
            <a href="#attendee-statistics">Attendee Statistics</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#job-titles">Job Titles</a>
          </li>
          <li>
            <a href="#attendee-pronouns">Attendee Pronouns</a>
          </li>
        </ul>
        <p tabIndex="0">
          <strong>
            <a href="#speaker-statistics">Speaker Statistics</a>
          </strong>
        </p>
        <ul>
          <li>
            <a href="#speaker-pronouns">Speaker Pronouns</a>
          </li>
        </ul>
        <p tabIndex="0">
        <strong>
        <a href="#talk-topics">Talk Topics</a>
        </strong>
        </p>
      </section>

      <section id="attendee-statistics">
        <h1 tabIndex="0">Attendee Statistics</h1>

        <a name="attendee-statistics" />

        <p tabIndex="0"></p>
      </section>

      <section id="jobs">
        <h2 tabIndex="0">Job Titles</h2>

        <a name="jobs" />
        <p tabIndex="0"></p>
        <div className="center-pic">
          <Image
            src="/static/demographics/2021-jobs.png"
            alt="2021 Job Titles as a doughnut chart"
            className="picture"
            height="250"
            width="500"
            layout="responsive"
          />
        </div>
        <div className="center-pic">
          <Image
            src="/static/demographics/2019-jobs.png"
            alt="2019 Job Titles as a doughnut chart"
            className="picture"
            height="250"
            width="500"
            layout="responsive"
          />
        </div>
      </section>

      <section id="attendee-pronouns">
        <h2 tabIndex="0">Attendee Pronouns</h2>

        <a name="attendee-pronouns" />
        <p tabIndex="0"></p>
        <div className="center-pic">
          <Image
            src="/static/demographics/2021-pronoun.png"
            alt="2021 Pronounss as a doughnut chart"
            className="picture"
            height="250"
            width="500"
            layout="responsive"
          />
        </div>
        <div className="center-pic">
          <Image
            src="/static/demographics/2019-pronoun.png"
            alt="2019 Pronouns as a doughnut chart"
            className="picture"
            height="250"
            width="500"
            layout="responsive"
          />
        </div>
      </section>

      <section id="speaker-statistics">
        <h1 tabIndex="0">Speaker Statistics</h1>

        <a name="speaker-statistics" />

        <p tabIndex="0"></p>
      </section>

      <section id="talk-topics">
        <h1 tabIndex="0">Talk Topics</h1>

        <a name="talk-topics" />

        <p tabIndex="0"></p>
      </section>

      <style jsx>
        {`
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }
          section div {
            padding-bottom: 10px;
          }

          .center-pic {
            text-align: center;
            padding: 5px;
            width: 75%;
          }

          .picture-container {
            margin: 10px;
          }

          @media only screen and (max-width: 810px) {
            .picture {
              display: none;
            }
          }
        `}
      </style>
    </Layout>
  );
}
