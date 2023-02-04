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
        <title>Dylan Beattie</title>
      </Head>
      <Header
        title={'Dylan Beattie'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2019/Dylan_B.jpg"
            alt="Picture of Dylan Beattie"
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
              <b>Talk Length: </b> 60 minute Keynote
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">The Art of Code</h2>
        <p tabIndex="0">
          Software and technology has changed every aspect of the
          world we live in. At one extreme are the ‘mission critical’
          applications - the code that runs our banks, our hospitals,
          our airports and phone networks. Then there’s the code we
          all use every day to browse the web, watch movies, create
          spreadsheets… not quite so critical, but still code that
          solves problems and delivers services.
        </p>
        <p tabIndex="0">
          But what about the code that only exists because somebody
          wanted to write it? Code created just to make people smile,
          laugh, maybe even dance? Maybe even code that does nothing
          at all, created just to see if it was possible?
        </p>
        <p tabIndex="0">
          Join Dylan Beattie - programmer, musician, and creator of
          the Rockstar programming language - for an entertaining look
          at the art of code. We’ll look at the origins of programming
          as an art form, from Conway&apos;s Game of Life to the 1970s
          demoscene and the earliest Obfuscated C competitions. We’ll
          talk about esoteric languages and quines - how DO you create
          a program that prints its own source code? We’ll look at
          quine relays, code golf and generative art, and we’ll
          explore the phenomenon of live coding as performance - from
          the pioneers of electronic music to modern algoraves and
          live coding platforms like Sonic Pi.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Dylan</h2>
        <p tabIndex="0">
          <b>Software Architect</b>
        </p>
        <p tabIndex="0">
          Dylan wrote his first web page in 1992 and never looked
          back. He&apos;s been building data-driven web applications
          since the late 1990s, and has worked on everything from tiny
          standalone websites to complex distributed systems.
          He&apos;s the CTO at Skills Matter in London, he&apos;s a
          Microsoft MVP, and he&apos;s a regular speaker at
          conferences and user groups, where he&apos;s spoken about
          topics from continuous delivery and Conway&apos;s Law to the
          history of the web, federated authentication and hypermedia
          APIs. When he&apos;s not wrangling code, Dylan plays guitar
          and writes songs about code.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2019</h2>
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CgDC4lzU5Gc"
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
            aria-label="Dylan Beattie: Youtube of Talk"
            href="https://youtu.be/CgDC4lzU5Gc"
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
              aria-label="Dylan Beattie: Twitter"
              href="https://twitter.com/dylanbeattie"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Dylan Beattie: Website"
              href="https://www.dylanbeattie.net"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
