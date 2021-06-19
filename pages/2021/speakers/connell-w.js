import React from 'react';
import { logEvent } from '../../../utils/analytics';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import Link from 'next/link';
import SpeakersButton from '../../../components/speakers/SpeakersButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function ConnellW() {
  return (
    <Layout>
      <Head>
        <title>Connell W</title>
      </Head>
      <Header title={'Connell W'} />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Connell_W.png"
          alt=""
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> Not Provided
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Onion Architecture with DDD and CQRS</h2>
        <p tabIndex="0">
          Explaining how I reason about the building blocks of Onion
          Architecture, Domain-Driven Design and Command Query
          Responsibility Segregation in an event-driven micro-services
          architecture. How it all fits together in my head, the
          concepts they share, and the mistakes I've made along the
          way.
        </p>
        <p tabIndex="0">
          Examples using modern C# but can be applied to other
          languages and frameworks.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Connell</h2>
        <p tabIndex="0">
          <b>Lead Platform Engineer at Oakbrook Finance</b>
        </p>
        <p tabIndex="0">
          Loves building software and making music. Coding since 2005.
          Every day learning and sharing knowledge.
        </p>
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
            list-style: none;
            list-style-type: none;
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
