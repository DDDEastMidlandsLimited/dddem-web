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

export default function MartynKilbryde() {
  return (
    <Layout>
      <Head>
        <title>Martyn Kilbryde</title>
      </Head>
      <Header
        title={'Martyn Kilbryde'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Martyn_K.jpg"
            alt="Picture of Martyn Kilbryde"
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
              <b>Talk Length: </b> 15 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">The Art of the Bad Code Review</h2>
        <p tabIndex="0">
          Have you ever received a code review that made you question
          your entire existence as a programmer? Have you found
          yourself scratching your head in confusion after reading a
          comment that was more cryptic than the code itself? If so,
          you're not alone.
        </p>
        <p tabIndex="0">
          But fear not, as we delve into the world of disastrous
          reviews, we'll showcase some prime examples of brilliantly
          terrible reviews so you can learn how to avoid making the
          same mistakes.
        </p>
        <p tabIndex="0">
          So come join us for a sarcastic and entertaining look at the
          art of the bad code review!
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Martyn Kilbryde</h2>
        <p tabIndex="0">
          <b>Principal Software Architect at D55</b>
        </p>
        <p tabIndex="0">
          Martyn Kilbryde is an experienced Principal Software
          Architect working at D55, an AWS consulting partner
          specialising in cloud-native and serverless technologies. He
          has many years of experience working with global highly
          transactional public-facing applications, specialising in
          building and delivering large complex systems from scratch.
        </p>
        <p tabIndex="0">
          Martyn is also an AWS Ambassador, and a member of the AWS
          Community Builders program. Spending the days working with
          multiple clients in all areas of industry, he also spends
          his spare time digging deeper, exploring technology and
          sharing that knowledge with the wider community.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Martyn Kilbryde: Twitter"
              href="https://twitter.com/eliholderness"
            >
              X
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
