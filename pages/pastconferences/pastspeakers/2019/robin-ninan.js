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

export default function RobinNinan() {
  return (
    <Layout>
      <Head>
        <title>Robin Ninan</title>
      </Head>
      <Header
        title={'Robin Ninan'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Robin_Ninan.png"
            alt="Picture of Robin Ninan"
            className="speakerpic"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 30 minute
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Ditching the test pyramid in a microservices era
        </h2>
        <p tabIndex="0">
          We have all heard tales of the infamous test pyramid. Some
          of us have scaled the pyramid, some camped halfway and some
          dare not even attempt. Time and time again, I&apos;ve heard
          of the test pyramid in multiple talks, test articles and
          blog posts, but not many have dared stray away from it. Why
          do we often return to the same solution for every test
          problem?
        </p>
        <p tabIndex="0">
          What if we had another way forward; one that did not involve
          a pyramid. I once too advocated for the test pyramid in the
          good old times of monoliths. Times have changed.
        </p>
        <p tabIndex="0">
          We are now in the era of microservices and like many others,
          I found myself on shaky grounds with the test pyramid. It
          baffles me how little effort has been made to redefine or
          re-evaluate our quality assurance strategies. Whilst
          advances and breakthroughs are ripe in software development,
          our quality assurance processes and strategies often trail
          behind.
        </p>
        <p tabIndex="0">
          So why had I found myself on shaky grounds with a test
          strategy that stood the test of time for so long? In this
          session, we unravel why the onset of microservices shook the
          pyramid and we explore how we could succeed without having
          to scale the pyramid.
        </p>
        <p tabIndex="0">
          If you, like me started off with the search for a better
          test strategy that has been tried and tested in the
          microservices furnace and ended up unsatisfied with the
          answers; let me introduce you to a new era.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Robin</h2>
        <p tabIndex="0">
          <b>Senior QA</b>
        </p>
        <p tabIndex="0">
          Senior QA at Koodoo. Seasoned Quality Assurance Engineer
          with an eye for test tools, strategies and architecture.
        </p>
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
