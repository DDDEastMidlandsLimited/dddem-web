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

export default function LekeSholuade() {
  return (
    <Layout>
      <Head>
        <title>Leke Sholuade</title>
      </Head>
      <Header
        title={'Leke Sholuade'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Leke_S.jpg.png"
            alt="Picture of Leke Sholuade"
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
              <b>Talk Length: </b> 15 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Why do we need a Black Valley</h2>
        <p tabIndex="0">
          The session describes argues the case to build a Black
          Valley, the idea of supporting black talents in tech to make
          sure products are not biased towards black people.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Leke</h2>
        <p tabIndex="0">
          <b>Founder of Black Valley</b>
        </p>
        <p tabIndex="0">
          Leke is the founder of Black Valley. An 8 weeks intensive
          person-centred programme which includes mentorship,
          community, and knowledge-building in tech for the black
          community
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/OTqD7AbtMJo"
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
            aria-label="Leke: Youtube of Talk"
            href="https://youtu.be/OTqD7AbtMJo"
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
              aria-label="Leke Sholuade: Twitter"
              href="https://twitter.com/lekeshow"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Leke Sholuade: LinkedIn"
              href="https://www.linkedin.com/in/leke-sholuade-74042875/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
