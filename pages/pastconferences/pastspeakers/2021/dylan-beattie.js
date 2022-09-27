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

export default function DylanBeattie() {
  return (
    <Layout>
      <Head>
        <title>Dylan Beattie</title>
      </Head>
      <Header
        title={'Dylan Beattie'}
        banner="/static/banners/speakers.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Dylan_B.jpg"
            alt="Picture of Dylan Beattie"
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
        <h2 tabIndex="0">There's No Such Thing As Plain Text</h2>
        <p tabIndex="0">
          Software is complicated. Machine learning, microservice
          architectures, message queues… every few months there’s
          another revolutionary idea to consider, another framework to
          learn. And underneath so many of these amazing ideas and
          abstractions is text. When you work in software, you spend
          your life working with text. Some of those text files are
          source code, some are configuration files, some of them are
          documentation. Editors, revision control systems,
          programming languages - everything from C# and HTML to Git
          and VS Code is based on the idea that we’re working with
          “plain text” files. But… what if I told you there’s no such
          thing?
        </p>
        <p tabIndex="0">
          When we say something is a plain text file, we’re relying on
          a huge number of assumptions - about operating systems,
          editors, file formats, language, culture, history… and, most
          of the time, that’s OK. But when it goes wrong, good old
          plain text can lead to some of the weirdest bugs you’ve ever
          seen. Why is there Chinese in the SQL event logs? Why has
          the city of Aarhus disappeared? And why does Magnus
          Mårtensson always have trouble getting into the USA? Join
          Dylan Beattie for a fascinating look into the hidden world
          of text files - from the history of mechanical teletypes, to
          how emoji skin tones actually work. We’ll look at some
          memorable bugs, some golden rules for working with plain
          text, and we’ll even find out the story behind the strange
          saying “PIKE MATCHBOX” – and what it has to do with driving
          in Ukraine.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Dylan</h2>
        <p tabIndex="0">
          <b>The one in the hat.</b>
        </p>
        <p tabIndex="0">
          Dylan Beattie is an independent consultant who has been
          building data-driven web applications since the 1990s. He’s
          managed teams, taught workshops, and worked on everything
          from tiny standalone websites to complex distributed
          systems. He’s a Microsoft MVP, and he regularly speaks at
          conferences and user groups all over the world.
        </p>
        <p tabIndex="0">
          Dylan is the creator of the Rockstar programming language,
          and is known for his live music shows featuring
          software-themed parodies of classic rock songs. He’s online
          at dylanbeattie.net and on Twitter as @dylanbeattie.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/AGIiXKliOik"
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
            aria-label="Dylan: Youtube of Talk"
            href="https://youtu.be/AGIiXKliOik"
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
          }
        `}
      </style>
    </Layout>
  );
}
