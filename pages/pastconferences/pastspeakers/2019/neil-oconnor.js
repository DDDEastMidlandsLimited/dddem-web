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

export default function NeilOConnor() {
  return (
    <Layout>
      <Head>
        <title>Neil O'Connor</title>
      </Head>
      <Header
        title={"Neil O'Connor"}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/TBC.png"
            alt="Picture of Neil O'Connor"
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
          CTO secrets: How to get the best companies fighting to hire
          you
        </h2>
        <p tabIndex="0">
          As a CTO, I spend a lot of my time hiring talent and
          building high performance development teams. I have hired
          hundreds of software professionals over the years, and I
          still insist on interviewing every candidate personally. I
          think I’ve got a pretty good hit rate: my teams have all had
          great reputations in their local tech community, and I would
          rehire - in a heartbeat - almost everyone I’ve hired in the
          past.
        </p>
        <p tabIndex="0">
          It’s never been a better time to be working in the software
          industry. Your skills are in demand, but that doesn’t mean
          that everyone gets to work on the coolest tech in the most
          forward thinking companies. How do you set yourself apart
          from the crowd and get those companies falling over
          themselves to hire you?
        </p>
        <p tabIndex="0">
          In this session, I’ll share some of my secrets about what I
          look for in candidates. What is it that makes a candidate
          stand out? What do I look for in their CV? What is it about
          how they approach the interview or the technical assessment
          that impresses me? How important is formal education? What
          do I look for in how the candidate spends their spare time?
        </p>
        <p tabIndex="0">
          One myth to clear up right here: not everyone has to be a
          “rockstar developer”. I look for a balanced mix of skills in
          every candidate, and I’m often much more impressed by the
          quiet one who has demonstrated great judgment, insight or a
          capacity to learn. To continue the rockstar analogy, I’d
          much rather hire the reliable drummer or the skilful backing
          singer over the egotistical and unpredictable frontman!
        </p>
        <p tabIndex="0">
          This session will offer clear, practical advice on how you
          can maximise your personal value in the industry. Some of it
          will be quick and easy to achieve, while some of it will
          require you to make longer term changes to your mindset. But
          whether you are an old hand eyeing your next career move, or
          you are looking for your first job in the industry, there
          will be something in this talk for you.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">About Neil</h2>
        <p tabIndex="0">
          <b>
            CTO at Koodoo, a Nottingham-based fintech in the Blenheim
            Chalcot group
          </b>
        </p>
        <p tabIndex="0">
          Neil has been building forward-thinking development teams
          since 1862. He was founding CTO at local companies Koodoo
          and Oakbrook Finance, and has worked in a wide array of
          techie roles in numerous industries. He believes that if
          something is worth doing, it&apos;s worth doing right, and
          aims to create environments where development teams can
          excel at what they do best.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/FHhgTXiv-Rw"
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
            aria-label="Neil: Youtube of Talk"
            href="https://youtu.be/FHhgTXiv-Rw"
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
            aria-label="Neil: Twitter"
            href="https://twitter.com/1stmanonthesun"
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
