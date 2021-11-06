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

export default function RizwanaAkmalKhan() {
  return (
    <Layout>
      <Head>
        <title>Rizwana Akmal Khan</title>
      </Head>
      <Header
        title={'Rizwana Akmal Khan'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <img
          src="/static/speakers/2021/Rizwana_Akmal_Khan.png"
          alt="Picture of Rizwana Akmal Khan"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> She/Her
          </ul>
          <ul>
            <b>Talk Length: </b> 30 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Good Writers Become Better Developers</h2>
        <p tabIndex="0">
          Good writing might not be rocket science, but it is the
          secret ingredient in the recipe for a great developer. If
          you're already an experienced developer or a only just
          starting on the dev journey, by the end of this talk, you'll
          come to appreciate the similarities between the two mediums,
          and be ready to arm yourself with techniques that will help
          you improve your writing AND development skills.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Rizwana</h2>
        <p tabIndex="0">
          <b>Customer Success Engineer at Vercel</b>
        </p>
        <p tabIndex="0">
          Rizwana is a designer-developer, poet, podcaster, and
          occasional-speaker. As a third-culture adult, she has grown
          up valuing diverse work environments and will always stand
          in support of spaces where people who may be seen as
          outsiders are given centre stage.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2021</h2>
        <br/>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ADQkdzS7zP0"
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
            aria-label="Riz: Youtube of Talk"
            href="https://youtu.be/ADQkdzS7zP0"
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
            aria-label="Rizwana Akmal Khan: Twitter"
            href="https://twitter.com/rizbizkits"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Rizwana Akmal Khan: Website"
            href="https://rizwanakhan.com/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Rizwana Akmal Khan: LinkedIn"
            href="https://www.linkedin.com/in/riz/"
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
