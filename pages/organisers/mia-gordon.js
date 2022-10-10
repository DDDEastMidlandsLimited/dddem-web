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

export default function MiaGordon() {
  return (
    <Layout>
      <Head>
        <title>Mia Gordon</title>
      </Head>
      <Header
        title={'Mia Gordon'}
        banner="/static/banners/organisers/mia.jpg"
      />
      <section className="past-speakers-section">
        <h1 tabIndex="0">Social Responsibility Manager</h1>
      </section>

      <section className="past-speakers-section">
        <div className="speakerpic-container">
          <Image
            src="/static/organisers/mia.png"
            alt="Picture of Mia Gordon"
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
        <h2 tabIndex="0">About Mia</h2>
        <p tabIndex="0">
          Mia is a developer, and joined the organisation committee
          ready for the 2023 event.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Mia's Responsibilities</h2>
        <p tabIndex="0">
          Organising outreach. This can include working with
          universities, boot camps, organisations such as Coding Black
          Females. Helping us get a diverse range of speakers and
          publicising great initiatives.
        </p>
      </section>

      <section className="past-speakers-section">
        <BackToAboutButton />
      </section>
    </Layout>
  );
}
