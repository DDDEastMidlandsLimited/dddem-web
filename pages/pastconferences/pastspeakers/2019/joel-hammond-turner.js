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

export default function JoelHammondTurner() {
  return (
    <Layout>
      <Head>
        <title>Joel Hammond-Turner</title>
      </Head>
      <Header
        title={'Joel Hammond-Turner'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Joel_HT.jpg"
            alt="Picture of Joel Hammond-Turner"
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
              <b>Talk Length: </b> 60 minute
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          You&apos;re the Tech Lead - *you* fix it!
        </h2>
        <p tabIndex="0">
          Over the last couple of years, I&apos;ve presented 20 tricks
          and tips that I&apos;ve found invaluable as a Tech Lead. But
          in this session, I want to turn things around and look at
          applying some of those to solving specific issues that are
          common within many software development teams.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Joel</h2>
        <p tabIndex="0">
          <b>Tech Lead, Landmark Information Group</b>
        </p>
        <p tabIndex="0">
          I&apos;ve a very broad experience of software development
          over 15 years and a passion for both technology and elegance
          in my solutions that make me an extremely capable software
          architect.
        </p>
        <p tabIndex="0">
          Personable and professional, I revel in complex challenges,
          but always make time to coach and mentor team members.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/bPHxRA_pE54"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="align-center">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Joel Hammond-Turner: Youtube of Talk"
            href="https://youtu.be/bPHxRA_pE54"
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
              aria-label="Joel Hammond-Turner: Twitter"
              href="https://twitter.com/Rammesses"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Joel Hammond-Turner: LinkedIn"
              href="https://www.linkedin.com/in/joelht/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
