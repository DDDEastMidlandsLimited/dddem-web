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

export default function StevenPears() {
  return (
    <Layout>
      <Head>
        <title>Steven Pears</title>
      </Head>
      <Header
        title={'Steven Pears'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <h1 tabIndex="0">Contracts and Finances Manager</h1>
      </section>
      <section>
        <img
          src="/static/organisers/steven.jpg"
          alt="Picture of Steven Pears"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
        </div>
        <br />
      </section>

      <section>
        <h2 tabIndex="0">About Steve</h2>
        <p tabIndex="0">
          Steve (or StoiveyP) is a Technical Architect and active
          member of the local community. He has volunteered at the
          2019 and 2021 DDD East Midlands Conferences and provided a
          lot of coffee to Jessica during the events. Steve is also a
          Microsoft MVP and experienced public speaker.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Steven's Responsibilities</h2>
        <p tabIndex="0">
          Will be working closely with Moreton to manage the events
          contracts, budgets, payments and anything else financial.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steven Pears: Twitter"
            href="https://twitter.com/StevenPears"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steven Pears: LinkedIn"
            href="https://www.linkedin.com/in/stevenpears/"
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
