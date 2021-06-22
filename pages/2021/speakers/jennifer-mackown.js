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

export default function JenniferMackown() {
  return (
    <Layout>
      <Head>
        <title>Jennifer Mackown</title>
      </Head>
      <Header
        title={'Jennifer Mackown'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Jen_Mackown.png"
          alt="Picture of Jennifer Mackown"
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
        <h2 tabIndex="0">
          How to ruin kid's games with machine learning
        </h2>
        <p tabIndex="0">
          Winter lockdown with a small child has meant one thing in
          our house - trains. We have a huge amount of Brio (that
          magnetic wooden train set you used to play with in the Early
          Learning Centre) and every day means a new track taking over
          our living room. Train tracks designed by a 4yo can be quite
          random and not very satisfying to actually play with - lines
          that disappear under the sofa, bridges to nowhere and
          surprise turntables in the middle of a track.
        </p>
        <p tabIndex="0">
          So I started to build my own tracks (when he was asleep, to
          prevent ‘helping’), but it was pretty labour-intensive and
          it turns out I prefer to spend my evenings doing… well
          almost anything else. So instead I developed an algorithm to
          generate tracks and then trained a 4yo-opinion-based ML
          model to determine whether the tracks were ‘fun’ or not.
        </p>
        <p tabIndex="0">
          This is the story of how I learned that ‘developing an
          algorithm’ is not as easy as it sounds, and that ‘fun’ has
          different meanings depending on whether you are 4, 34 or a
          computer.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Jennifer</h2>
        <p tabIndex="0">
          <b>Senior Software Developer</b>
        </p>
        <p tabIndex="0">TBD</p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Jennifer Mackown: Twitter"
            href="https://twitter.com/__jcmc__/"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Jennifer Mackown: Website"
            href="https://www.jcmc.dev/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Jennifer Mackown: LinkedIn"
            href="https://www.linkedin.com/in/jennifer-mackown-4352aa37/"
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
