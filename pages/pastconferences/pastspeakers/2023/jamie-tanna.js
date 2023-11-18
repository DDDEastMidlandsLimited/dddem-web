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

export default function JamieTanna() {
  return (
    <Layout>
      <Head>
        <title>Jamie Tanna</title>
      </Head>
      <Header
        title={'Jamie Tanna'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Jamie_T.jpg"
            alt="Picture of Jamie Tanna"
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
        <h2 tabIndex="0">This talk could've been a blog post</h2>
        <p tabIndex="0">
          In recent years, blogging and the personal website have been
          getting a resurgence. I see blogging as a critical skill for
          every engineer to make them more well-rounded and effective
          in their roles, which can be a force-multiplier for
          someone's career, regardless of how many people read the
          posts.
        </p>
        <p tabIndex="0">
          In this talk, you'll learn some tips and tricks to getting
          started, as well as how to silence the Imposter Syndrome
          telling you that "you don't have anything worth writing" or
          that "there are better people who can blog about that
          thing", because it's just not true!
        </p>
        <p tabIndex="0">
          Blogging also doesn't just benefit you, but it can help
          level up your team, and for companies that actively support
          and encourage engineers blogging about the work they do, it
          can be a great indication to prospective candidates of the
          great work you're doing.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Jamie Tanna</h2>
        <p tabIndex="0">
          <b>Chief Blogger at www.jvt.me</b>
        </p>
        <p tabIndex="0">
          Jamie is a serial blogger and Open Sourcerer, who enjoys
          building things in the open to solve his needs, but with the
          added bonus that others often find it useful too!
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Jamie Tanna: Twitter"
              href="https://twitter.com/jamietanna"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Jamie Tanna: LinkedIn"
              href="https://linkedin.com/in/jamietanna"
            >
              LinkedIn
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Jamie Tanna: Website"
              href="https://www.jvt.me/"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
