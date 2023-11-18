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

export default function ShaunLawrence() {
  return (
    <Layout>
      <Head>
        <title>Shaun Lawrence</title>
      </Head>
      <Header
        title={'Shaun Lawrence'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Shaun_L.jpg"
            alt="Picture of Shaun Lawrence"
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
        <h2 tabIndex="0">Choose your own adventure</h2>
        <p tabIndex="0">
          Growing up I used to love diving into a ‘choose your own
          adventure’ style book and then later on in life, the same
          concept in video game form. I would like to apply this
          concept in today’s talk…
        </p>
        <p tabIndex="0">
          Join me in learning about how we can build video games with
          .NET MAUI in the form of a ‘choose your own adventure’ style
          game. You as the collective audience will be able to choose
          the paths that we go down and influence the content that
          gets presented.
        </p>
        <p tabIndex="0">
          Learn through our own voting system how we can combine
          technology such as SignalR to provide real time multi-player
          support into our .NET MAUI based games as well as many other
          cool techniques to really make our games or applications
          feel alive.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Shaun Lawrence</h2>
        <p tabIndex="0">
          <b>Independent Software Engineer</b>
        </p>
        <p tabIndex="0">
          Father | Husband | Gamer | Imposter | Microsoft MVP
        </p>
        <p tabIndex="0">
          Senior Software Engineer working in all things .NET working
          at Tinysoft Ltd.
        </p>
        <p tabIndex="0">
          I love to tinker with things be that software related or
          better still disconnected from any computer.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Shaun Lawrence: X"
              href="https://twitter.com/Bijington"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Shaun Lawrence: LinkedIn"
              href="https://www.linkedin.com/in/shaun-lawrence-53a0099/"
            >
              LinkedIn
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Shaun Lawrence: Website"
              href="https://tiny-soft.co.uk/"
            >
              Website
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
