import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import BackToAboutButton from '../../components/information/BackToAboutButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function JamesHayward() {
  return (
    <Layout>
      <Head>
        <title>James Hayward</title>
      </Head>
      <Header
        title={'James Hayward'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <h1 tabIndex="0">Contracts and Finances Manager</h1>
      </section>
      <section>
        <img
          src="/static/organisers/james.jpg"
          alt="Picture of James Hayward"
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
        <h2 tabIndex="0">About James</h2>
        <p tabIndex="0">
          James is a Learning Technology and Delivery Manager. He's an
          active member of the local community and arranges other
          events outside of this one. James has also volunteered at
          both the 2019 and 2021 event.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">James' Responsibilities</h2>
        <p tabIndex="0">
          Will be working closely with Jessica, ensuring everything
          happens on schedule and everyone knows what they need to do
          and when. Timelines, coordination with the venue, keeping in
          mind things like accessibility needs. Coordinating
          everything that makes the event a success.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Hayward: Twitter"
            href="https://twitter.com/geeksareforlife"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Hayward: LinkedIn"
            href="https://www.linkedin.com/in/jhayward/"
          >
            LinkedIn
          </a>
        </li>
      </section>
      <section>
        <BackToAboutButton />
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
