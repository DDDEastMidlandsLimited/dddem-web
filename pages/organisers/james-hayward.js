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

export default function JamesHayward() {
  return (
    <Layout>
      <Head>
        <title>James Hayward</title>
      </Head>
      <Header
        title={'James Hayward'}
        banner="/static/banners/generic.jpg"
      />
      <section className="past-speakers-section">
        <h1 tabIndex="0">Project Manager</h1>
      </section>

      <section className="past-speakers-section">
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/james.png"
            alt="Picture of James Hayward"
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
        <h2 tabIndex="0">About James</h2>
        <p tabIndex="0">
          James is a Learning Technology and Delivery Manager. He's an
          active member of the local community and arranges other
          events outside of this one. James has also volunteered at
          both the 2019 and 2021 event.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">James' Responsibilities</h2>
        <p tabIndex="0">
          Will be working closely with Jessica, ensuring everything
          happens on schedule and everyone knows what they need to do
          and when. Timelines, coordination with the venue, keeping in
          mind things like accessibility needs. Coordinating
          everything that makes the event a success.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="James Hayward: Twitter"
              href="https://twitter.com/geeksareforlife"
            >
              Twitter
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="James Hayward: LinkedIn"
              href="https://www.linkedin.com/in/jhayward/"
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
