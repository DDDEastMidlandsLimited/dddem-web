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

export default function SimonPainter() {
  return (
    <Layout>
      <Head>
        <title>Simon Painter</title>
      </Head>
      <Header
        title={'Simon Painter'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Simon_P.jpg"
            alt="Picture of Simon Painter"
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
        <h2 tabIndex="0">SOLID Principles in 5 Nightmares</h2>
        <p tabIndex="0">
          The 5 SOLID principles - popularised by "Uncle" Bob Martin
          in some of his highly influential books on Object Orientated
          Software development - are rarely cited directly but they
          are nevertheless at the heart of a lot of the thinking that
          goes into modern software development.
        </p>
        <p tabIndex="0">
          These principles have been around in some form or other ever
          since the 1980s, but continue to be just as relevant today
          as they were then.
        </p>
        <p tabIndex="0">
          In this talk, we're going to look at each of the 5 SOLID
          principles, these being:
        </p>
        <ul>
          <li>Single Dependency Principle</li>
          <li>Open/Close Principle</li>
          <li>Liskov Substitution Principle</li>
          <li>Interface Segregation Principle</li>
          <li>Dependency Inversion Principle</li>
        </ul>
        <p tabIndex="0">See what he did there with the names?</p>
        <p tabIndex="0">
          We'll look at each in turn, with the help of some slightly
          imaginative examples taken from a popular SF franchise. What
          are they, what nightmare scenarios can occur if they aren't
          followed, and how they can subsequently be applied.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Simon</h2>
        <p tabIndex="0">
          <b>.NET Contractor and Consultant</b>
        </p>
        <p tabIndex="0">
          I've been working as a .NET developer for over 13 years now
          in a variety of industries including government, retail and
          manufacturing. But as a coder, I've been playing with making
          computers do whatever my crazed imagination could devise
          since I was old enough to read my Dad's copy of the ZX
          Spectrum BASIC coders manual.
        </p>
        <p tabIndex="0">
          I've been speaking about Functional C# at various user
          groups and conferences around the UK, USA, and India, and am
          particularly interested in seeing just how far we can push
          the capabilities of C#.
        </p>
        <p tabIndex="0">
          When I'm not coding, or running after my two small children,
          I have been known to enjoy the classic series of Doctor Who,
          Fighting Fantasy Gamebooks, Cryptic Crosswords, and rather
          more coffee than is probably good for me.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mGHB6X5FOBo"
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
            aria-label="Simon: Youtube of Talk"
            href="https://youtu.be/mGHB6X5FOBo"
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
              aria-label="Simon Painter: Twitter"
              href="https://twitter.com/madSimonJ"
            >
              Twitter
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
