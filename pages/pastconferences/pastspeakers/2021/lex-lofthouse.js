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

export default function LexLofthouse() {
  return (
    <Layout>
      <Head>
        <title>Lex Lofthouse</title>
      </Head>
      <Header
        title={'Lex Lofthouse'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Lex_L.jpg"
            alt="Picture of Lex Lofthouse"
            className="speakerpic"
            height="250"
            width="250"
            layout="responsive"
          />
        </div>
        <div>
          <ul>
            <li>
              <b>Pronouns: </b> She/Her
            </li>
            <li>
              <b>Talk Length: </b> 60 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">Design for Developers</h2>
        <p tabIndex="0">
          Have you ever found yourself not just having to build the
          product, but in the absence of an actual designer, you’re
          the one who ends up having to throw together a design for it
          too? Want to gain the magic design powers to transform that
          average screen into a beautiful interface?
        </p>
        <p tabIndex="0">
          People have often told me they’d never be able to design
          interfaces because it’s too subjective and a completely
          different mindset to coding. Well I’m here to tell you that
          UI design isn’t as complex as it looks when you’ve got the
          right tools to hand – and it really isn't a magical dark
          art, I promise!
        </p>
        <p tabIndex="0">
          In this talk, I will help you understand some of the main
          design principles that you can apply across UI design. Such
          as Typography, Emphasis, Hierarchy, Layout, Spacing, Size,
          Depth and Colour.
        </p>
        <p tabIndex="0">
          We’ll be discussing these principles and, through visual
          demonstrations and examples, show how you can implement
          these principles across typical UI components such as forms,
          cards, dashboards and other interface elements . There may
          even be some *live designing* to help demonstrate.
        </p>
        <p tabIndex="0">
          Whether you’re the ‘dev-signer’ or you’re just somebody who
          would like to learn some fundamental design skills to widen
          your knowledge – you should then leave feeling well equipped
          with new design skills to apply day to day!{' '}
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Lex</h2>
        <p tabIndex="0">
          <b>Senior Designer at Nzime</b>
        </p>
        <p tabIndex="0">
          Lex Lofthouse is a Senior Designer at Nzime, a digital
          agency in Nottingham. She has been working in the design
          industry for over a decade, where her career took her from
          the chilly regions of Scotland to the slightly less chilly
          streets of Nottingham. She specialises in digital design and
          UX, but also works across branding, print, illustration and
          animation. She’s even semi-competent at some basic HTML and
          CSS she’ll have you know!
        </p>
        <p tabIndex="0">
          In her spare time Lex is a massive Pokemon fan, from the TCG
          to the anime. Plus despite being a professional designer she
          is also an advocate for Comic Sans, the world’s most
          misunderstood typeface (come and ask her why).
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kTr8aoa0Pr4"
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
            aria-label="Lex: Youtube of Talk"
            href="https://youtu.be/kTr8aoa0Pr4"
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
              aria-label="Lex Lofthouse: Twitter"
              href="https://twitter.com/Loftio"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Lex Lofthouse: Website"
              href="https://loftio.co.uk/"
            >
              Website
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Lex Lofthouse: LinkedIn"
              href="https://www.linkedin.com/in/alexandra-lofthouse-76a6b355/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
