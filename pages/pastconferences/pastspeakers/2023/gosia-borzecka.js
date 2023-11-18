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

export default function GosiaBorzęcka() {
  return (
    <Layout>
      <Head>
        <title>Gosia Borzęcka</title>
      </Head>
      <Header
        title={'Gosia Borzęcka'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Gosia_B.jpg"
            alt="Picture of Gosia Borzęcka"
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
              <b>Talk Length: </b> 60 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Don't panic - AI will not take your job</h2>
        <p tabIndex="0">
          We hear everywhere that AI is becoming more powerful day by
          day. And with OpenAI and ChatGPT's popularity, we can start
          thinking about how our life will change. But to better
          understand those changes, we should better understand this
          technology. So if you are curious about what benefits OpenAI
          can give you and how to move your ideas on the Enterprise
          level - come to this session. You will learn about OpenAI
          and Azure OpenAI services and what potential they can give
          to your everyday work and as well your projects!
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Gosia Borzęcka</h2>
        <p tabIndex="0">
          <b>AI Engineer</b>
        </p>
        <p tabIndex="0">
          Gosia Borzecka is a Microsoft AI MVP and AI Engineer at
          Avanade. She is a full-stack .NET and React developer with
          Office 365 experience. For the last two years, she has been
          interested in AI and Machine Learning (and Python!), and
          during her day job, she helped customers bring AI and ML
          models into the Modern Workplace. Gosia is also an
          international speaker, co-leader of NottsDevWorksop, and
          co-leader of AI 42, where she organized a few AI/Office 365
          Bootcamps and AI/ML-focused meetings.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Gosia Borzęcka: Twitter"
              href="https://twitter.com/GosiaBorzecka"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Gosia Borzęcka: LinkedIn"
              href="https://www.linkedin.com/in/gosiaborzecka/"
            >
              LinkedIn
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Gosia Borzęcka: Website"
              href="http://www.gosiaborzecka.net/"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
