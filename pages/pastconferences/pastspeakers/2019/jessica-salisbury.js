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

export default function JessicaSalisbury() {
  return (
    <Layout>
      <Head>
        <title>Jessica Salisbury</title>
      </Head>
      <Header
        title={'Jessica Salisbury'}
        banner="/static/banners/speakers.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Jessica_S.jpg"
            alt="Picture of Jessica Salisbury"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> She/Her
          </ul>
          <ul>
            <b>Talk Length: </b> 60 minute
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">The Power of the Feedback Loop</h2>
        <p tabIndex="0">
          From how the body knows when to stop growing to saving lives
          from speeding cars, the feedback loop is a mechanism that
          secretly underlies every corner of our existence. The
          concept spans schools of thought in psychology, economics,
          biology and neuroscience and is now emerging in the
          intersection of technology and behavioural science.
        </p>
        <p tabIndex="0">
          As technologists we are always looking to build products
          that are engaging and effective, and as people we strive to
          reach our full personal and working potential. Could the
          feedback loop be the piece we&apos;re all missing?
        </p>
        <p tabIndex="0">
          In this talk we&apos;ll dive into the structure of the
          feedback loop, some impressive examples of how powerful they
          can be and we&apos;ll explore how you can harness their
          power in your work and personal life.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Jessica</h2>
        <p tabIndex="0">
          <b>
            Behavioural Psychologist and Money Coaching Project
            Manager at Tully.
          </b>
        </p>
        <p tabIndex="0">
          Jess is a Behavioural Psychologist and the Project Manager
          of Money Coaching at Tully, a business created to help
          people who are worried about money. Jess leads on Tully’s
          Money Coaching product which uses Open Banking data to
          engage consumers in positive financial decision making to
          improve their financial wellbeing. From helping those in
          debt manage their money to providing early intervention for
          those displaying detrimental patterns of behaviour, Jess is
          using her academic background in psychology to create highly
          personalised, data led Money Coaching that drives long term,
          financial behavioural change for Tully customers.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bxz6LSOclXQ"
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
            aria-label="Jessica Salisbury: Youtube of Talk"
            href="https://youtu.be/bxz6LSOclXQ"
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
            aria-label="Jessica Salisbury: Twitter"
            href="https://twitter.com/JessSalisburyy"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Jessica Salisbury: LinkedIn"
            href="https://www.linkedin.com/in/jessica-salisbury-2a0920102/"
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
