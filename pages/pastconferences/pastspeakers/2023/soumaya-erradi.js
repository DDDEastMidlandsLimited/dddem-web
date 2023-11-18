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

export default function SoumayaErradi() {
  return (
    <Layout>
      <Head>
        <title>Soumaya Erradi</title>
      </Head>
      <Header
        title={'Soumaya Erradi'}
        banner="/static/banners/speakers.jpg"
      />
      <section className="past-speakers-section">
        <PastSpeakersButton />
        <div className="speakerpic-container">
          <Image
            src="/static/speakers/2023/Soumaya_E.jpg"
            alt="Picture of Soumaya Erradi"
            className="speakerpic"
            height={250}
            width={250}
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
        <h2 tabIndex="0">Evergreen skills for software developers</h2>
        <p tabIndex="0">
          Learn the "evergreen" skills that every software developer
          needs to thrive in their career, regardless of the latest
          technologies and trends. In this talk, we'll explore some of
          these and how to cultivate them to support your growth and
          success as a developer.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">About Soumaya Erradi</h2>
        <p tabIndex="0">
          <b>Lead Software Developer</b>
        </p>
        <p tabIndex="0">
          I'm Soumaya Erradi and I'm a software developer and an IT
          teacher.
        </p>
        <p tabIndex="0">
          I'm high skilled in web development (frontend and backend),
          specialized in developing enterprise applications using
          Angular. Currently, I'm working as frontend lead developer
          in a team focused on blockchain app development.
        </p>
        <p tabIndex="0">
          I'm also holding coding courses and meetups to deepen
          technical and business issues related to Blockchain and
          Smart Contracts. As a speaker at conferences I bring
          advanced Angular topics, tips for the integration of smart
          contracts and best solutions for decentralized applications
          and web3.
        </p>
      </section>

      <section className="past-speakers-section">
        <h2 tabIndex="0">Links</h2>
        <ul>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Soumaya Erradi: Twitter"
              href="https://twitter.com/sumy92"
            >
              X
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Soumaya Erradi: Website"
              href="https://www.soumayaerradi.it/"
            >
              Website
            </a>
          </li>
          <li tabIndex="0">
            <a
              target="_blank"
              rel="noreferrer"
              aria-label="Soumaya Erradi: LinkedIn"
              href="https://www.linkedin.com/in/soumaya-erradi"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
