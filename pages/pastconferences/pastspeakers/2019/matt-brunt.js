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

export default function DylanBeattie() {
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
            src="/static/speakers/2019/Matt_B.jpg"
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
              <b>Talk Length: </b> 60 minute
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Think like a hacker</h2>
        <p tabIndex="0">
          Much in the same way that to secure a house it helps to know
          how to break in, knowing how to attack our systems will help
          us secure them. You have a lot of data in your
          organisations. Whether you think it&apos;s sensitive or not,
          it has value. Whether an attacker wants data for profit, a
          grudge, or just for fun we need to ensure that we don&apos;t
          just leave the door open for them to take what they want.{' '}
        </p>
        <p tabIndex="0">
          In this session we&apos;ll start to think like a hacker. The
          what, why, who, where and how of an attacking mindset will
          leave you with practical steps you can take away and use to
          start protecting your systems a little better.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Matt</h2>
        <p tabIndex="0">
          <b>Wizard</b>
        </p>
        <p tabIndex="0">
          Matt Brunt is a Developer with Helical Levity, a company
          educating and building the next generation of Cyber Security
          professionals.
        </p>
        <p tabIndex="0">
          When not tinkering with code he can be found reading comics,
          fighting monsters in dungeons and dragons, or drinking tea
          and eating jaffa-cakes.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/pqGIIomA46s"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="center-link">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Matt Brunt: Youtube of Talk"
            href="https://youtu.be/pqGIIomA46s"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Matt Brunt: Twitter"
              href="https://twitter.com/Brunty"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
