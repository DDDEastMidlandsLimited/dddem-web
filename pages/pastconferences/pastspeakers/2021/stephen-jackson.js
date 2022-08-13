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

export default function StephenJackson() {
  return (
    <Layout>
      <Head>
        <title>Stephen Jackson</title>
      </Head>
      <Header
        title={'Stephen Jackson'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <Image
          src="/static/speakers/2021/Stephen_Jackson.png"
          alt="Picture of Stephen Jackson"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 15 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Senior By Default</h2>
        <p tabIndex="0">
          In June 2020 the team manager and tech lead both announced
          they were leaving the company, making me the most senior
          developer there. Overnight I went from a simple developer to
          leading a multi-disciplined team responsible for
          mission-critical business systems.
        </p>
        <p tabIndex="0">
          In this presentation, I will talk about my first year in
          charge, my triumphs, and my mistakes. I will talk about the
          processes I implemented to keep myself sane and ensure the
          team I now lead continued to drive our software forward and
          serve business objectives. Along the way, I hope to impart
          some key lessons that I learned that may help anyone who is
          looking to move up to a senior position.
        </p>
        <p tabIndex="0">
          This is a talk for those looking to take on management or
          tech lead responsibilities and for any tech professionals
          who through no fault of their own have found themselves in a
          leadership position.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Stephen</h2>
        <p tabIndex="0">
          <b>Applications Team Lead</b>
        </p>
        <p tabIndex="0">
          Having come late to the software development game, Stephen
          has worked in a variety of software development roles in the
          utility and retail sectors. He now works in a team lead role
          for a well know Nottingham Fashion retailer working with
          various technologies but primarily uses the Microsoft tech
          stack of Dot Net and SQL Server.
        </p>
        <p tabIndex="0">
          When not developing software Stephen enjoys going for walks
          with his 2 dogs Holly and Daisy and also more geeky pursuits
          such as miniature and board gaming. He thinks the worse day
          of the week is and has always has been Tuesday and will
          gladly provide his reasons why this is so to anyone who
          asks.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1ar05srmMfQ"
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
            aria-label="Stephen: Youtube of Talk"
            href="https://youtu.be/1ar05srmMfQ"
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
            aria-label="Stephen Jackson: Twitter"
            href="https://twitter.com/Dukeboxz"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Stephen Jackson: LinkedIn"
            href="https://www.linkedin.com/in/stephenjjackson/"
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
          }
        `}
      </style>
    </Layout>
  );
}
