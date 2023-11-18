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

export default function ConnellSharp() {
  return (
    <Layout>
      <Head>
        <title>Connell Sharp</title>
      </Head>
      <Header
        title={'Connell Sharp'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Connell_S.jpg"
            alt="Picture of Connell Sharp"
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
              <b>Talk Length: </b> 60 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Good Microservice Boundaries</h2>
        <p tabIndex="0">
          Deciding which things belong in which service can make or
          break your architecture. How big should services be? How
          many developers per service, or service per developers? Tips
          on how to find the right boundaries using ideas from
          Domain-Driven Design and Team Topologies, with some common
          mistakes to avoid.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Connell Sharp</h2>
        <p tabIndex="0">
          <b>Software Engineer at Stack Overflow</b>
        </p>
        <p tabIndex="0">
          Coding since 2005. Every day learning and sharing knowledge.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Connell Sharp: X"
              href="https://www.twitter.com/connellsharp"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Connell Sharp: Website"
              href="https://www.connell.dev/"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
