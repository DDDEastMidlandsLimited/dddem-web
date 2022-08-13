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

export default function IanCooper() {
  return (
    <Layout>
      <Head>
        <title>Ian Cooper</title>
      </Head>
      <Header
        title={'Ian Cooper'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <Image
          src="/static/speakers/2019/Ian_Cooper.png"
          alt="Picture of Ian Cooper"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 60 minute
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">How to Escape The Distributed Monolith</h2>
        <p tabIndex="0">
          Microservices were all the rage, so you broke up your
          monolith. The services talk to each other by gRPC, you use a
          service mesh to route and load balance, and provide
          reliability oriented computing, you are fully buzzword
          compliant.
        </p>
        <p tabIndex="0">Yet something seems to be wrong.</p>
        <p tabIndex="0">
          You can&apos;t easily release software from one team,
          without coordinating with teams creating other. Testing has
          to be end-to-end to flush out problems or risk your team
          creating breaking changes for another team. Your
          'heavy-lifters', whether you call the principals or
          architects seem to spend all their time on Docker, K8s,
          Istio and a whole slew of infrastructure technologies. Your
          system won&apos;t run without them, and you feel locked in.
        </p>
        <p tabIndex="0">What happened?</p>
        <p tabIndex="0">
          In this talk we look at the emerging world of "smart proxies
          and dumb endpoints" and ask whatever happened to the vision
          of "smart endpoints and dumb pipes", and what you can do to
          change course and deliver on the original promises of
          microservices to allow your teams to release frequently and
          independently of each other. And become masters of your tech
          stack, not its servants.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Ian</h2>
        <p tabIndex="0">
          <b>Coding architect, pierced, bearded, tattooed</b>
        </p>
        <p tabIndex="0">
          Polyglot Coding Architect in London, founder of #ldnug,
          speaker, tabletop gamer, geek. Tattooed, pierced, and
          bearded. The 'guv' on @BrighterCommand
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CZ_PlBAXUmg"
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
            aria-label="Ian Cooper: Youtube of Talk"
            href="https://youtu.be/CZ_PlBAXUmg"
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
            aria-label="Ian Cooper: Twitter"
            href="https://twitter.com/icooper"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Ian Cooper: LinkedIn"
            href="https://www.linkedin.com/in/ian-cooper-2b059b/"
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
