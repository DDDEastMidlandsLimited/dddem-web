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

export default function StephenJackson() {
  return (
    <Layout>
      <Head>
        <title>Stephen Jackson</title>
      </Head>
      <Header
        title={'Stephen Jackson'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Stephen_J.jpg"
            alt="Picture of Stephen Jackson"
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
        <h2 tabIndex="0">Senior By Default</h2>
        <p tabIndex="0">
          In June 2020 the team manager and tech lead both announced
          they were leaving the company, making me the most senior
          developer there. Overnight I went from a simple developer to
          leading a multi-disciplined team responsible for
          mission-critical business systems.
        </p>
        <p tabIndex="0">
          In this presentation, I will talk about my first year in
          charge, my triumphs, and my mistakes. I will talk about the
          processes I implemented to keep myself sane and ensure the
          team I now lead continued to drive our software forward and
          serve business objectives. Along the way, I hope to impart
          some key lessons that I learned that may help anyone who is
          looking to move up to a senior position.
        </p>
        <p tabIndex="0">
          This is a talk for those looking to take on management or
          tech lead responsibilities and for any tech professionals
          who through no fault of their own have found themselves in a
          leadership position.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Stephen</h2>
        <p tabIndex="0">
          <b>Applications Team Lead</b>
        </p>
        <p tabIndex="0">
          Having come late to the software development game, Stephen
          has worked in a variety of software development roles in the
          utility and retail sectors. He now works in a team lead role
          for a well know Nottingham Fashion retailer working with
          various technologies but primarily uses the Microsoft tech
          stack of Dot Net and SQL Server.
        </p>
        <p tabIndex="0">
          When not developing software Stephen enjoys going for walks
          with his 2 dogs Holly and Daisy and also more geeky pursuits
          such as miniature and board gaming. He thinks the worse day
          of the week is and has always has been Tuesday and will
          gladly provide his reasons why this is so to anyone who
          asks.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1ar05srmMfQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="align-center">
          <a
            target="_blank"
            rel="noreferrer"
            aria-label="Stephen: Youtube of Talk"
            href="https://youtu.be/1ar05srmMfQ"
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
              aria-label="Stephen Jackson: Twitter"
              href="https://twitter.com/Dukeboxz"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Stephen Jackson: LinkedIn"
              href="https://www.linkedin.com/in/stephenjjackson/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
