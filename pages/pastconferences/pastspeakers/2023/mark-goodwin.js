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

export default function MarkGoodwin() {
  return (
    <Layout>
      <Head>
        <title>Mark Goodwin</title>
      </Head>
      <Header
        title={'Mark Goodwin'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Mark_G.jpg"
            alt="Picture of Mark Goodwin"
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
        <h2 tabIndex="0">Building Robots for Complete Beginners</h2>
        <p tabIndex="0">
        An introduction to building robots for complete beginners. Includes wires, microcontrollers, lego... and much, much more!
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Mark Goodwin</h2>
        <p tabIndex="0">
          <b>Maker. Hacker. Breaker of things.</b>
        </p>
        <p tabIndex="0">
        Mark is a security specialist and software developer with years of experience in building and securing business critical, Internet facing systems. Mark has been privileged to work on many kinds of systems including banking applications, embedded devices and web browsers.
        </p>
        <p tabIndex="0">
        Mark currently leads AppSec for Matillion.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Mark Goodwin: LinkedIn"
              href="https://www.linkedin.com/in/mark4security/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
