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

export default function MoretonBrockley() {
  return (
    <Layout>
      <Head>
        <title>Moreton Brockley</title>
      </Head>
      <Header
        title={'Moreton Brockley'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <h1 tabIndex="0">Directior/ Co-Founder / Co-Organiser</h1>
      </section>
      <section>
        <img
          src="/static/organisers/mort.jpg"
          alt="Picture of Moreton Brockley"
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
        <h2 tabIndex="0">About Moreton</h2>
        <p tabIndex="0">
          A Principle Developer, Moreton is the sensible head of the
          co-founders. He is the number whizz and the fashion guru.
          Seriously, check out his Ninja Turtle Doc Martens. You may
          (not) recognise Moreton from his performance at 2018&apos;s
          Hack24 as Mr Blobby.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Moreton's Responsibilities</h2>
        <li tabIndex="0">Accountancy</li>
        <li tabIndex="0">Budgeting</li>
        <li tabIndex="0">Scheduling</li>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Moreton Brockley: Twitter"
            href="https://twitter.com/allmobro"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Moreton Brockley: LinkedIn"
            href="https://www.linkedin.com/in/moreton-brockley-06253538/"
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
