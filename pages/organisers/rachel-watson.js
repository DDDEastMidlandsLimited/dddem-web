import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import theme from '../../theme/theme';
import Head from 'next/head';
import Image from 'next/image';
import BackToAboutButton from '../../components/information/BackToAboutButton';
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
        banner="/static/banners/rach_banner.jpg"
      />
      <section>
        <h1 tabIndex="0">Co-Organiser and Chief of Communications</h1>
      </section>
      <section>
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/rachel.png"
            alt="Picture of Rachel Watson"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
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
          Rachel joined for the 2021 event. She is an excellent and
          ethical recruiter as a day job. If you have any need for a
          new role, reach out to her and she'll do her best to help
          connect you to great local companies.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Rachel's Responsibilities</h2>
        <p tabIndex="0">
          Coordinating all the DDD East Midlands correspondence with
          sponsors and partners, making sure the experience is as
          seamless as possibles. Also helping on the run up to the
          event to ensure everyone involved has what they need and are
          prepared to contribute to make it a great event.
        </p>
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
            display: block;
          }

          .speakerpic-container {
            margin-top: 8%;
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
