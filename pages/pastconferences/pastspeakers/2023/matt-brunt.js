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

export default function MattBrunt() {
  return (
    <Layout>
      <Head>
        <title>Matt Brunt</title>
      </Head>
      <Header
        title={'Matt Brunt'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Matt_B.jpg"
            alt="Picture of Matt Brunt"
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
        <h2 tabIndex="0">Dungeons, Dragons & Developers</h2>
        <p tabIndex="0">
          You enter the dungeon, as the echoes of your footsteps sound
          around you, something catches your eye - is that… oh, oh no.
        </p>
        <p tabIndex="0">
          You grab your trusty sword and with your fellow adventurers,
          you seek to overcome the mighty challenge that lays ahead of
          you: building software.
        </p>
        <p tabIndex="0">
          This talk is a look at some of the parallels between
          Dungeons and Dragons, and software development.
        </p>
        <p tabIndex="0">
          We’ll see how lessons learned through delving into dungeons
          and fighting monsters with a party of adventurers can help
          teams of developers when building software in the real
          world.
        </p>
        <p tabIndex="0">
          Are you ready to join me in a mighty quest for better
          software?
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Matt Brunt</h2>
        <p tabIndex="0">
          <b>Chaotic Wizard</b>
        </p>
        <p tabIndex="0">
          Matt Brunt is a Senior Software Engineer with Bumble where
          he works in a User Safety, Trust, and Integrity team.
        </p>
        <p tabIndex="0">
          He’s a mentor for development topics such as BDD, TDD, and
          clean-code, as well as having a few open source packages out
          in the wild.
        </p>
        <p tabIndex="0">
          When not tinkering with code he can be found reading comics,
          fighting monsters in dungeons and dragons, or drinking tea
          and eating jaffa-cakes.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Matt Brunt: Twitter"
              href="https://twitter.com/Brunty"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Matt Brunt: Website"
              href="https://brunty.me/"
            >
              Website
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Matt Brunt: LinkedIn"
              href="https://www.linkedin.com/in/mattbrunt/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
