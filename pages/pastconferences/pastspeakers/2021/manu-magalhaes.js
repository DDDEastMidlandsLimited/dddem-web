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

export default function ManuMagalhaes() {
  return (
    <Layout>
      <Head>
        <title>Manu Magalhães</title>
      </Head>
      <Header
        title={'Manu Magalhães'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <PastSpeakersButton />
        <img
          src="/static/speakers/2021/Manu_Magalhaes.png"
          alt="Picture of Manu Magalhães"
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
        <h2 tabIndex="0">Nitty-Gitty: Master Git from the Inside</h2>
        <p tabIndex="0">
          You already use git, but you're still scared of it? Is git
          more a set of spells than a tool to you? Learn in this live
          demo how git works from the inside and reason all your git
          problems away.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Manu</h2>
        <p tabIndex="0">
          <b>DevSecOps Engineer</b>
        </p>
        <p tabIndex="0">
          I am a DevSecOps Engineer interested in Cloud Security,
          Security Automation, and Cyberethics. Before getting hooked
          into CyberSecurity, I was a translator with a Journalism
          degree. I love to explore how technology affects our
          society, and how we can create tech for good.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <p tabIndex="0">Coming Feburary 2022</p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Manu Magalhães: LinkedIn"
            href="https://www.linkedin.com/in/manumagalhaes/"
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
