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

export default function TomMorton() {
  return (
    <Layout>
      <Head>
        <title>Tom Morton</title>
      </Head>
      <Header
        title={'Tom Morton'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Tom_M.jpg"
            alt="Picture of Tom Morton"
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
            <b>Talk Length: </b> 30 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Open Banking vs. DeFi; The technological future of finance?
        </h2>
        <p tabIndex="0">
          Crypto Currencies. Open API's. Democratising FInance. Which
          approach to Open Finance will ultimately succeed and what
          does that mean for technology in the future.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Tom</h2>
        <p tabIndex="0">
          <b>Senior Engineering Manager, Capital One</b>
        </p>
        <p tabIndex="0">
          Tom is an engineer, writer and experienced people leader.
          His technical background and interests are extensive
          including security, software development, DevOps and
          engineering culture. In 2008 he famously declared management
          was not for him. Naturally, 6 years later he is responsible
          for 50 people across a number of teams - although he does
          try to write code when he can.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/K1KYdtYnCns"
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
            aria-label="Tom: Youtube of Talk"
            href="https://youtu.be/K1KYdtYnCns"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tom Morton: Twitter"
            href="https://twitter.com/errantx"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tom Morton: Website"
            href="https://errant.me.uk/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tom Morton: LinkedIn"
            href="https://www.linkedin.com/in/errantx/"
          >
            LinkedIn
          </a>
        </li>
      </section>
    </Layout>
  );
}
