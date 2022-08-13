import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import theme from '../../../../theme/theme';
import Head from 'next/head';
import Image from 'next/image';
import PastSpeakersButton from '../../../../components/speakers/PastSpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function PoornimaNayar() {
  return (
    <Layout>
      <Head>
        <title>Poornima Nayar</title>
      </Head>
      <Header
        title={'Poornima Nayar'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <Image
          src="/static/speakers/2021/Poornima_Nayar.png"
          alt="Picture of Poornima Nayar"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> She/Her
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">REST, GraphQL and gRPC : A Comparison</h2>
        <p tabIndex="0">
          Be it any industry, applications need to talk to each other.
          So, developers often build bridges – Application Programming
          Interfaces (API) – to allow one system to communicate to
          another.
        </p>
        <p tabIndex="0">
          Over time, different API architectural styles have been
          released. Each of them has its own characteristics, patterns
          of data exchange, pros, and cons. REST, GraphQL and gRPC are
          three main options when it comes to API development and
          implementation In my session I will cover what REST,
          GraphQL, and gRPC are, how APIs can be implemented using
          each of these, and give you a comparison between them.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Poornima</h2>
        <p tabIndex="0">
          <b>Freelance Developer, Microsoft MVP, Umbraco MVP</b>
        </p>
        <p tabIndex="0">
          Poornima is a .Net developer with over 10 years of
          experience in .Net and Umbraco. She is passionate about
          learning new technologies and keeping herself up-to-date
          with the latest developments in technology. Outside her
          work, Poornima enjoys music and is undergoing training in
          Indian Classical music. Based in Langley, UK she mothers a
          little girl and spends her spare time reading, cooking and
          watching movies.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <p tabIndex="0">Coming Feburary 2022</p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Poornima Nayar: Twitter"
            href="https://twitter.com/PoornimaNayar"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Poornima Nayar: Website"
            href="https://poornimanayar.co.uk/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Poornima Nayar: LinkedIn"
            href="https://www.linkedin.com/in/poornimanayar/"
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
