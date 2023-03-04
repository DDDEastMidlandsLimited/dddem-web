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

export default function AnthonyDang() {
  return (
    <Layout>
      <Head>
        <title>Anthony Dang</title>
      </Head>
      <Header
        title={'Anthony Dang'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Anthony_D.jpg"
            alt="Picture of Anthony Dang"
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
          Cache me outside - Caching Methodologies and Architectures
        </h2>
        <p tabIndex="0">
          Caching can be your best-friend or your worst best-friend. A
          poor cache implementation can mean the difference between
          experiencing blazing fast performance or unexplained random
          slowness, or both! It can even result in random stale (out
          of date) content which you can’t explain.
        </p>
        <p tabIndex="0">
          In this presentation we will demo and compare different
          caching methodologies, and their perceived real world uses.
          We will discuss Donut cache, Memory cache, Redis, Varnish,
          CDNs, and many more. We will dive into demos of real world
          implementations which can cause unpredictable problems. Some
          of these are horrible, and some are face-palm.
        </p>
        <p tabIndex="0">
          At the end of this presentation you will be aware of the
          different trade-offs with each caching methodology, and
          which might best for your situation.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Anthony</h2>
        <p tabIndex="0">
          <b>Head of Development</b>
        </p>
        <p tabIndex="0">
          Anthony is the Technical Director at Radley Yeldar (London,
          UK). He writes tech articles, and is a regular presenter at
          conferences and meetups. He loves automation and development
          processes, experienced in scaling high performing teams
          across multiple countries, a Scrum certified Agile
          enthusiast, and a vocal proponent of Behaviour Driven
          Development. Originally from Sydney, Australia, he is now
          based in London.
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
            aria-label="Anthony Dang: Youtube of Talk"
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
              aria-label="Anthony Dang: Twitter"
              href="https://twitter.com/AnthonyDotNet"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Anthony Dang: LinkedIn"
              href="https://www.linkedin.com/in/anthony-dang79/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
