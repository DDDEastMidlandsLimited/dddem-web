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

export default function StevenPears() {
  return (
    <Layout>
      <Head>
        <title>Steven Pears</title>
      </Head>
      <Header
        title={'Steven Pears'}
        banner="/static/banners/album.png"
      />
      <section className="past-speakers-section">
        <h1 tabIndex="0">Contracts and Finances Manager</h1>
      </section>

      <section className="past-speakers-section">
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/steven.jpg"
            alt="Picture of Steven Pears"
            className="speakerpic"
            height={250}
            width={250}
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <b>Pronouns: </b> He/Him
          </ul>
        </div>
        <br />
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Steve</h2>
        <p tabIndex="0">
          Steve (or StoiveyP) is a Technical Architect and active
          member of the local community. He has volunteered at the
          2019 and 2021 DDD East Midlands Conferences and provided a
          lot of coffee to Jessica during the events. Steve is also a
          Microsoft MVP and experienced public speaker.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Steven's Responsibilities</h2>
        <p tabIndex="0">
          Will be working closely with Moreton to manage the events
          contracts, budgets, payments and anything else financial.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steven Pears: Twitter"
            href="https://twitter.com/StevenPears"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Steven Pears: LinkedIn"
            href="https://www.linkedin.com/in/stevenpears/"
          >
            LinkedIn
          </a>
        </li>
      </section>

      <section className="past-speakers-section">
        <BackToAboutButton />
      </section>
    </Layout>
  );
}
