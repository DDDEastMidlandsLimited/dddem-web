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

export default function JamesCroft() {
  return (
    <Layout>
      <Head>
        <title>James Croft</title>
      </Head>
      <Header
        title={'James Croft'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/James_C.jpg"
            alt="Picture of James Croft"
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
            <b>Talk Length: </b> 60 mins
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Should you write UI tests?</h2>
        <p tabIndex="0">
          UI testing is a point of conflict amongst app developers.
          When asked in a recent poll on whether app devs write them,
          over half don't!
        </p>
        <p tabIndex="0">
          We all understand the importance of writing great unit tests
          for your APIs so why should your UI not benefit from the
          same care?
        </p>
        <p tabIndex="0">
          This session will explore the benefits of writing UI tests.
          We'll show you how to get started with UI testing with
          Selenium and C#. Plus, a look at how you can make your UI
          testing process maintainable with speed with code re-use.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About James</h2>
        <p tabIndex="0">
          <b>Principal Developer and Microsoft MVP at Razor Ltd</b>
        </p>
        <p tabIndex="0">
          Howdy folks 👋 Thanks for taking the time to look at my
          profile!
        </p>
        <p tabIndex="0">
          My name is James Croft and I'm a passionate .NET software
          developer with over 10 years of experience developing user
          experiences on a range of different form factors! I've been
          fortunate to have been recognized as a Microsoft MVP since
          2015 also.
        </p>
        <p tabIndex="0">
          Day-to-day, I architect, lead, and aid with the delivery of
          client software solutions as a Principal Developer for Razor
          Ltd in Sheffield.
        </p>
        <p tabIndex="0">
          My main technical focus is building innovative and robust
          user experiences with Windows, Android, iOS, and the web.
          This passion for technology extends to mixed reality
          (MR/AR/VR), wearable devices, IoT, and conversational AI.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/vpb6vOs9P0g"
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
            aria-label="Clifford: Youtube of Talk"
            href="https://youtu.be/vpb6vOs9P0g"
          >
            Link to Youtube Recording
          </a>
        </div>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Croft: Twitter"
            href="http://www.twitter.com/jamesmcroft"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Croft: Website"
            href="http://www.jamescroft.co.uk/"
          >
            Website
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="James Croft: LinkedIn"
            href="https://www.linkedin.com/in/jmcroft/"
          >
            LinkedIn
          </a>
        </li>
      </section>
    </Layout>
  );
}
