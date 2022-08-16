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

export default function SimonPainter() {
  return (
    <Layout>
      <Head>
        <title>Simon Painter</title>
      </Head>
      <Header
        title={'Simon Painter'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Simon_P.jpg"
            alt="Picture of Simon Painter"
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
        <h2 tabIndex="0">
          Hacking C#: Development for the Truly Lazy
        </h2>
        <p tabIndex="0">
          I don&apos;t know about you, but I&apos;m a lazy developer.
          What do I mean by lazy? I don&apos;t mean I don&apos;t want
          to do my work - far from it - I mean that I hate to write
          out a great deal of code to get the job done. I want to
          accomplish my goals with as little effort as possible.
        </p>
        <p tabIndex="0">
          One of my pet hates is writing enhancements that involve
          copying and pasting blocks of code, changing a variable
          name, then leaving everything else the same. I hate having
          to consider each and every possible null reference
          exception, and adding in a whole ton of boilerplate to
          handle it. I hate having to spent ages jumping back and
          forth in a legacy codebase, trying to understand what it
          actually does!
        </p>
        <p tabIndex="0">
          What&apos;s the alternative? In this talk, I&apos;ll
          demonstrate a way of working that avoids all this
          unneccesary work, and gives you more time to do something
          more productive.
        </p>
        <p tabIndex="0">We&apos;ll look at:</p>
        <ol>
          <li tabIndex="0">
            {' '}
            - Functional Programming - what benefits does this
            increasingly popular paradigm bring us to cut down coding
            effort
          </li>
          <li tabIndex="0">
            - Linq and Generics - These have been a part of C# for a
            long time now, and are some of the most powerful features
            available in the language, but hardly anyone seems to be
            using them effectively
          </li>
          <li tabIndex="0">
            - MetaProgramming - break open C# and take it to the next
            level with code that describes how to generate code
          </li>
        </ol>
        <p tabIndex="0">
          Our goal is to write code in as few lines as possible that
          provides the greatest amount of impact. We also want code
          that&apos;s readable, and easily maintainable. We want to
          think smart, and think...Lazy.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Simon</h2>
        <p tabIndex="0">
          <b>Senior Software Developer at EuroFins Scientific</b>
        </p>
        <p tabIndex="0">
          I&apos;ve been working as a .NET developer for over 12 years
          now in a variety of industries including government, retail
          and manufacturing. But as a coder, I&apos;ve been playing
          with making computers do whatever my crazed imagination
          could devise since I was old enough to read my Dad&apos;s
          copy of the ZX Spectrum BASIC coders manual.
        </p>
        <p tabIndex="0">
          I&apos;ve been speaking about Functional C# at various user
          groups and conferences around the UK, USA, and India, and am
          particularly interested in seeing just how far we can push
          the capabilities of C#.
        </p>
        <p tabIndex="0">
          When I&apos;m not coding, or running after my two small
          children, I have been known to enjoy the classic series of
          Doctor Who, Fighting Fantasy Gamebooks, Cryptic Crosswords,
          and rather more coffee than is probably good for me.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/k1FEdm_GGt4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="center-link">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Simon Painter: Youtube of Talk"
            href="https://youtu.be/k1FEdm_GGt4"
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
            aria-label="Simon Painter: Twitter"
            href="https://twitter.com/madSimonJ"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Simon Painter: LinkedIn"
            href="https://www.linkedin.com/in/simon-painter-45a05217/"
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
