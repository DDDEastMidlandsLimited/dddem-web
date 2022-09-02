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

      <section id="who-attends">
        <h1 tabIndex="0">Who Attends?</h1>

        <a name="who-attends" />

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

      <section id="pronouns">
        <h2 tabIndex="0">Pronouns</h2>

        <a name="pronouns" />
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
