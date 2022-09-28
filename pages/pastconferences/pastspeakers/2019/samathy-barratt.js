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

export default function SamathyBarratt() {
  return (
    <Layout>
      <Head>
        <title>Samathy Barratt</title>
      </Head>
      <Header
        title={'Samathy Barratt'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Samathy_B.jpg"
            alt="Picture of Samathy Barratt"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> She/Her
          </ul>
          <ul>
            <b>Talk Length: </b> 60 minute Keynote
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">This is a talk about Nothing.</h2>
        <p tabIndex="0">
          NULL, None, 0, nullptr, nil, NaN. Every programming language
          represents the concept of nothing, zero or just 'not a
          thing' in a different way.
        </p>
        <p tabIndex="0">
          This talk looks at the various different representations of
          'nothing' in programming languages, exploring how the
          concept has developed over time, how representations differ
          and what each method has over another one.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Samathy</h2>
        <p tabIndex="0">
          <b>Magical Code Fairy</b>
        </p>
        <p tabIndex="0">
          Samathy is an inquisitive code fairy who strives to
          understand complex computer science problems and loves to
          help others do the same.
        </p>
        <p tabIndex="0">
          A Python programmer by day, and a passionate D programmer by
          night, she likes good challenges, good code and good coffee.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/iQGm3m1pkwo"
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
            aria-label="Samathy Barratt: Youtube of Talk"
            href="https://youtu.be/iQGm3m1pkwo"
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
            aria-label="Samathy Barratt: Twitter"
            href="https://twitter.com/samathy_barratt"
          >
            Twitter
          </a>
        </li>
      </section>
    </Layout>
  );
}
