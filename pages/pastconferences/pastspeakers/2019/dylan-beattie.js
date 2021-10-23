import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import theme from '../../../../theme/theme';
import Head from 'next/head';
import PastSpeakersButton from '../../../../components/speakers/PastSpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function DylanBeattie() {
  return (
    <Layout>
      <Head>
        <title>Dylan Beattie</title>
      </Head>
      <Header
        title={'Dylan Beattie'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <img
          src="/static/speakers/2019/Dylan_Beattie.jpg"
          alt="Picture of Dylan Beattie"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 minute Keynote
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">The Art of Code</h2>
        <p tabIndex="0">
          Software and technology has changed every aspect of the
          world we live in. At one extreme are the ‘mission critical’
          applications - the code that runs our banks, our hospitals,
          our airports and phone networks. Then there’s the code we
          all use every day to browse the web, watch movies, create
          spreadsheets… not quite so critical, but still code that
          solves problems and delivers services.
        </p>
        <p tabIndex="0">
          But what about the code that only exists because somebody
          wanted to write it? Code created just to make people smile,
          laugh, maybe even dance? Maybe even code that does nothing
          at all, created just to see if it was possible?
        </p>
        <p tabIndex="0">
          Join Dylan Beattie - programmer, musician, and creator of
          the Rockstar programming language - for an entertaining look
          at the art of code. We’ll look at the origins of programming
          as an art form, from Conway&apos;s Game of Life to the 1970s
          demoscene and the earliest Obfuscated C competitions. We’ll
          talk about esoteric languages and quines - how DO you create
          a program that prints its own source code? We’ll look at
          quine relays, code golf and generative art, and we’ll
          explore the phenomenon of live coding as performance - from
          the pioneers of electronic music to modern algoraves and
          live coding platforms like Sonic Pi.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Dylan</h2>
        <p tabIndex="0">
          <b>Software Architect</b>
        </p>
        <p tabIndex="0">
          Dylan wrote his first web page in 1992 and never looked
          back. He&apos;s been building data-driven web applications
          since the late 1990s, and has worked on everything from tiny
          standalone websites to complex distributed systems.
          He&apos;s the CTO at Skills Matter in London, he&apos;s a
          Microsoft MVP, and he&apos;s a regular speaker at
          conferences and user groups, where he&apos;s spoken about
          topics from continuous delivery and Conway&apos;s Law to the
          history of the web, federated authentication and hypermedia
          APIs. When he&apos;s not wrangling code, Dylan plays guitar
          and writes songs about code.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CgDC4lzU5Gc"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </div>
        <div className="center-link">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Dylan Beattie: Youtube of Talk"
            href="https://youtu.be/CgDC4lzU5Gc"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Dylan Beattie: Twitter"
            href="https://twitter.com/dylanbeattie"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Dylan Beattie: Website"
            href="https://www.dylanbeattie.net"
          >
            Website
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
