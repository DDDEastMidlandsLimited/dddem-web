import React from 'react';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Head from 'next/head';
import Image from 'next/image';
import BackToAboutButton from '../../components/information/BackToAboutButton';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

library.add(faInstagram, faTwitter, faGithub, faLinkedin);

export default function MoretonBrockley() {
  return (
    <Layout>
      <Head>
        <title>Moreton Brockley</title>
      </Head>
      <Header
        title={'Moreton Brockley'}
        banner="/static/banners/organisers/mort.jpg"
      />
      <section className="past-speakers-section">
        <h1 tabIndex="0" className="align-center">
          Directior/ Co-Founder / Co-Organiser
        </h1>
      </section>

      <section className="past-speakers-section">
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/mort.png"
            alt="Picture of Moreton Brockley"
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
          </ul>
        </div>
        <br />
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Moreton</h2>
        <p tabIndex="0">
          A Principle Developer, Moreton is the sensible head of the
          co-founders. He is the number whizz and the fashion guru.
          Seriously, check out his Ninja Turtle Doc Martens. You may
          (not) recognise Moreton from his performance at 2018&apos;s
          Hack24 as Mr Blobby.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Moreton's Responsibilities</h2>
        <ul>
          <li tabIndex="0">Accountancy</li>
          <li tabIndex="0">Budgeting</li>
          <li tabIndex="0">Scheduling</li>
        </ul>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Moreton Brockley: Twitter"
              href="https://twitter.com/allmobro"
            >
              Twitter
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Moreton Brockley: LinkedIn"
              href="https://www.linkedin.com/in/moreton-brockley-06253538/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>

      <section className="past-speakers-section">
        <BackToAboutButton />
      </section>
    </Layout>
  );
}
