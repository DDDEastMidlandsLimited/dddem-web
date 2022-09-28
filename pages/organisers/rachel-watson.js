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

export default function RachelWatson() {
  return (
    <Layout>
      <Head>
        <title>Rachel Watson</title>
      </Head>
      <Header
        title={'Rachel Watson'}
        banner="/static/banners/organisers/rach.jpg"
      />
      <section className="past-speakers-section">
        <h1 tabIndex="0">Co-Organiser and Chief of Communications</h1>
      </section>

      <section className="past-speakers-section">
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/rachel.png"
            alt="Picture of Rachel Watson"
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
        </div>
        <br />
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Rachel</h2>
        <p tabIndex="0">
          Rachel joined for the 2021 event. She is an excellent and
          ethical recruiter as a day job. If you have any need for a
          new role, reach out to her and she'll do her best to help
          connect you to great local companies.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Rachel's Responsibilities</h2>
        <p tabIndex="0">
          Coordinating all the DDD East Midlands correspondence with
          sponsors and partners, making sure the experience is as
          seamless as possibles. Also helping on the run up to the
          event to ensure everyone involved has what they need and are
          prepared to contribute to make it a great event.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li tabIndex="0">
          <a
            href="mailto:rachel@dddeastmidlands.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Watson: Email"
          >
            Email
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://twitter.com/missracheybaby"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Watson: Twitter"
          >
            Twitter
          </a>
        </li>
        <li tabIndex="0">
          <a
            href="https://www.linkedin.com/in/rachelwatsondistinct/"
            target="_blank"
            rel="noreferrer"
            aria-label="Rachel Watson: LinkedIn"
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
