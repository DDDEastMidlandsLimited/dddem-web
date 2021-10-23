import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
import theme from '../../../../theme/theme';
import Head from 'next/head';
import SpeakersButton from '../../../../components/speakers/SpeakersButton';
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
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">The [Source Code] Generation Game</h2>
        <p tabIndex="0">
          There has been a lot of buzz around source generators in
          .NET 5 and it's there's more to come in .NET 6.
        </p>
        <p tabIndex="0">
          But ... how did we get here and what may the future hold?
        </p>
        <p tabIndex="0">
          This talk starts with a brief history of my journey into
          source code generation, starting with the ZX Spectrum,
          through the Visual Basic years and then the code generation
          tools used with .NET framework and Visual Studio.
        </p>
        <p tabIndex="0">
          The remainder of the talk will focus on the source
          generators introduced with .NET 5, covering
        </p>
        <li tabIndex="0">
          How they differ from traditional template based code
          generation
        </li>
        <li tabIndex="0">Tooling to help debugging</li>
        <li tabIndex="0">Gotchas with the tooling!</li>
        <li tabIndex="0">Unit testing</li>
        <p tabIndex="0">
          Lastly, we will look at where source generators may go in
          the future
        </p>
        <li tabIndex="0">
          More out of the box use, such as System.Text.Json in .NET 6
        </li>
        <li tabIndex="0">
          Potential for Intellicode and Github Copilot integration
        </li>
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
