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

export default function MarcSteele() {
  return (
    <Layout>
      <Head>
        <title>Marc Steele</title>
      </Head>
      <Header
        title={'Marc Steele'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Marc_S.jpg"
            alt="Picture of Marc Steele"
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
          Hacking Your Home Network from a TV Broadcast
        </h2>
        <p tabIndex="0">
          The technical standards for broadcast TV allow JavaScript
          applications to be delivered over the air and run on an
          embedded browser on your TV. Given they can run without you
          noticing and have access to the network your smart TV is
          connected to, how hard is it to perform this attack and what
          risk does your TV pose?
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Marc</h2>
        <p tabIndex="0">
          <b>
            Software Architect, MSc. Student & Podcast Host on "A Wee
            Natter"
          </b>
        </p>
        <p tabIndex="0">
          Marc brings together a unique mix of technology and
          broadcast experience that's sure to make for a fascinating
          presentation.
        </p>
        <p tabIndex="0">
          He currently works for a business helping improve power
          grids around the world but has in the past had his work
          featured on Hackaday and PC Tools magazine.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Marc Steele: Twitter"
              href="https://www.linkedin.com/in/technicallyminded/"
            >
              LinkedIn
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Marc Steele: X"
              href="https://twitter.com/steelegbr"
            >
              X
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
