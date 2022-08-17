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

export default function JessicaWhite() {
  return (
    <Layout>
      <Head>
        <title>Jessica White</title>
      </Head>
      <Header
        title={'Jessica White'}
        banner="/static/banners/album.jpg"
      />
      <section>
        <h1 tabIndex="0">Director/ Co-Founder / Co-Organiser</h1>
      </section>
      <section>
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/jess.png"
            alt="Picture of Jessica White"
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
        <h2 tabIndex="0">About Jessica</h2>
        <p tabIndex="0">
          Fully caffeinated, Jessica is more whirling dervish than
          person. Professionally, she is a Technical Architect.
          Outside of work she is a Microsoft MVP, Mentor, Organiser,
          Gamer and avid reader.
        </p>
        <p tabIndex="0">
          Jessica has a lot of event organisation experience. Having
          founded{' '}
          <a href="https://www.technottingham.com/wit-notts">
            Women In Tech Nottingham
          </a>
          back in 2015, and running it for nearly 2 years, she has
          previous experience with running an inclusive event. She
          also co-organises the .NET Notts meetup in Nottingham.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Jessica's Responsibilities</h2>
        <li tabIndex="0">Partner Agreements and outreach</li>
        <li tabIndex="0">Scheduling</li>
        <li tabIndex="0">Contracts</li>
        <li tabIndex="0">Social Media</li>
        <li tabIndex="0">Staffing</li>
        <li tabIndex="0">Managing the Open Source Repositories</li>
        <li tabIndex="0">Speaker Management</li>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            href="mailto:jessica@dddeastmidlands.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Jessica White: Email"
          >
            Email
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://twitter.com/JessPWhite"
            target="_blank"
            rel="noreferrer"
            aria-label="Jessica White: Twitter"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://www.linkedin.com/in/jessica-white-67917883/"
            target="_blank"
            rel="noreferrer"
            aria-label="Jessica White: LinkedIn"
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
