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

export default function IanJohnson() {
  return (
    <Layout>
      <Head>
        <title>Ian Johnson</title>
      </Head>
      <Header
        title={'Ian Johnson'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/TBC.png"
            alt="Picture of Ian Johnson"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 minute
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Reasonable Code</h2>
        <p tabIndex="0">
          In a reasonable a system (i.e. a system that helps me to
          understand it, to reason about it) I should be able to
          understand how to make a change without holding the entire
          system in my head. I should be able to reason where the
          change needs to be made and reason about the impact it will
          have.
        </p>
        <p tabIndex="0">
          I want to explore what reasonable means to me, from the
          processes of the team all the way down to an individual
          block of code. Along the way, we will encounter existing
          frameworks, tools, and patterns that our community has
          developed over the years to help us to reason about our code
          and processes; I feel that they have often been misused and
          end up creating the opposite effect, adding unnecessary
          complexity to how we work.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Ian</h2>
        <p tabIndex="0">
          <b>Software developer, sketch noter</b>
        </p>
        <p tabIndex="0">
          Ian is a software developer working at Redgate, a company
          that develops tools for developers and database
          administrators.
        </p>
        <p tabIndex="0">
          Ian is passionate about writing maintainable code that
          delivers on the needs of users. Though he considers himself
          an introvert, Ian loves talking with other developers,
          learning from their experiences and sharing his own.
        </p>
        <p tabIndex="0">
          Outside of work, Ian is a passionate Star Wars fan and has
          been known to make the occasional really bad pun, but all of
          his code is "no-pun sourced" (sorry, couldn&apos;t resist).
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Ian Johnson: Twitter"
            href="https://twitter.com/ijohnson_tnf"
          >
            Twitter
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
            list-style: none;
            list-style-type: none;
            text-align: left;
            flex-basis: 0;
            flex-grow: 1;
          }

          .video-frame {
            text-align: center;
          }
          .center-link {
            text-align: center;
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

            .video-frame {
              display: none;
            }
          }
        `}
      </style>
    </Layout>
  );
}
