import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import SpeakersButton from '../../../components/speakers/SpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function LexLofthouse() {
  return (
    <Layout>
      <Head>
        <title>Lex Lofthouse</title>
      </Head>
      <Header
        title={'Lex Lofthouse'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Lex_Lofthouse.png"
          alt="Picture of Lex Lofthouse"
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
        <h2 tabIndex="0">Design for Developers</h2>
        <p tabIndex="0">
          Have you ever found yourself not just having to build the
          product, but in the absence of an actual designer, you’re
          the one who ends up having to throw together a design for it
          too? Want to gain the magic design powers to transform that
          average screen into a beautiful interface?
        </p>
        <p tabIndex="0">
          People have often told me they’d never be able to design
          interfaces because it’s too subjective and a completely
          different mindset to coding. Well I’m here to tell you that
          UI design isn’t as complex as it looks when you’ve got the
          right tools to hand – and it really isn't a magical dark
          art, I promise!
        </p>
        <p tabIndex="0">
          In this talk, I will help you understand some of the main
          design principles that you can apply across UI design. Such
          as Typography, Emphasis, Hierarchy, Layout, Spacing, Size,
          Depth and Colour.
        </p>
        <p tabIndex="0">
          We’ll be discussing these principles and, through visual
          demonstrations and examples, show how you can implement
          these principles across typical UI components such as forms,
          cards, dashboards and other interface elements . There may
          even be some *live designing* to help demonstrate.
        </p>
        <p tabIndex="0">
          Whether you’re the ‘dev-signer’ or you’re just somebody who
          would like to learn some fundamental design skills to widen
          your knowledge – you should then leave feeling well equipped
          with new design skills to apply day to day!{' '}
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Lex</h2>
        <p tabIndex="0">
          <b>Senior Designer at Nzime</b>
        </p>
        <p tabIndex="0">
          Lex Lofthouse is a Senior Designer at Nzime, a digital
          agency in Nottingham. She has been working in the design
          industry for over a decade, where her career took her from
          the chilly regions of Scotland to the slightly less chilly
          streets of Nottingham. She specialises in digital design and
          UX, but also works across branding, print, illustration and
          animation. She’s even semi-competent at some basic HTML and
          CSS she’ll have you know!
        </p>
        <p tabIndex="0">
          In her spare time Lex is a massive Pokemon fan, from the TCG
          to the anime. Plus despite being a professional designer she
          is also an advocate for Comic Sans, the world’s most
          misunderstood typeface (come and ask her why).
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Lex Lofthouse: Twitter"
            href="https://twitter.com/Loftio"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Lex Lofthouse: Website"
            href="https://loftio.co.uk/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Lex Lofthouse: LinkedIn"
            href="https://www.linkedin.com/in/alexandra-lofthouse-76a6b355/"
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
