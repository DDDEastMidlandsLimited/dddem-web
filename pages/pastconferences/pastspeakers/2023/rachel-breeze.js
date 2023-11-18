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

export default function RachelBreeze() {
  return (
    <Layout>
      <Head>
        <title>Rachel Breeze</title>
      </Head>
      <Header
        title={'Rachel Breeze'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Rachel_B.jpg"
            alt="Picture of Rachel Breeze"
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
        <h2 tabIndex="0">
          Accessibility: Building and Deploying Accessible sites
        </h2>
        <p tabIndex="0">
          Accessibility and inclusive design benefits all users;
          building accessible products and services isn't just a
          checkbox exercise or a legal requirement, it makes them
          inclusive.
        </p>
        <p tabIndex="0">
          This talk will explore an approach to building websites that
          helps ensure that they are accessible from the start. From
          design and build to deployment.
        </p>
        <p tabIndex="0">
          The talk will focus on the development and build approach,
          looking at the functionality available in Visual Code and
          Visual Studio to provide automated accessibility testing.
        </p>
        <p tabIndex="0">
          There will also be a demo of tools available in Azure DevOps
          to help test accessibility as part of the process. We will
          also understand why automated testing only forms part of
          building accessible sites.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Rachel Breeze</h2>
        <p tabIndex="0">
          <b>
            Squad Lead, Umbraco and .NET Developer at Nexer Digital
          </b>
        </p>
        <p tabIndex="0">
          Rachel has been a developer for over 20 years, working in
          the Microsoft .Net stack. Rachel has been working with
          Umbraco since 2012 and is a 4x Umbraco MVP. She is
          passionate about accessibility, supporting and encouraging
          future developers, and in her spare time she enjoys scuba
          diving. She also drinks copious amounts of tea.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Rachel Breeze: X"
              href="https://twitter.com/BreezeRachel"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Rachel Breeze: LinkedIn"
              href="https://www.linkedin.com/in/rachel-breeze/"
            >
              LinkedIn
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Rachel Breeze: Website"
              href="https://www.rachelbreeze.dev/"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
