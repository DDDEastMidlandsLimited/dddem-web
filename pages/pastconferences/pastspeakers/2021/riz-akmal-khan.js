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

export default function RizwanaAkmalKhan() {
  return (
    <Layout>
      <Head>
        <title>Rizwana Akmal Khan</title>
      </Head>
      <Header
        title={'Rizwana Akmal Khan'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Rizwana_A.jpg"
            alt="Picture of Rizwana Akmal Khan"
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
            <b>Talk Length: </b> 30 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Good Writers Become Better Developers</h2>
        <p tabIndex="0">
          Good writing might not be rocket science, but it is the
          secret ingredient in the recipe for a great developer. If
          you're already an experienced developer or a only just
          starting on the dev journey, by the end of this talk, you'll
          come to appreciate the similarities between the two mediums,
          and be ready to arm yourself with techniques that will help
          you improve your writing AND development skills.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Rizwana</h2>
        <p tabIndex="0">
          <b>Customer Success Engineer at Vercel</b>
        </p>
        <p tabIndex="0">
          Rizwana is a designer-developer, poet, podcaster, and
          occasional-speaker. As a third-culture adult, she has grown
          up valuing diverse work environments and will always stand
          in support of spaces where people who may be seen as
          outsiders are given centre stage.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ADQkdzS7zP0"
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
            aria-label="Riz: Youtube of Talk"
            href="https://youtu.be/ADQkdzS7zP0"
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
            aria-label="Rizwana Akmal Khan: Twitter"
            href="https://twitter.com/rizbizkits"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Rizwana Akmal Khan: Website"
            href="https://rizwanakhan.com/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Rizwana Akmal Khan: LinkedIn"
            href="https://www.linkedin.com/in/riz/"
          >
            LinkedIn
          </a>
        </li>
      </section>
    </Layout>
  );
}
