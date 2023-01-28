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

export default function GaliyaWarrier() {
  return (
    <Layout>
      <Head>
        <title>Galiya Warrier</title>
      </Head>
      <Header
        title={'Galiya Warrier'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Galiya_W.jpg"
            alt="Picture of Galiya Warrier"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <b>Pronouns: </b> She/Her
            </li>
            <li>
              <b>Talk Length: </b> 60 minute
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Deep Learning in the world of little ponies
        </h2>
        <p tabIndex="0">
          In this talk, we will discuss computer vision, one of the
          most common real-world applications of machine learning. We
          will deep dive into various state-of-the-art concepts around
          building custom image classifiers - application of deep
          neural networks, specifically convolutional neural networks
          and transfer learning. We will demonstrate how those
          approaches could be used to create your own image classifier
          to recognise the characters of "My Little Pony" TV Series
          [or Pokemon, or Superheroes, or your custom images].
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Galiya</h2>
        <p tabIndex="0">
          <b>Cloud Solution Architect (AA and AI), Microsoft</b>
        </p>
        <p tabIndex="0">
          I&apos;m a Cloud Solution Architect at Microsoft, where I
          help enterprise customers adopt Advanced Analytics and
          Artifical Intelligence services on Microsoft Azure cloud.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Galiya Warrier: Twitter"
              href="https://twitter.com/galiyawarrier"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Galiya Warrier: LinkedIn"
              href="https://www.linkedin.com/in/galiyawarrier/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
