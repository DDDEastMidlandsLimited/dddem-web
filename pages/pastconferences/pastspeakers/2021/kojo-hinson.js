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

export default function KojoHinson() {
  return (
    <Layout>
      <Head>
        <title>Kojo Hinson</title>
      </Head>
      <Header
        title={'Kojo Hinson'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2021/Kojo_H.jpg"
            alt="Picture of Kojo Hinson"
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
              <b>Talk Length: </b> 30 mins
            </li>
          </ul>
        </div>
        <br />
        <h2 tabIndex="0">
          Embracing Skynet - An exploration of GPT-3 and its potential
          applications
        </h2>
        <p tabIndex="0">
          GPT-3 or Generative Pre-trained Transformer 3 (GPT-3) is an
          autoregressive language model that uses deep learning to
          produce human-like text.
        </p>
        <p tabIndex="0">
          A few weeks ago, I was lucky enough to be accepted into the
          developer beta release of the pre-trained GPT-3 API and have
          been marvelling at the shockingly good performance of its
          generative capabilities.
        </p>
        <p tabIndex="0">
          This talk should serve as a quick intro to the API itself
          (including a quick demo) and an exploration of some of the
          creative applications people have managed to find for this
          powerful technology so far.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Kojo</h2>
        <p tabIndex="0">
          <b>VP of Engineering at Koodoo</b>
        </p>
        <p tabIndex="0">
          Following a brief industrial placement building software for
          the purposes of radiation modelling at Culham Centre for
          Fusion Energy, Kojo has spent the last few years developing
          and building high quality software applications for
          enterprises of varying sectors and scales. From big data
          engineering for Walgreens, to embedded programming for
          Google and Amazon connected IoT devices, Kojo has developed
          a range of experience in several areas and layers of modern
          technology stacks.
        </p>
        <p tabIndex="0">
          Having spent time at several FinTech startups (Oakbrook
          Finance, Wealth Wizards and now Koodoo) Kojo has developed
          domain expertise not only in the technology required to
          build complex financial software but also in the business
          itself.
        </p>
        <p tabIndex="0">
          Kojo attained a BSc in Maths and Physics from the University
          of Bristol, followed by a MSc in the Physics and Tech of
          Nuclear Reactors at the University of Birmingham.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Video from 2021</h2>
        <br />
        <div className="video-frame">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EztHISQ6Tiw"
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
            aria-label="Kojo: Youtube of Talk"
            href="https://youtu.be/EztHISQ6Tiw"
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
              aria-label="Kojo Hinson: Twitter"
              href="https://twitter.com/KojoHinson"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Kojo Hinson: LinkedIn"
              href="https://www.linkedin.com/in/kojo-h-69a4074a/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
