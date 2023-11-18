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

export default function AshleySmith() {
  return (
    <Layout>
      <Head>
        <title>Ashley Smith</title>
      </Head>
      <Header
        title={'Ashley Smith'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Ashley_S.jpg"
            alt="Picture of Ashley Smith"
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
              <b>Talk Length: </b> 30 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Don't go chasing waterfall</h2>
        <p tabIndex="0">
          I've been working in testing for about 10 years, and whilst
          the best practice and ddmethodolgies have moved on, us
          testers are facing the same problems! We're the bottlenecks,
          the under pressure, and dare I say the under-valued!
        </p>
        <p tabIndex="0">
          A quick talk about showing your testers some love and
          embracing best practice to achieve awesomeness together.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Ashley</h2>
        <p tabIndex="0">
          <b>She's awesome and works for BJSS.</b>
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Ashley Smith: Twitter"
              href="https://www.linkedin.com/in/ashley-smith-a48381127/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
