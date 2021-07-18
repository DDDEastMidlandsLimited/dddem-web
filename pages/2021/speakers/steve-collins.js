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

export default function SteveCollins() {
  return (
    <Layout>
      <Head>
        <title>Steve Collins</title>
      </Head>
      <Header
        title={'Steve Collins'}
        banner="/static/banners/information/thencc.jpg"
      />
      <section>
        <SpeakersButton />
        <img
          src="/static/speakers/2021/Steve_Collins.jpg"
          alt="Picture of Steve Collins"
          className="speakerpic"
        />
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
          <ul>
            <b>Talk Length: </b> 15 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Func&lt;Y&gt; .NET Dependency Injection</h2>
        <p tabIndex="0">
          In this 15 minute lightning talk I will show that the
          Dependency Injection container that comes out of the box
          with .NET Core / .NET 5 is not just about interfaces and
          classes – you can also register function delegates instead
          of single method interfaces.
        </p>
        <p tabIndex="0">
          Using this approach will help avoid untestable DateTime.Now
          problems and add the ability to create keyed lookup
          registrations available in other DI containers.
        </p>
      </section>
      <section>
        <h2 tabIndex="0">About Steve</h2>
        <p tabIndex="0">
          <b>Freelance software developer</b>
        </p>
        <p tabIndex="0">
          Steve Collins is an independent software developer/architect
          with over 25 years’ experience in the industry working with
          Microsoft technologies.
        </p>
        <p tabIndex="0">
          Steve blogs at{' '}
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steve Collins Website"
            href="https://SteveTalksCode.co.uk"
          >
            {' '}
            https://SteveTalksCode.co.uk{' '}
          </a>{' '}
          and tweets
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steve Collins: Twitter"
            href="https://twitter.com/stevetalkscode"
          >
            @SteveTalksCode
          </a>
        </p>
        <p tabIndex="0">
          Steve has given talks about configuration at events and user
          groups around the UK and has also discussed configuration as
          a guest on the Dot Net Core Show podcast
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Dot Net Core Show podcast"
            href="https://dotnetcore.show/episode-49-configuration-in-net-core-with-steve-collins/"
          >
            https://dotnetcore.show/episode-49-configuration-in-net-core-with-steve-collins/
          </a>
          and the Documentation Not Included podcast
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Documentation Not Included podcast Youtube"
            href="https://www.youtube.com/watch?v=kXoprCDHBZM"
          >
            https://www.youtube.com/watch?v=kXoprCDHBZM
          </a>
        </p>
      </section>

      <section>
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steve Collins: Twitter"
            href="https://twitter.com/stevetalkscode"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steve Collins: Website"
            href="https://stevetalkscode.co.uk/"
          >
            Website
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
