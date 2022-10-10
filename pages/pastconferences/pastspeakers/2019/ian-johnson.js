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

export default function IanJohnson() {
  return (
    <Layout>
      <Head>
        <title>Ian Johnson</title>
      </Head>
      <Header
        title={'Ian Johnson'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Ian_J.jpg"
            alt="Picture of Ian Johnson"
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
          <ul>
            <b>Talk Length: </b> 60 minute
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Reasonable Code</h2>
        <p tabIndex="0">
          In a reasonable a system (i.e. a system that helps me to
          understand it, to reason about it) I should be able to
          understand how to make a change without holding the entire
          system in my head. I should be able to reason where the
          change needs to be made and reason about the impact it will
          have.
        </p>
        <p tabIndex="0">
          I want to explore what reasonable means to me, from the
          processes of the team all the way down to an individual
          block of code. Along the way, we will encounter existing
          frameworks, tools, and patterns that our community has
          developed over the years to help us to reason about our code
          and processes; I feel that they have often been misused and
          end up creating the opposite effect, adding unnecessary
          complexity to how we work.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Ian</h2>
        <p tabIndex="0">
          <b>Software developer, sketch noter</b>
        </p>
        <p tabIndex="0">
          Ian is a software developer working at Redgate, a company
          that develops tools for developers and database
          administrators.
        </p>
        <p tabIndex="0">
          Ian is passionate about writing maintainable code that
          delivers on the needs of users. Though he considers himself
          an introvert, Ian loves talking with other developers,
          learning from their experiences and sharing his own.
        </p>
        <p tabIndex="0">
          Outside of work, Ian is a passionate Star Wars fan and has
          been known to make the occasional really bad pun, but all of
          his code is "no-pun sourced" (sorry, couldn&apos;t resist).
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Ian Johnson: Twitter"
            href="https://twitter.com/ijohnson_tnf"
          >
            Twitter
          </a>
        </li>
      </section>
    </Layout>
  );
}
