import React from 'react';
import Layout from '../../../components/Layout';
import Header from '../../../components/Header';
import theme from '../../../theme/theme';
import Head from 'next/head';
import SpeakersButton from '../../../components/speakers/SpeakersButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function KojoHinson() {
  return (
    <Layout>
      <Head>
        <title>Kojo Hinson</title>
      </Head>
      <Header
        title={'Kojo Hinson'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Kojo_Hinson.png"
          alt="Picture of Kojo Hinson"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 30 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Embracing Skynet - An exploration of GPT-3 and its potential
          applications
        </h2>
        <p tabIndex="0">
          GPT-3 or Generative Pre-trained Transformer 3 (GPT-3) is an
          autoregressive language model that uses deep learning to
          produce human-like text.
        </p>
        <p tabIndex="0">
          A few weeks ago, I was lucky enough to be accepted into the
          developer beta release of the pre-trained GPT-3 API and have
          been marvelling at the shockingly good performance of its
          generative capabilities.
        </p>
        <p tabIndex="0">
          This talk should serve as a quick intro to the API itself
          (including a quick demo) and an exploration of some of the
          creative applications people have managed to find for this
          powerful technology so far.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Kojo</h2>
        <p tabIndex="0">
          <b>VP of Engineering at Koodoo</b>
        </p>
        <p tabIndex="0">
          Following a brief industrial placement building software for
          the purposes of radiation modelling at Culham Centre for
          Fusion Energy, Kojo has spent the last few years developing
          and building high quality software applications for
          enterprises of varying sectors and scales. From big data
          engineering for Walgreens, to embedded programming for
          Google and Amazon connected IoT devices, Kojo has developed
          a range of experience in several areas and layers of modern
          technology stacks.
        </p>
        <p tabIndex="0">
          Having spent time at several FinTech startups (Oakbrook
          Finance, Wealth Wizards and now Koodoo) Kojo has developed
          domain expertise not only in the technology required to
          build complex financial software but also in the business
          itself.
        </p>
        <p tabIndex="0">
          Kojo attained a BSc in Maths and Physics from the University
          of Bristol, followed by a MSc in the Physics and Tech of
          Nuclear Reactors at the University of Birmingham.
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Kojo Hinson: Twitter"
            href="https://twitter.com/KojoHinson"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Kojo Hinson: LinkedIn"
            href="https://www.linkedin.com/in/kojo-hinson-69a4074a/"
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
