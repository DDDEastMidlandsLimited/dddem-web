import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import theme from '../../../../theme/theme';
import Head from 'next/head';
import SpeakersButton from '../../../../components/speakers/SpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function JamesCroft() {
  return (
    <Layout>
      <Head>
        <title>James Croft</title>
      </Head>
      <Header
        title={'James Croft'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/James_Croft.png"
          alt="Picture of James Croft"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Should you write UI tests?</h2>
        <p tabIndex="0">
          UI testing is a point of conflict amongst app developers.
          When asked in a recent poll on whether app devs write them,
          over half don't!
        </p>
        <p tabIndex="0">
          We all understand the importance of writing great unit tests
          for your APIs so why should your UI not benefit from the
          same care?
        </p>
        <p tabIndex="0">
          This session will explore the benefits of writing UI tests.
          We'll show you how to get started with UI testing with
          Selenium and C#. Plus, a look at how you can make your UI
          testing process maintainable with speed with code re-use.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About James</h2>
        <p tabIndex="0">
          <b>Principal Developer and Microsoft MVP at Razor Ltd</b>
        </p>
        <p tabIndex="0">
          Howdy folks 👋 Thanks for taking the time to look at my
          profile!
        </p>
        <p tabIndex="0">
          My name is James Croft and I'm a passionate .NET software
          developer with over 10 years of experience developing user
          experiences on a range of different form factors! I've been
          fortunate to have been recognized as a Microsoft MVP since
          2015 also.
        </p>
        <p tabIndex="0">
          Day-to-day, I architect, lead, and aid with the delivery of
          client software solutions as a Principal Developer for Razor
          Ltd in Sheffield.
        </p>
        <p tabIndex="0">
          My main technical focus is building innovative and robust
          user experiences with Windows, Android, iOS, and the web.
          This passion for technology extends to mixed reality
          (MR/AR/VR), wearable devices, IoT, and conversational AI.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Croft: Twitter"
            href="http://www.twitter.com/jamesmcroft"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Croft: Website"
            href="http://www.jamescroft.co.uk/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Croft: LinkedIn"
            href="https://www.linkedin.com/in/jmcroft/"
          >
            LinkedIn
          </a>
        </li>
      </section>

      <style jsx>
        {`
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
