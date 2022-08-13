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
        <Image
          src="/static/speakers/2021/Simon_Painter.png"
          alt="Picture of Simon Painter"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">SOLID Principles in 5 Nightmares</h2>
        <p tabIndex="0">
          The 5 SOLID principles - popularised by "Uncle" Bob Martin
          in some of his highly influential books on Object Orientated
          Software development - are rarely cited directly but they
          are nevertheless at the heart of a lot of the thinking that
          goes into modern software development.
        </p>
        <p tabIndex="0">
          These principles have been around in some form or other ever
          since the 1980s, but continue to be just as relevant today
          as they were then.
        </p>
        <p tabIndex="0">
          In this talk, we're going to look at each of the 5 SOLID
          principles, these being:
        </p>
        <li>Single Dependency Principle</li>
        <li>Open/Close Principle</li>
        <li>Liskov Substitution Principle</li>
        <li>Interface Segregation Principle</li>
        <li>Dependency Inversion Principle</li>
        <p tabIndex="0">See what he did there with the names?</p>
        <p tabIndex="0">
          We'll look at each in turn, with the help of some slightly
          imaginative examples taken from a popular SF franchise. What
          are they, what nightmare scenarios can occur if they aren't
          followed, and how they can subsequently be applied.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Simon</h2>
        <p tabIndex="0">
          <b>.NET Contractor and Consultant</b>
        </p>
        <p tabIndex="0">
          I've been working as a .NET developer for over 13 years now
          in a variety of industries including government, retail and
          manufacturing. But as a coder, I've been playing with making
          computers do whatever my crazed imagination could devise
          since I was old enough to read my Dad's copy of the ZX
          Spectrum BASIC coders manual.
        </p>
        <p tabIndex="0">
          I've been speaking about Functional C# at various user
          groups and conferences around the UK, USA, and India, and am
          particularly interested in seeing just how far we can push
          the capabilities of C#.
        </p>
        <p tabIndex="0">
          When I'm not coding, or running after my two small children,
          I have been known to enjoy the classic series of Doctor Who,
          Fighting Fantasy Gamebooks, Cryptic Crosswords, and rather
          more coffee than is probably good for me.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mGHB6X5FOBo"
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
            aria-label="Simon: Youtube of Talk"
            href="https://youtu.be/mGHB6X5FOBo"
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
