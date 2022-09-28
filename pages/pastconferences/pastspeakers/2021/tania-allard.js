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

export default function TaniaAllard() {
  return (
    <Layout>
      <Head>
        <title>Tania Allard</title>
      </Head>
      <Header
        title={'Tania Allard'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Tania_A.jpg"
            alt="Picture of Tania Allard"
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
        <h2 tabIndex="0">
          KEYNOTE: Open source for fun and for profit: rethinking the
          long road of sustainability.
        </h2>
        <p tabIndex="0">
          It is not an understatement to say that today, in 2021, the
          world runs on open source. Wherever you look, you will find
          open-source software in the wild - whether you have a
          smartphone in your pocket or if you see a self-driving car
          passing by or rockets orbiting in space, open-source is even
          in simple tasks as deciding what to watch tonight.
          Open-source software and open infrastructure not only serve
          as the engine that powers our world. It also enables folks
          to get together and connect isolated individuals,
          communities, and missions.
        </p>
        <p tabIndex="0">
          With this in mind, the most important questions we should be
          asking is: who and what fuels open source? In this
          presentation, I will discuss how open source can bring
          individuals together to form communities. And more
          importantly, how we can rethink open-source and labour to
          ensure its long-term sustainability.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Tania</h2>
        <p tabIndex="0">
          <b></b>
        </p>
        <p tabIndex="0">
          Tania is the co-director at Quansight Labs and previous Sr.
          Developer Advocate at Microsoft. She has vast experience in
          academic research and industrial environments. Her main
          areas of expertise are within data-intensive applications,
          scientific computing, and machine learning. Tania has
          conducted extensive work on the improvement of processes,
          reproducibility and transparency in research, data science
          and artificial intelligence. She is passionate about
          mentoring, open source, and its community and is involved in
          a number of initiatives aimed to build more diverse and
          inclusive communities. She is also a contributor,
          maintainer, and developer of a number of open source
          projects and the Founder of Pyladies NorthWest.
        </p>
        <p tabIndex="0">
          In her free time she likes tinkering with electronics,
          nerding with mechanical keyboards, reading all the books and
          lifting heavy weights.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/He25olj1Iz8"
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
            aria-label="Tania: Youtube of Talk"
            href="https://youtu.be/He25olj1Iz8"
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
            aria-label="Tania Allard: Twitter"
            href="https://twitter.com/ixek"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tania Allard: Website"
            href="https://www.trallard.dev/pensieve/trallard.dev"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Tania Allard: LinkedIn"
            href="https://www.linkedin.com/in/taniaallard/"
          >
            LinkedIn
          </a>
        </li>
      </section>
    </Layout>
  );
}
