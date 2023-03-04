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

export default function CaraHolland() {
  return (
    <Layout>
      <Head>
        <title>Cara Holland</title>
      </Head>
      <Header
        title={'Cara Holland'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Cara_H.jpg"
            alt="Picture of Cara Holland"
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
          Draw UX (or how to get your visual thinking groove on)
        </h2>
        <p tabIndex="0">
          Working visually is a super power. It increases your ability
          to understand and share complex information, think
          creatively and collaborate effectively. But for lots of
          adults drawing at work is a huge step outside of their
          comfort zone.
        </p>
        <p tabIndex="0">
          I&apos;m a business visualiser who draws, writes and trains.
        </p>
        <p tabIndex="0">
          In this session I will show you how to use visual skills
          throughout the UX journey, transforming your engagement and
          problem solving skills, and how you already have the
          functional drawing ability you need, even if you can barely
          draw a stick. Honest.
        </p>
        <p tabIndex="0">
          By the end of this session you will understand WHY working
          visually is so effective, but more importantly you&apos;ll
          get to see HOW it works by trying out visual exericises
          yourself.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Cara</h2>
        <p tabIndex="0">
          <b>Founder and head doodler at Graphic Change</b>
        </p>
        <p tabIndex="0">
          Founder, trainer and author of best selling book Draw a
          Better Business, Cara Holland has been working visually with
          companies as varied as Google and the NHS for the last 13
          years. She also co-runs the Graphic Change Academy which has
          trained people in over 69 countries how to start drawing at
          work.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZgThiiahBVA"
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
            aria-label="Cara Holland: Youtube of Talk"
            href="https://youtu.be/ZgThiiahBVA"
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
              aria-label="Cara Holland: Twitter"
              href="https://twitter.com/GraphicChange"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Cara Holland: LinkedIn"
              href="https://www.linkedin.com/in/cara-holland-71240b7/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
