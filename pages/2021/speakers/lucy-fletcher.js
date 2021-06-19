import React from 'react';
import { logEvent } from '../../../utils/analytics';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import Link from 'next/link';
import SpeakersButton from '../../../components/speakers/SpeakersButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function LucyFletcher() {
  return (
    <Layout>
      <Head>
        <title>Lucy Fletcher</title>
      </Head>
      <Header title={'Lucy Fletcher'} />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Lucy_Fletcher.png"
          alt=""
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
        <h2 tabIndex="0">The Culture of DDD</h2>
        <p tabIndex="0">
          As engineers, it is all too easy to get lost in the
          technical details of DDD. When integrating DDD into your
          workflow it is important to keep in mind the culture
          surrounding it.
        </p>
        <p tabIndex="0">
          In this talk I will be discussing what is meant by "the
          culture of DDD", and how to embed it into your ways of
          working to truly enable and realise the power of an
          effective domain design.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Lex</h2>
        <p tabIndex="0">
          <b>Lead Software Engineer at Oakbrook</b>
        </p>
        <p tabIndex="0">
          I've been a Software Engineer with Oakbrook for 2 years, and
          during that time we've adopted DDD. Along the way we've made
          many mistakes, learned many lessons, and I look forward to
          sharing what I've learned in the hopes of helping others
          avoid the same mistakes!
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
