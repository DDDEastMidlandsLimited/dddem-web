import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import CrewBackButton from '../../../components/information/CrewBackButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function RachelWatson() {
  return (
    <Layout>
      <Head>
        <title>Rachel Watson</title>
      </Head>
      <Header
        title={'Rachel Watson'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <h1 tabIndex="0">Co-Organiser and Chief of Communications</h1>
      </section>
      <section>
        <img
          src="/static/organisers/rachel.jpg"
          alt="Picture of Rachel Watson"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> She/Her
          </ul>
        </div>
        <br />
      </section>
      <section>
        <h2 tabIndex="0">About Rachel</h2>
        <p tabIndex="0">
          The newest member of the team, Rachel will be helping with
          all the DDD East Midlands correspondence, making sure the
          experience is as seamless as possible for sponsors and
          partners. She works for Distinct Recruitment and you can
          find her at a lot of the local meetups.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Rachel's Responsibilities</h2>
        <li tabIndex="0">Sponsor Agreements and Management</li>
        <li tabIndex="0">Scheduling</li>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            href="mailto:rachel@dddeastmidlands.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Watson: Email"
          >
            Email
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://twitter.com/missracheybaby"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Watson: Twitter"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://www.linkedin.com/in/rachelwatsondistinct/"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Watson: LinkedIn"
          >
            LinkedIn
          </a>
        </li>
      </section>
      <section>
        <CrewBackButton />
      </section>

      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          section {
            max-width: ${theme.sizes.maxContentWidth};
            padding: ${theme.sizes.contentPadding};
            margin: auto;
          }

          .row:after {
            content: '';
            display: table;
            clear: both;
          }

          .speakerpic {
            margin-bottom: 5%;
            width: 250px;
            border-radius: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto;
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
          ul {
            display: flex;
            margin: 0;
            padding: 5px;
            flex-flow: row;
            flex-wrap: nowrap;
            justify-content: center;
          }
          li {
            margin: 0;
            padding: 10px;
            list-style: inside;
            list-style-type: disc;
            text-align: left;
            flex-basis: 0;
            flex-grow: 1;
          }

          .contactButton {
            align: ${theme.palette.quaternary};
            font-weight: bold;
            font-size: ${theme.font.sizes.mobile.subtitle1};
            flex-grow: 1;
            border-radius: 12px;
            padding: 10px 10px 10px 10px;
            color: ${theme.palette.primary};
            border: 2px solid ${theme.palette.primary};
            background-color: ${theme.palette.light};
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
              0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .contactButton a {
            text-decoration: none;
          }

          .contactButton:hover {
            background-color: ${theme.palette.primary};
          }

          .contactButton a:hover {
            color: ${theme.palette.light};
          }

          @media only screen and (max-width: 1081px) {
            section {
              padding: 3% 12%;
            }
          }
        `}
      </style>
    </Layout>
  );
}
