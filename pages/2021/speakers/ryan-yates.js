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

export default function RyanYates() {
  return (
    <Layout>
      <Head>
        <title>Ryan Yates</title>
      </Head>
      <Header title={'Ryan Yates'} />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Ryan_Yates.png"
          alt=""
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
        <h2 tabIndex="0">Mental Health: Its Time to Talk</h2>
        <p tabIndex="0">
        Mental health affects us all, albeit at varying levels of intensity, be it from having a restless nights sleep or Bi-Polar Disorder and is still a subject that we tend to approach with caution, if we even speak about it at all, whether with our colleagues and managers, doctors and even our closest friends and family.
        </p>
        <p tabIndex="0">
        Starting talking about our mental health is often hard, but it is one of the most powerful tools in your arsenal to managing your own and your team's mental health and should be discussed in all 1:1s.
        </p>
        <p tabIndex="0">
        Come and gain an insight into some of the things to look out for as preliminary signs that your colleagues, friends, family and perhaps, most importantly, yourself may be suffering, plus how to broach this all-important conversation.
        </p>

      </section>
      <section>
        <h2 tabIndex="0">About Ryan</h2>
        <p tabIndex="0">
          <b>
            Consultant @BlackMarble - Cloud and Datacentre Management
            MVP
          </b>
        </p>
        <p tabIndex="0">
          Ryan is a Cloud and Datacenter Management MVP and has a
          background with automating many Microsoft technologies with
          PowerShell starting with SharePoint and lately focusing
          Azure
        </p>
        <p tabIndex="0">
          Ryan co-ordinates the UK PowerShell User Groups as well as
          being a main organiser of PSDay UK - the UK's PowerShell
          Conference
        </p>
        <p tabIndex="0">
          Ryan also runs Leeds Azure - an Azure focused user group for
          the Leeds area of the UK which meets virtually twice a
          month.
        </p>
        <p tabIndex="0">
          Ryan is currently a Senior Consultant at Black Marble, a
          software development consultancy services organisation where
          his role sees him working on a number of interesting
          projects that span technologies including Azure, Office 365
          and has a strong focus on DevOps/ALM Practices.
        </p>
        <p tabIndex="0">
          Outside of the world of tech Ryan blogs about Mental Health
          at{' '}
          <a href="https://mhasl.me/" target="_blank">
            https://mhasl.me
          </a>
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            aria-label="Ryan Yates: Twitter"
            href="https://twitter.com/ryanyates1990"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            aria-label="Ryan Yates: Website"
            href="https://blog.kilasuit.org/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            aria-label="Ryan Yates: LinkedIn"
            href="http://uk.linkedin.com/in/ryanyates90"
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
