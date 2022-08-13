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

export default function MarkTowndrow() {
  return (
    <Layout>
      <Head>
        <title>Mark Towndrow</title>
      </Head>
      <Header
        title={'Mark Towndrow'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Mark_Towndrow.png"
            alt="Picture of Mark Towndrow"
            className="speakerpic"
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
        <h2 tabIndex="0">
          How to be a better developer - without learning another
          JavaScript framework
        </h2>
        <p tabIndex="0">
          It’s increasingly important to make time for
          self-improvement and career development, but it’s hard to
          know where to focus your efforts. As developers we’re often
          attracted to learning new technologies and languages,
          however I’d like to make the case for a number of
          non-technical areas of development that I believe can give
          you a huge advantage in your career.
        </p>
        <p tabIndex="0">
          In this talk, I’ll share a number of skills that I’ve found
          compliment a technical toolbelt, such as generating and
          maintaining momentum within your team and looking beyond
          requirements to identify opportunities for your business.
          I’ll also share some tips to help fast track your progress,
          exploring why it’s important to seek out and identify the
          gaps in your skill set, and how to seize opportunities to
          strengthen these areas.
        </p>
        <p tabIndex="0">
          It’s my hope that this talk will give you a different
          perspective of what makes a great developer, as well as the
          tools and motivation to broaden your expertise so that you
          can make a bigger impact in your organisation.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Mark</h2>
        <p tabIndex="0">
          <b>Head of Engineering at OpenWrks</b>
        </p>
        <p tabIndex="0">
          Gained a Software Engineering degree at Nottingham Trent
          University, worked at TDX Group then Equifax before moving
          to Bizfitech / OpenWrks. Enjoy coding primarily in .NET
          (Core) and React but love playing with new technologies
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Mark Towndrow: Twitter"
            href="https://twitter.com/GraphicChange"
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
