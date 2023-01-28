import React from 'react';
import Layout from '../../../../components/Layout';
import Header from '../../../../components/Header';
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

export default function SteveCollins() {
  return (
    <Layout>
      <Head>
        <title>Steve Collins</title>
      </Head>
      <Header
        title={'Steve Collins'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Steve_C.jpg"
            alt="Picture of Steve Collins"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <b>Pronouns: </b> He/Him
            </li>
            <li>
              <b>Talk Length: </b> 60 mins
            </li>
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
        <ul>
          <li tabIndex="0">
            How they differ from traditional template based code
            generation
          </li>
          <li tabIndex="0">Tooling to help debugging</li>
          <li tabIndex="0">Gotchas with the tooling!</li>
          <li tabIndex="0">Unit testing</li>
        </ul>
        <ul>
          <p tabIndex="0">
            Lastly, we will look at where source generators may go in
            the future
          </p>
          <li tabIndex="0">
            More out of the box use, such as System.Text.Json in .NET
            6
          </li>
          <li tabIndex="0">
            Potential for Intellicode and Github Copilot integration
          </li>
        </ul>
      </section>

      <section className="past-speakers-section">
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

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/3IuDAp9xV3w"
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
            aria-label="Steve: Youtube of Talk"
            href="https://youtu.be/3IuDAp9xV3w"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
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
        </ul>
      </section>
    </Layout>
  );
}
