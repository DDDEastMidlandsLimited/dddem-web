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

export default function AnthonyDang() {
  return (
    <Layout>
      <Head>
        <title>Anthony Dang</title>
      </Head>
      <Header
        title={'Anthony Dang'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Anthony_Dang.png"
            alt="Picture of Anthony Dang"
            className="speakerpic"
            height="100"
            width="100"
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
          Cache me outside - Caching Methodologies and Architectures
        </h2>
        <p tabIndex="0">
          Caching can be your best-friend or your worst best-friend. A
          poor cache implementation can mean the difference between
          experiencing blazing fast performance or unexplained random
          slowness, or both! It can even result in random stale (out
          of date) content which you can’t explain.
        </p>
        <p tabIndex="0">
          In this presentation we will demo and compare different
          caching methodologies, and their perceived real world uses.
          We will discuss Donut cache, Memory cache, Redis, Varnish,
          CDNs, and many more. We will dive into demos of real world
          implementations which can cause unpredictable problems. Some
          of these are horrible, and some are face-palm.
        </p>
        <p tabIndex="0">
          At the end of this presentation you will be aware of the
          different trade-offs with each caching methodology, and
          which might best for your situation.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Anthony</h2>
        <p tabIndex="0">
          <b>Head of Development</b>
        </p>
        <p tabIndex="0">
          Anthony is the Technical Director at Radley Yeldar (London,
          UK). He writes tech articles, and is a regular presenter at
          conferences and meetups. He loves automation and development
          processes, experienced in scaling high performing teams
          across multiple countries, a Scrum certified Agile
          enthusiast, and a vocal proponent of Behaviour Driven
          Development. Originally from Sydney, Australia, he is now
          based in London.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZgThiiahBVA"
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
            aria-label="Anthony Dang: Youtube of Talk"
            href="https://youtu.be/ZgThiiahBVA"
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
            aria-label="Anthony Dang: Twitter"
            href="https://twitter.com/AnthonyDotNet"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Anthony Dang: LinkedIn"
            href="https://www.linkedin.com/in/anthony-dang79/"
          >
            LinkedIn
          </a>
        </li>
      </section>

      <style jsx global>
        {`
          section-container {
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
